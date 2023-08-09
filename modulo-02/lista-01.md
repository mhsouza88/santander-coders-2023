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

### 10) Crie um programa que verifique se um número dado pelo usuário é um número primo usando uma função.
````javascript
let numero = parseInt(prompt("Digite um número para verificar se ele é um número primo!"))
const ehPrimoOuNao = (num) => {
    if (num <= 1) {
        window.alert(`${num} não é um número primo.`)
        return
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            window.alert(`${num} não é um número primo.`)
            return
        }
    }
    window.alert(`${numero} é um número primo!`)
}

ehPrimoOuNao(numero)
````

### 11) Declare uma variável com valor "5" (string) e outra variável com valor 2 (número). Multiplique as duas variáveis e explique o resultado.
````javascript
let string = "10"
let numero = 5
const multiplicaValores = (str, num) => {
    let resultado = str * num
    console.log(`A string é ${string} e o número é ${numero}, e o resultado da multiplicação desses valores é ${resultado}.`)
}

multiplicaValores(string, numero)
````
#### Explicação: No JavaScript, ao multiplicar uma string que representa um número com um número real, a string é automaticamente convertida em número. Portanto, "10" torna-se 10 e, quando multiplicado por 5, o resultado é 50.

### 12) Converta a string "123" em um número inteiro e armazene-o em uma variável.
````javascript
let texto = "123"
const converteTextoParaInteiro = (texto) => {
    let numero = parseInt(texto)
    console.log(`Texto convertido para número inteiro: ${numero}.`)
}

converteTextoParaInteiro(texto)
````

###  13) Escreva um programa que adicione um número e uma string.
````javascript
let numero = 5
let texto = "45"
const adicionaNumeroETexto = (num, str) => {
    let resultado = num + str
    console.log(`Resultado da adição de ${numero} e ${texto}: ${resultado}.`)
}

adicionaNumeroETexto(numero, texto)
````

### 14) Explique o resultado e discuta a coerção que ocorre.
#### Explicação: Quando se tenta somar um número e uma string no JavaScript, o JavaScript transforma o número em texto e "cola" os dois textos juntos (eles são concatenados).

### 15) Declare uma variável com o valor null e outra variável com o valor undefined. Verifique se são iguais em valor e tipo.
````javascript
let valorNull = null
let valorUndefined = undefined
const verificaIgualdade = () => {
    if (valorNull === valorUndefined) {
        console.log("São iguais em valor e tipo!")
    } else if (valorNull == valorUndefined) {
        console.log("São iguais em valor, mas não em tipo!")
    } else {
        console.log("Não são iguais em valor nem em tipo!")
    }
}

verificaIgualdade()
````

### 16) Crie um programa que determine se uma variável é do tipo função usando o operador typeof.
````javascript
let ehDoTipoFuncao = function() {
    console.log("É uma função!")
}
const verificaSeEhFuncao = (ehDoTipoFuncao) => {
    if (typeof ehDoTipoFuncao === "function") {
        console.log("A variável é do tipo função.")
    } else {
        console.log("A variável não é do tipo função.")
    }
}

verificaSeEhFuncao(ehDoTipoFuncao)
````

### 17) Escreva um programa que calcule o resultado da expressão: (10 + 5) * 3 / 20.
````javascript
const calculaExpressao = () => {
    let resultado = (10 + 5) * 3 / 20
    console.log(`Resultado da expressão (10 + 5) * 3 ÷ 20: ${resultado}`)
}

calculaExpressao()
````

### 18) Crie uma função que verifique se um número é positivo e ímpar ao mesmo tempo.
````javascript
const verificaSeEhPositivoEImpar = (numero) => {
    if (numero > 0 && numero % 2 !== 0) {
        console.log(`${numero} é positivo e ímpar!`)
    } else if (numero > 0 && numero % 2 === 0) {
        console.log(`${numero} é positivo, mas não é ímpar (é par).`)
    } else {
        console.log(`${numero} não é positivo e ímpar.`)
    }
}

verificaSeEhPositivoEImpar(9)
````

### 19) Implemente um programa que determine se um ano fornecido pelo usuário é bissexto ou não, considerando as regras: (a) Anos divisíveis por 4 são bissextos; (b) Anos divisíveis por 100 não são bissextos, a menos que também sejam divisíveis por 400.
````javascript
let anoUsuario = parseInt(prompt("Digite um ano para verificar se ele é bissexto ou não!"))
const verificaAnoBissexto = () => {
    if ((anoUsuario % 4 === 0 && anoUsuario % 100 !== 0) || (anoUsuario % 400 === 0)) {
        window.alert(`O ano de ${anoUsuario} é bissexto!`)
    } else {
        window.alert(`O ano de ${anoUsuario} não é bissexto!`)
    }
}

verificaAnoBissexto()
````

### 20) 
````javascript

````

### 21) 
````javascript

````

### 22) 
````javascript

````
