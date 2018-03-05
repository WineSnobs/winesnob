const router = require('express').Router()
const User = require('../db/models/user')
const Place = require('../db/models/place')
module.exports = router

router.post('/login', (req, res, next) => {
<<<<<<< HEAD
  // req.session.destroy()
  User.findOne({where: {email: req.body.email}})
=======
  req.session.guestOrder= req.session.order;
  req.session.order = null;
  User.findOne({where: {email: req.body.email},
    include: [{
      model: Place,
      as: 'place'
    }]
  })
>>>>>>> c0bf6040c224bfc281d95180776fa314ac9a2bb7
    .then(user => {
      if (!user) {
        res.status(401).send('User not found')
      } else if (!user.correctPassword(req.body.password)) {
        res.status(401).send('Incorrect password')
      } else {
        req.login(user, err => (err ? next(err) : res.json(user)))
<<<<<<< HEAD
        req.session.passport= user;
        console.log('REQ.SESSION', req.session)
=======
        //req.session.passport= user.dataValues;
>>>>>>> c0bf6040c224bfc281d95180776fa314ac9a2bb7
      }
    })
    .catch(next)
})

router.post('/signup', (req, res, next) => {
  Place.create({
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    phone: req.body.phone
  })
  .then(place => {
    User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      placeId: place.id,
    })
    .then(user => {
      req.login(user, err => (err ? next(err) : res.json(user)))
<<<<<<< HEAD
      req.session.passport= user;
      console.log('REQ.SESSION SIGN UP', req.session)
=======
      req.session.passport = user;
>>>>>>> c0bf6040c224bfc281d95180776fa314ac9a2bb7
    })
    .catch(err => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(401).send('User already exists')
      } else {
        next(err)
      }
    })
  })
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  res.send(req.user)
})

router.use('/google', require('./google'))