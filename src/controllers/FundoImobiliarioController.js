const FundoImobiliario = require('../models/FundoImobiliario');
const TOKEN='123456'

const FundoImobiliarioController  = {

home: async (req, res, next) => {
    return res.status(200).json({info: 'API Fundo Imobiliario - Million - protegido com token'
        })
    },
index: async(req,res,next)=>{
    if(req.headers.token == TOKEN){
        try{
            const fundoImob = await FundoImobiliario.find({});
            return res.status(200).send(fundoImob);
        }catch(err){
            return res.status(401).send(err);

        }
    }
    return res.status(401).json({error: 'Acesso negado'});
},


create: async (req, res, next) => {
    if (req.headers.token === TOKEN) {
        const { nome, taxaRetMensal, indiceIfix } = req.body
        try{

            const fundoImob = await FundoImobiliario.create({ 
            nome,
            taxaRetMensal,
            indiceIfix 
        })
        return res.status(201).send(fundoImob);

        }catch(err){
            return res.status(401).send(err);
        }
    }
    return res.status(401).json({error: 'Acesso negado'});
},


change: async (req, res, next) => {
    if (req.headers.token == TOKEN) {
        const{nome, taxaRetMensal, indiceIfix} = req.body
        const{_id} = req.params
        try{
            await FundoImobiliario.findOneAndUpdate(
                {_id:_id},{nome:nome,taxaRetMensal:taxaRetMensal,indiceIfix:indiceIfix})
            return res.status(204).send({message: 'Alterado com sucesso'});
            
        }catch(err){
            return res.status(401).send(err);
        }
    }
    return res.status(401).json({error: 'Acesso negado'});
},

delete: async (req, res, next) => {
    if (req.headers.token == TOKEN) {
     try{
        await FundoImobiliario.findByIdAndDelete(req.params._id)
        return res.status(204).send({});
        
        }catch(err){
            return res.status(401).send(err);
        }

    }
    return res.status(401).json({error: 'Acesso negado'});
}

}

module.exports = FundoImobiliarioController