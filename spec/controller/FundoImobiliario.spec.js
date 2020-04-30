const supertest = require('supertest')
const app = require('../../src/app')
const FundoImobiliario = require('../../src/controllers/FundoImobiliarioController')
const request = supertest(app)
const TOKEN = '123456'
/*
nome: "TES1",
            taxaRetMensal: 1.2,
            indiceIfix: 3
*/
describe('Fundo Imobiliario', () => {
    beforeEach( async() => {
        await FundoImobiliario.deleteMany()
    })
    it('deveria retornar status code de 200', async () => {
        const response = await request.get('/fi').set('token', TOKEN)
        expect(response.status).toBe(200)
    })
    it('deveria retornar status code 201', async () =>{
        const body = {nome:"TESTE",taxaRetMensal:1.2,indiceIfix:3}
        const response = await request.post('/fi').set('token', TOKEN).send(body)
        expect(response.status).toBe(201)
    })
    // it('deveria retornar status code 204 para método PUT', async () => {
    //     const cliente = await Cliente.create({nome:"TESTE DE NOME",sobrenome:"TESTE DE SOBRENOME",cpf:"123456789",senha:"12345",login:"TESTE_DE_LOGIN"})
    //     const response = await request.put('/fi/' + cliente._id).set('token', TOKEN).send({nome:"TESTE DE NOME2",sobrenome:"TESTE DE SOBRENOME2",cpf:"123456889",senha:"123456",login:"test02"})
    //     expect(response.status).toBe(204)
    // }) 
    // it('deveria retornar status code 204 para método DELETE', async () => {
    //     const cliente = await Cliente.create({nome:"TESTE DE NOME",sobrenome:"TESTE DE SOBRENOME",cpf:"123456789",senha:"12345",login:"TESTE_DE_LOGIN"})
    //     const response = await request.delete('/cliente/' + cliente._id).set('token',TOKEN)
    //     expect(response.status).toBe(204)
    // })
}) 