const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatoresAliases: false,
    

            pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            aquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

            }

    }
)

sequelize.authenticate()
.then(()=>{
    console.log('connected');
})

const db= {}

db.Sequelize = sequelize
db.sequelize = sequelize

db.products = require ('./productModel.js')(sequelize, DataTypes);
db.reviews = require ('./reviewModel.js')(sequelize, DataTypes)

db.sequelize.sync({force: false})
.then(()=>{
    console.log('yes resync done!')
})

module.exports = db;