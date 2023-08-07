# ✩ Lista 01 de exercícios de Javascript ✩
### 01) Escreva um programa que calcule a área de um retângulo com base no comprimento e largura fornecidos pelo usuário.
````javascript
const calculaAreaDoRetangulo = () => {
    let comprimento = parseFloat(prompt("Digite o comprimento do retângulo!"))
    let largura = parseFloat(prompt("Digite a largura do retângulo!"))
    let area = comprimento * largura
    window.alert(`A área do retângulo é ${area}.`)
}

calculaAreaDoRetangulo()
````

### 02) Crie um programa que determine se um número é par ou ímpar utilizando o operador de módulo (%).
````javascript
let numeroEscolhido = 124
const parOuImpar = (numero) => {
    if (numero % 2 === 0) {
        return "par"
    } else {
        return "ímpar"
    }
}

console.log(`O número ${numeroEscolhido} é ${parOuImpar(numeroEscolhido)}.`)
````

### 03) Escreva uma função que verifique se uma string fornecida pelo usuário contém a palavra "JavaScript".
````javascript
let palavraUsuario = prompt("Digite uma palavra!")
const temJavascriptOuNao = (palavra) => {
    if (palavra.toLowerCase().includes("javascript")) {
        window.alert("A string contém a palavra 'Javascript'!")
    } else {
        window.alert("A string não contém a palavra 'Javascript'!")
    }
}

temJavascriptOuNao(palavraUsuario)
````

### 04) Implemente um programa que compare duas strings e determine se elas são iguais, ignorando maiúsculas e minúsculas.
````javascript
let palavra01 = "Jujuba"
let palavra02 = "Chocolate"
const comparaPalavras = (string01, string02) => {
    if (string01.toLowerCase() === string02.toLowerCase()) {
        console.log(`As palavras "${string01}" e "${string02}" são iguais!`)
    } else {
        console.log(`As palavras "${string01}" e "${string02}" são diferentes.`)
    }
}

comparaPalavras(palavra01, palavra02)
````

### 05) Crie uma função que concatene duas listas (arrays) e retorne a lista resultante.
````javascript
let lista01 = ["Verde", "Amarelo", "Azul"]
let lista02 = ["Vermelho", "Rosa", "Roxo"]
const concatenaListas = (lista01, lista02) => {
    let resultado = lista01.concat(lista02)
    console.log(`Listas concatenadas: ${resultado.join(", ")}`)
}

concatenaListas(lista01, lista02)
````

### 06) Escreva um programa que calcule a média dos valores em um array utilizando a função reduce() e length. 
````javascript
let listaNumeros = [12, 25, 40, 75, 122]
const calculaMedia = (numeros) => {
    let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
    return soma / numeros.length
}

let media = calculaMedia(listaNumeros)
console.log(`A lista é composta por ${listaNumeros} e sua média de valores é ${media}.`)
````

### 07) Crie uma função que retorne a data e hora atuais no formato legível: "Dia/Mês/Ano Hora:Minuto:Segundo".
````javascript
const dataHora = () => {
    let hoje = new Date()
    let dia = hoje.getDate()
    let mes = hoje.getMonth() + 1
    let ano = hoje.getFullYear()
    let hora = hoje.getHours()
    let minutos = hoje.getMinutes()
    let segundos = hoje.getSeconds()
    return `Hoje é ${dia}/${mes}/${ano} e a hora atual é ${hora}:${minutos}:${segundos}.`
}

console.log(dataHora())
````

### 08) Implemente um programa que encontre o maior valor em um array usando a função Math.max(). 
````javascript
const maiorValorDoArray = (numeros) => Math.max(...numeros)
let arrayNumeros = [3, 34, 240, 12, 75, 122, 30, 35, 42, 45, 58]
let maximo = maiorValorDoArray(arrayNumeros)
console.log(`O array é composto por ${arrayNumeros} e seu maior número é ${maximo}.`)
````

### 09) Escreva uma função que gere um número inteiro aleatório entre dois valores dados como argumentos. 
````javascript
let minimo = 23
let maximo = 57
const numeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let aleatorio = numeroAleatorio(minimo, maximo)
console.log(`Um valor aleatório entre ${minimo} e ${maximo} seria ${aleatorio}!`)
````

### 
````javascript

````
