const {Router} = require('express')
const route = Router()
const FundoImobiliarioController = require('./controllers/FundoImobiliarioController')

route.get('/', FundoImobiliarioController.home)
route.get('/fi', FundoImobiliarioController.index)
route.post('/fi', FundoImobiliarioController.create)
route.put('/fi/:_id', FundoImobiliarioController.change)
route.delete('/fi/:_id', FundoImobiliarioController.delete)


module.exports = route
