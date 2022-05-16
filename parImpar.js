function prueba(){
    return 'works!'
}
function parImpar(num){
    if (num%2 == 0) {
        return 'par';
    }else{
        return 'impar';
    }
}
module.exports = {prueba, parImpar}
