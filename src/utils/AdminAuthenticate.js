const passport = require('passport');

module.exports.AdminAuthenticate = (req, res, next) => {
    return new Promise((resolve, reject) => {
        passport.authenticate('jwt', { session: false, failWithError: true }, (err, user, info) => {
            if (err) {
                return reject(err);
            }
            if (!user) {
                // Handle authentication failure here if needed
                return res.status(401).json({
                    status: 'error',
                    message: 'Invalid authorization token',
                });
            }
            if (user.role !== "admin") {
                // Handle authentication failure here if needed
                return res.status(401).json({
                    status: 'error',
                    message: 'unauthorized permission',
                });
            }

            // Authentication successful, you can access the authenticated user in req.user
            req.user = user;            

            // Continue to the next middleware or route handler
            resolve(next());
        })(req, res, next);
    });
};