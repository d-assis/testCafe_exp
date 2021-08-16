let num = [5,6]

function soma(a,b){
    return a + b
}

function subtracao (a,b){ 
    return a-b
}

console.log(soma(num[0],num[1]))

// não entendi como passar a variável 'num' como parâmetro de uma arrow function
console.log((num[0],num[1]) => subtracao)