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
