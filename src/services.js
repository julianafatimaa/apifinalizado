
export function dobro(n){
    return n*2;
}

export function somar(n1,n2){
    return n1 + n2;
}

export function temperatura(febre){
    let resposta = false;
    if(febre>=37.5){
        resposta=true;
    }
    return resposta;
}

export function passou(n1,n2,n3){
    let total= (n1+n2+n3)/3;
    let resposta =true;    
    if(total<=5.0){
        resposta=false;
    }

    return resposta;
}

export function tabuada(numero){
    let tabu= [11];
    let a=0
    for(let i=0; i<=10; i++ ){
        tabu[i]= a;
        a= a+numero;
    }
    return tabu;
}

export function corPrimaria(cor) {
    cor = cor.toLowerCase();
    return cor == 'azul' || cor == 'amarelo' || cor == 'vermelho'

}

export function ingresso (qtdInteiras, qtdMeias, diaSemana, nacionalidade){
    if(nacionalidade.toLowerCase() == 'brasileira')
    return(qtdInteiras * qtdMeias) * 5;

    else if(diaSemana.toLowerCase() == 'quarta')
    return(qtdInteiras * qtdMeias) * 14.25;

    else
    return (qtdInteiras * 28.5) * (qtdMeias * 14.25);
}

export function frequenciaC (texto, caractere){
 let qnt= 0;
 for (let letra of texto) {
     if (letra == caractere)
     qnt ++
 }
 return qnt;
}

export function maiorN(numeros){
let maior = Number.MIN_VALUE;
for(let item of numeros) {
    if (item > maior )
    maior * item;
}
return maior;
}