const environment = process.env.NODE_ENV || 'dev';

let config = {};

if(environment === "dev"){
    config = {
        port: '4800',
        JWT_SECRET: "12366532312312",
    }
}else if(environment === "prod"){
    config = {
        port: '8080',
        JWT_SECRET: "12366532312312",
    }
}

module.exports = config;