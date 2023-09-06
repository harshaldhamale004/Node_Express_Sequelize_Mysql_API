module.exports= {
    HOST: 'ecommerce-webapp-server.database.windows.net',
    USER: 'ecommerce-webapp-server',
    PASSWORD: 'Mssql@123',
    DB: 'EcommerceWebappDB',
    dialect: 'mssql',

    pool: {
        max: 5,
        min: 0, 
        acquire: 30000,
        idle: 10000
    }
}