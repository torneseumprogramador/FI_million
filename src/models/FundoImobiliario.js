const mongoose = require('../config/database'); 

const FundoImobiliario = mongoose.model('fundoImobiliario', {
  nome: {type: String, required: true,unique: true},
  taxaRetMensal: {type: Number},
  indiceIfix: {type: Number}
  
});

module.exports = FundoImobiliario;