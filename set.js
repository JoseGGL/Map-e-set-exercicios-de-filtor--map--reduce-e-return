var arr1 = []
arr1.push(Number(prompt('Insira valores numéricos')));
arr1.push(Number(prompt('Insira valores numéricos')));
arr1.push(Number(prompt('Insira valores numéricos')));
function VA(array){
    const Set1 = new Set (array);
    return [...Set1];
}
console.log(VA(arr1));