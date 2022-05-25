import { Router } from "express";
import { dobro, somar, temperatura, passou, tabuada, corPrimaria, frequenciaC, ingresso, maiorN} from './services.js';
const server = Router();

server.get('/dobro/:numero', (req, resp)=> 
{
    try{
        const number = Number(req.params.numero);

        const x= dobro(number);
        resp.send({
            dobro: x
        });
    }
    catch(err){
        resp.status(404).send({
            erro: err.message
        }
        )
    }
} )

server.get('/somar',(req,resp) =>{
    try{
        const number= Number(req.query.a);
        const number2= Number(req.query.b);

        const resposta= somar(number, number2)

        resp.send({
            somar: resposta
        });
}   catch(err){
            resp.status(404).send({
                erro: err.message
            })
        }
} )

server.get('/febre', (req,resp) =>{
    try{
        const febril= Number(req.query.a);

        const resposta= temperatura(febril);

        resp.send({
            febril: resposta
        });

    }catch(err){
        resp.status(404).send({
            erro:err.message
        })
    }
})

server.get('/tabuada', (req, resp)=>{
    try{
    const tabu= Number(req.query.a);

    const resposta= tabuada(tabu);

    resp.send({
      tabuada: resposta
    })
} catch(err){ 
    resp.status(404).send({
        erro: err.message
    })
}
} )

server.post('/passou', (req,resp) =>{
    let n1= req.body.a;
    let n2= req.body.b;
    let n3= req.body.c;

    const resposta= passou(n1,n2,n3);

    resp.send({
        aprovado: resposta
    })

})


server.get ('/dia2/corprimaria/:cor', (req, resp) => {
    try{
        const { cor } = req.params;
        const primaria = corPrimaria (cor);
        resp.send({
         primaria : primaria
        });
    }
    catch(err){
        resp.send ({
            erro : err.message
        })
    }
})

server.post('/dia2/ingressosc', (req, resp ) => {
    try{
        const { qtdInteiras, qtdMeias, diaSemana, nacionalidade} = req.body;
        const total = ingresso( qtdInteiras, qtdMeias, diaSemana, nacionalidade);
        resp.send({
            total : total
        });
    }
    catch(err){
        resp.send({
            erro : err.message
        })
    }
})

server.get('/dia2/freqcaractere/:texto/:caractere', (req, resp) => {
    try{
        const { texto, caractere} = req.params;
        const freq = frequenciaC ( texto, caractere);
        resp.send({
            freq : freq
        })
    }
    catch(err) {
    resp.send({
        erro: err.message
    })
    }
})

server.post('/dia2/maiorNumero', (req, resp) => {
    try{
        const numeros = req.body;
        const maior = maiorN(numeros);
        resp.send ({
            maior : maior
        });
    }
    catch(err){
        resp.send ({
            erro : err.message
        })
    }
})



export default server;