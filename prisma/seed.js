const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seed() {
    console.log('Seeding database...');
    // Create admin
    const alice = await prisma.user.create({
        data: {
            firstName: 'Lithin',
            lastName: 'Kuriachan',
            username: 'lithin',
            salt: '8e656fd11eee64e105379da19d4dd7e5',  //pw: admin
            password: 'd88fce67c70aadd86a9f20c4d9a311e33bd31aeb4ea0fd5ed8dbceea7cad1a40', //hash            
            role: 'admin',            
        }
    });

    console.log('Seeding completed!');
}

seed()
    .catch(error => console.error(error))
    .finally(() => prisma.$disconnect());
