const FundoImobiliario = require('../../src/models/FundoImobiliario')

describe('FundoImobiliario', ()=> {
  beforeEach(async ()=> {
    await FundoImobiliario.deleteMany()
  })
  it('Deve retornar o modelo de FundoImobiliario', async () => {
    const fundoimobiliario = await FundoImobiliario.find({})
    expect(fundoimobiliario).not.toBeUndefined()
  });
  it('deveria ser definido', () => {
      expect(FundoImobiliario).toBeDefined()
  })
  it('deveria criar um fundoimobiliario', async () => {
    const fundoimobiliario = await FundoImobiliario.create({
            nome: "TES1",
            taxaRetMensal: 1.2,
            indiceIfix: 3
        })
    expect(fundoimobiliario.nome).toBe("TES1")
  })
  it('deveria atualizar um fundoimobiliario', async () =>{
    const fundoimobiliario = await FundoImobiliario.create({
            nome: "TES1",
            taxaRetMensal: 1.5,
            indiceIfix: 3
        })
    const novoFundoImobiliario = await FundoImobiliario.findByIdAndUpdate(
      fundoimobiliario._id, 
      {
        nome: "TES2", 
        taxaRetMensal: 1.4,
        indiceIfix: 3
      },{new: true}
     )
    expect(novoFundoImobiliario.nome).toBe('TES2')
    expect(novoFundoImobiliario.taxaRetMensal).toBe(1.4)
  })
  it('deveria remover um fundoimobiliario', async () => {
    const fundoimobiliario = await FundoImobiliario.create({
            nome: "TES1",
            taxaRetMensal: 1.7,
            indiceIfix: 3
        })
    await FundoImobiliario.findByIdAndRemove(fundoimobiliario._id, {})
    const fundoimobiliarioRemovido = await FundoImobiliario.findById(fundoimobiliario._id)
    expect(fundoimobiliarioRemovido).toBeNull()
  })
})
/*
  nome: {type: String, required: true,unique: true},
  taxaRetMensal: {type: Number},
  indiceIfix: {type: Number}
*/