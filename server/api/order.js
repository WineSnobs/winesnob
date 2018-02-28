const router = require('express').Router()
const { User, Place, Order, List } = require('../db/models')
module.exports = router

router.post('/', (req, res, next) => {
  Order.create(req.body)
    .then(order => {
      order.orderCode = req.session.passport.orderCode
      console.log("session: ", req.session.passport)
      console.log(order.orderCode)
      return User.findOne({where: {orderCode: req.orderCode}})
    })
    .then(user => {
      console.log('user: ', user)
      res.json(user)
    // })
    // .then(user => {
    //   console.log(user)
    //   user.randomGenerate
    })
    .catch(next)
})

// router.post('/', (req, res, next) => {
//   Order.create(req.body)
//     .then(order => {
//       order.orderCode = req.session.passport.orderCode
//       console.log("session: ", req.session.passport)
//     })
//     .then(() => {
//       console.log("sessions logged")
//     })
//     .catch(next)
// })