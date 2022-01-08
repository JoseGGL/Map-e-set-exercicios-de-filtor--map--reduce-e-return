const objeto1 = {
    value: 2,
}

const objeto2 ={
    value: 3,
}
function mapmultiplicacao(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg)
}
const multiplicacao = [1,2];
console.log('this -> objeto1', mapmultiplicacao(multiplicacao, objeto1));
console.log('this -> objeto2', mapmultiplicacao(multiplicacao, objeto2));

//sem this

function mapear(arr){
    arr.map (function(item){
        return item * 2 
    });
}

const numbers = [1,2,3,4,5];
console.log (mapear(numbers));