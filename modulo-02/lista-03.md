# ✩ Lista 03 de exercícios de Javascript ✩
### 01) Crie uma função que calcule a soma de dois números.
````javascript
const calculaSoma = (num1, num2) => {
    const soma = (a, b) => a + b
    return soma(num1, num2)
}

const resultado = calculaSoma(5, 3)
console.log(`O resultado da soma é ${resultado}.`)
````

### 02) Escreva uma função que calcule o produto de três números.
````javascript
const calculaProduto = (num1, num2, num3) => {
    const produto = (a, b, c) => a * b * c
    return produto(num1, num2, num3)
}

const resultado = calculaProduto(5, 3, 2)
console.log(`O resultado do produto é ${resultado}.`)
````

### 03) Crie uma função que verifique se um número é par ou ímpar.
````javascript
const ehPar = numero => numero % 2 === 0 ? "Par" : "Ímpar"
const resultado = ehPar(7)
console.log(`O número é ${resultado}.`)

````

### 04) Escreva uma função que inverta uma string (por exemplo, "hello" se torna "olleh").
````javascript
const inverterString = str => str.split('').reverse().join('')
const resultado = inverterString("hello")
console.log(resultado)
````

### 05) Crie uma função que retorne o maior valor de um array de números.
````javascript
const maiorValor = arr => Math.max(...arr)
const numeros = [5, 3, 9, 2, 7]
console.log(maiorValor(numeros))
````

### 06) Escreva uma função que calcule a média de um array de números.
````javascript
const media = arr => arr.reduce((total, num) => total + num, 0) / arr.length
const numeros = [5, 3, 9, 2, 7]
console.log(media(numeros)) 
````

### 07)
````javascript

````

### 08)
````javascript

````

### 09)
````javascript

````

### 10)
````javascript

````

### 11)
````javascript

````

### 12)
````javascript

````

### 13)
````javascript

````

### 14)
````javascript

````

### 15)
````javascript

````

### 16)
````javascript

````

### 17)
````javascript

````

### 18)
````javascript

````

### 19)
````javascript

````

### 20)
````javascript

````
