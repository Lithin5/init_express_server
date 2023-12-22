const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { createHash, randomBytes } = require('crypto');

const createUserModel = async (input) => {
    try {
        const salt = randomBytes(16).toString('hex');
        const hashedPassword = createHash('sha256').update(input.password + salt).digest('hex');
        const user = await prisma.user.create({ data: { ...input, password: hashedPassword } });        
        return { success: true, user: { ...user, password: undefined } };
    } catch (err) {
        return { success: false, err };
    } finally {
        await prisma.$disconnect();
    }
};

module.exports = {
    createUserModel
};
