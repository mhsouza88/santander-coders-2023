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

### 07) Crie uma função que verifique se uma palavra é um palíndromo (lê-se igual de trás para frente).
````javascript
const ehPalindromo = palavra => {
    const palavraInvertida = palavra.split('').reverse().join('')
    return palavra === palavraInvertida
}

const teste = "arara"
console.log(ehPalindromo(teste))
````

### 08) Escreva uma função que conte quantas vezes uma determinada letra aparece em uma string.
````javascript
const contaOcorrenciasDeLetra = (frase, letraParaContar) => {
    const contaLetra = (str, letra) => str.split('').filter(l => l === letra).length
    return `A letra '${letraParaContar}' aparece ${contaLetra(frase, letraParaContar)} vezes.`
}

console.log(contaOcorrenciasDeLetra("A perseverança é a chave para o sucesso.", "a"))
````

### 09) Crie uma função que calcule o fatorial de um número.
````javascript
const fatorial = (num) => {
    if (num === 0) return 1
    let resultado = 1
    for (let i = 1; i <= num; i++) {
        resultado *= i
    }
    return resultado
}

console.log(fatorial(5))
````

### 10) Escreva uma função que converta graus Celsius para Fahrenheit.
````javascript
const converterTemperatura = () => {
    const celsiusParaFahrenheit = celsius => (celsius * 9/5) + 32
    console.log(celsiusParaFahrenheit(0)) 
}

converterTemperatura()
````

### 11) Crie uma função que encontre o valor mínimo e máximo em um array de números.
````javascript
const encontrarMinMax = (arr) => {
    const min = arr.reduce((a, b) => Math.min(a, b))
    const max = arr.reduce((a, b) => Math.max(a, b))
    return {
        min: min,
        max: max
    }
}

const numeros = [3, 1, 4, 1, 5, 9, 2, 6, 5]
const resultado = encontrarMinMax(numeros)
console.log(`Mínimo: ${resultado.min}, Máximo: ${resultado.max}`)
````

### 12) Escreva uma função que calcule a sequência de Fibonacci até um determinado número de termos.
````javascript
const fibonacci = (numero) => {
    let sequencia = [0, 1]
    for (let i = 2; i < numero; i++) {
        sequencia.push(sequencia[i - 1] + sequencia[i - 2])
    }
    return sequencia.slice(0, numero)
}

console.log(fibonacci(13))
````

### 13) Crie uma função que verifique se um número é primo.
````javascript
const ehPrimo = (numero) => {
    if (numero <= 1) return false
    if (numero <= 3) return true
    if (numero % 2 === 0 || numero % 3 === 0) return false
    let contador = 5
    while (contador * contador <= numero) {
        if (numero % contador === 0 || numero % (contador + 2) === 0) return false
        contador += 6
    }
    return true
}

console.log(ehPrimo(5))
console.log(ehPrimo(6)) 
````

### 14) Escreva uma função que remova os elementos duplicados de um array.
````javascript
const eliminarDuplicados = () => {
    const removeDuplicados = arr => arr.filter((item, index) => arr.indexOf(item) === index)
    let numeros = [1, 2, 3, 2, 4, 5, 5]
    let numerosUnicos = removeDuplicados(numeros)
    console.log(numerosUnicos)
}

eliminarDuplicados()
````

### 15) Crie uma função que ordene um array de números em ordem crescente.
````javascript
const mostrarOrdenado = () => {
    const ordenarCrescente = arr => arr.sort((a, b) => a - b)
    let numeros = [34, 5, 23, 2, 45, 7]
    let numerosOrdenados = ordenarCrescente(numeros)
    console.log(numerosOrdenados)
}

mostrarOrdenado()
````

### 16) Escreva uma função que retorne o número de dias entre duas datas.
````javascript
const diasEntreDatas = (data1, data2) => {
    const formatarData = (dataString) => {
        const data = new Date(dataString)
        const dia = data.getDate().toString().padStart(2, '0')
        const mes = (data.getMonth() + 1).toString().padStart(2, '0') 
        const ano = data.getFullYear()
        return `${dia}/${mes}/${ano}`
    }
    const umDia = 1000 * 60 * 60 * 24
    const diferenca = Math.abs(new Date(data2) - new Date(data1))
    const data1Formatada = formatarData(data1)
    const data2Formatada = formatarData(data2)
    console.log(`A diferença de dias entre ${data1Formatada} e ${data2Formatada} é de ${Math.floor(diferenca / umDia)} dias.`)
}

diasEntreDatas("2022-05-05", "2023-10-14")
````

### 17) Crie uma função que calcule o raio de um círculo com base em sua área.
````javascript
const obterRaioDoCirculo = () => {
    const calcularRaio = area => {
        return Math.sqrt(area / Math.PI)
    }
    const area = 50
    console.log(`O raio de um círculo com a área de ${area} é aproximadamente ${calcularRaio(area).toFixed(2)}.`)
}

obterRaioDoCirculo()
````

### 18) Escreva uma função que encontre o segundo maior valor em um array de números.
````javascript
const segundoMaior = () => {
    const numeros = [10, 5, 8, 12, 15, 15, 8]
    const maiorValor = Math.max(...numeros)
    const numerosSemMaior = numeros.filter(num => num !== maiorValor)
    const segundoMaiorValor = Math.max(...numerosSemMaior)
    console.log(`O segundo maior valor no array de ${numeros} é ${segundoMaiorValor}.`)
}

segundoMaior()
````

### 19) Crie uma função que converta um valor em dólares para outra moeda com base em uma taxa de câmbio.
````javascript
const converterDolares = (valorEmDolares, taxaCambio) => {
    let valorConvertido = valorEmDolares * taxaCambio
    console.log(`U$${valorEmDolares} convertidos para Reais fica em R$${valorConvertido}.`)
}

converterDolares(100, 5.25)
````

### 20) Escreva uma função que verifique se duas strings são anagramas (contêm as mesmas letras, mas em ordens diferentes).
````javascript
const saoAnagramas = (str1, str2) => {
    const organizarString = str => str.replace(/[\W_]/g, '').toLowerCase().split('').sort().join('')
    return organizarString(str1) === organizarString(str2)
}

console.log(saoAnagramas('amor', 'Roma'))
console.log(saoAnagramas('Jujuba', 'Bola'))
````
