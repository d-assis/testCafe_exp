let num = [5,6]

function soma(a,b){
    return a + b
}

// para declarar uma função como arrow function, deve-se primeiro armazená-la numa constante
const subtracao =  (a,b) => { 
    return a-b
}

console.log(soma(num[0],num[1]))

// para invocar essa função usa-se o nome da constante onde a mesma foi armazenada
console.log(subtracao(num[0],num[1]))