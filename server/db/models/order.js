const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
   orderCode: {
     type: Sequelize.STRING
   },
   date: {
     type: Sequelize.STRING,
     defaultValue: new Date().value
   },
   status: {
     type: Sequelize.STRING,
     defaultValue: 'Ordered'
   },
   total: {
     type: Sequelize.DECIMAL,
     defaultValue: 0.0
   }
})


module.exports = Order;