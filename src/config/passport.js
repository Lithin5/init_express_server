const passport = require('passport');
const config = require('./config');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.JWT_SECRET;
opts.issuer = '';
opts.audience = '';
passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    let id = jwt_payload.userId;
    prisma.user.findFirstOrThrow({
        where: {
            id
        }
    }).then((user) => {
        done(null, user);
    }).catch((err) => {
        done(err, null);
    })
}));