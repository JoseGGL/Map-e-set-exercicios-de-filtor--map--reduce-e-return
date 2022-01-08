function administrador(map){
    
    let adm = []
for ([key, value] of map){
    if (value == 'A'){
        adm.push(key);
    }}  
    return adm;
}
const users = new Map();
users.set('A', 'A')
users.set('B', 'A')
users.set('C', 'A')
users.set('D', 'B')

console.log(administrador(users));