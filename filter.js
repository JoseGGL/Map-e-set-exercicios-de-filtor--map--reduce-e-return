function filtroimpar(arr){
    return arr.filter(chamar)

}

function chamar(item){
    return item % 2 == 1;
}

const array = [1,23,3,4,5,6];