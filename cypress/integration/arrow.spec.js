it ('nada agora', function() {})

/* function soma(a, b) {
    return  a+b;
}

console.log(soma(1,4)) */

/* const soma = function (a, b) {
    return a + b;
} */

//Arrow Function
/* const soma = (a, b) => {
    return a + b;
} */

//const soma = (a, b) => a + b

const soma = a => a +a 
console.log(soma(1,4))

it ('Um teste com função', function() {
    console.log('Function', this)
})

it ('Um teste com Arrow', () => {
    console.log('Arrow', this)
})