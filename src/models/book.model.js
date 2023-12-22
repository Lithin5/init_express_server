const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createBookModel = async (input) => {
    try {        
        const book = await prisma.book.create({ data: input });
        return { success: true, book };
    } catch (err) {
        return { success: false, err };
    } finally {
        await prisma.$disconnect();
    }
};

module.exports = {
    createBookModel
};
