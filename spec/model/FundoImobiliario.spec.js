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
            ir: false,
            pais: "Brasil",
            preoupos: true,
            vencimento: new Date()
        })
    expect(fundoimobiliario.nome).toBe("TES1")
  })
  it('deveria atualizar um fundoimobiliario', async () =>{
    const fundoimobiliario = await FundoImobiliario.create({
            nome: "TES1",
            ir: false,
            pais: "Brasil",
            preoupos: true,
            vencimento: new Date()
        })
    const novoFundoImobiliario = await FundoImobiliario.findByIdAndUpdate(fundoimobiliario._id, {nome: "TES2", taxa: 7.5, ir: true, pais: "Brasil", preoupos: true, vencimento: new Date()}, {new: true})
    expect(novoFundoImobiliario.nome).toBe('TES2')
    expect(novoFundoImobiliario.ir).toBe(true)
  })
  it('deveria remover um fundoimobiliario', async () => {
    const fundoimobiliario = await FundoImobiliario.create({
            nome: "TES1",
            ir: false,
            pais: "Brasil",
            preoupos: true,
            vencimento: new Date()
        })
    await FundoImobiliario.findByIdAndRemove(fundoimobiliario._id, {})
    const fundoimobiliarioRemovido = await FundoImobiliario.findById(fundoimobiliario._id)
    expect(fundoimobiliarioRemovido).toBeNull()
  })
})
/*
  nome: {type: String, required: true, unique: true},
  ir: {type: Boolean, required: true},
  pais: {type: String, required: true},
  preoupos: {type: Boolean, required: true},
  vencimento: {type: Date, required: true, default:new Date().getDate()+1 }
*/