function somar(arr123){
    return arr123.reduce(function(prev, atual){
        return prev + atual;
    })
}

const arr123 = [1,2];
console.log(somar(arr123));


//saldo

const lista1 = [
    {
    identificado: 'sopa',
    preco: '10'
    },
{
    identificado: 'comida',
    preco: '4'
},
{
    identificado: 'fruta',
    preco: '5'
}]

const saldopossivel = 100;
function saldofinal(saldopossivel, lista1){
    return lista1.reduce(function(prev, current){
        return prev - current.preco;
    }, saldopossivel)
}