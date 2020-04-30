const supertest = require('supertest')
const app = require('../../src/app')
const FundoImobiliario = require('../../src/models/FundoImobiliario')
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
    it('deveria retornar status code 204 para método PUT', async () => {
        const fundo = await FundoImobiliario.create({nome:"TESTE",taxaRetMensal:1.2,indiceIfix:3})
        const response = await request.put('/fi/' + fundo._id).set('token', TOKEN).send({nome:"TESTE1",taxaRetMensal:1.8,indiceIfix:3})
        expect(response.status).toBe(204)
    }) 
    it('deveria retornar status code 204 para método DELETE', async () => {
        const fundo = await FundoImobiliario.create({nome:"TESTE",taxaRetMensal:1.2,indiceIfix:3})
        const response = await request.delete('/fi/' + fundo._id).set('token',TOKEN)
        expect(response.status).toBe(204)
    })
}) 