const environment = process.env.NODE_ENV || 'dev';

let config = {};

if(environment === "dev"){
    config = {
        port: '4800'
    }
}else if(environment === "prod"){
    config = {
        port: '8080'
    }
}

module.exports = config;