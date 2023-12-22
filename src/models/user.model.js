const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { createHash, randomBytes } = require('crypto');
const config = require("../config/config");
const jwt = require('jsonwebtoken');

const createUserModel = async (input) => {
    try {
        const salt = randomBytes(16).toString('hex');
        const hashedPassword = createHash('sha256').update(input.password + salt).digest('hex');
        const user = await prisma.user.create({ data: { ...input, password: hashedPassword, salt } });
        return { success: true, user: { ...user, password: undefined } };
    } catch (err) {
        return { success: false, err };
    } finally {
        await prisma.$disconnect();
    }
};

const validateLogin = async ({ username, password }) => {
    try {        
        const user = await prisma.user.findUnique({ where: { username: username } });        
        if (!user) {
          // User not found
          return { success: false, err: 'Invalid credentials' };
        }
        const hashedPassword = createHash('sha256').update(password + user.salt).digest('hex');
        if (hashedPassword === user.password) {
            const expiresIn = '12h';            
            const token = await jwt.sign({
                userId: user.id,
                expiresIn,                
              }, config.JWT_SECRET, { expiresIn: expiresIn });
              console.log(token);
            return { success: true, user: { ...user, password: undefined }, token };
        }else{
            return { success: false, err: 'Invalid credentials' };
        }
    } catch (err) {
        return { success: false, err };
    } finally {
        await prisma.$disconnect();
    }
}

module.exports = {
    createUserModel,
    validateLogin
};
