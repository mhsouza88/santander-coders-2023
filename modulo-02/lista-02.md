# ✩ Lista 02 de exercícios de Javascript ✩
### 01) Crie um objeto que represente um estudante com propriedades como nome, idade, curso e notas. Acesse e exiba essas propriedades.
````javascript
const estudante = {
    nome: "Rafael Santos",
    idade: 18,
    curso: "Matemática",
    notas: [6, 9.5, 8, 7]
}
const exibePropriedadesEstudante = (estudante) => {
    console.log(`Nome: ${estudante.nome} - Idade: ${estudante.idade} - Curso: ${estudante.curso} - Notas: ${estudante.notas.join(", ")}`)
}

exibePropriedadesEstudante(estudante)
````

### 02) Crie um dicionário que mapeie nomes de países a suas respectivas capitais. Crie uma função que receba o nome de um país e retorne a capital correspondente.
````javascript
const paisesECapitais = {
    "Brasil": "Brasília",
    "Espanha": "Madrid",
    "Itália": "Roma",
    "Alemanha": "Berlim",
    "Japão": "Tóquio"
}
const pegaCapital = (pais) => {
    const capital = paisesECapitais[pais];
    if (capital) {
        return (`A capital do país ${pais} é ${capital}!`)
    } else {
        return "Este país não existe no dicionário!"
    }
}

console.log(pegaCapital("Brasil"))
````

### 03) Crie um dicionário com nomes de frutas e seus preços. Escreva uma função que calcule o preço total de uma cesta de frutas.
````javascript
const precosFrutas = {
    "Maçã": 1.0,
    "Banana": 0.4,
    "Morango": 2.5,
    "Abacaxi": 3.0,
    "Kiwi": 1.5
}
const calculaPrecoCesta = (cesta) => {
    let total = 0
    for (let fruta of cesta) {
        const preco = precosFrutas[fruta]
        if (preco) {
            total += preco
        } else {
            console.log(` A fruta ${fruta} não foi encontrada no dicionário!`)
        }
    }
    return total
}

const minhaCesta = ["Maçã", "Banana", "Morango"]
console.log(`O preço total da cesta é de R$${calculaPrecoCesta(minhaCesta).toFixed(2)}.`)
````

### 04) Crie um objeto que represente um livro com propriedades como título, autor, ano de publicação, etc. Crie uma função que imprima as informações do livro em um formato legível.
````javascript
const livro = {
    titulo: "Esfera",
    autor: "Michael Crichton",
    anoPublicacao: 1987,
    genero: "Ficção Científica"
}
const imprimeInformacoesDoLivro = (livro) => {
    console.log(`Título: ${livro.titulo} | Autor: ${livro.autor} | Ano de Publicação: ${livro.anoPublicacao} | Gênero: ${livro.genero}`)
}

imprimeInformacoesDoLivro(livro)
````

### 05) Dado um array de números, crie um novo array onde cada número seja elevado ao quadrado.
````javascript
const numeros = [1, 2, 3, 4, 5]
const numerosAoQuadrado = numeros.map(numero => numero * numero)
console.log(numerosAoQuadrado)
````

### 06) Dado um array de palavras, crie um novo array com a primeira letra de cada palavra em maiúscula.
````javascript
const cores = ["vermelho", "azul", "amarelo", "verde"]
const iniciaisMaiusculas = cores.map(cor => cor.charAt(0).toUpperCase() + cor.slice(1))
console.log(iniciaisMaiusculas)
````

### 07) Crie um array de objetos representando produtos com propriedades como nome, preço e quantidade. Use o método map() para calcular o valor total de cada produto (preço * quantidade).
````javascript
const produtos = [
    { nome: "Camiseta", preço: 50, quantidade: 2 },
    { nome: "Calça", preço: 100, quantidade: 1 },
    { nome: "Tênis", preço: 200, quantidade: 3 },
    { nome: "Boné", preço: 30, quantidade: 4 }
]
const valoresTotais = produtos.map(produto => ({
    nome: produto.nome,
    valorTotal: produto.preço * produto.quantidade
}))

console.log(valoresTotais)
````

### 08) Converta um array de temperaturas em graus Celsius para Fahrenheit usando a fórmula (C * 9/5) + 32.
````javascript
const converteArrayParaFahrenheit = (temperaturasCelsius) => {
    const converteParaFahrenheit = tempCelsius => (tempCelsius * 9/5) + 32
    return temperaturasCelsius.map(converteParaFahrenheit)
}
const temperaturasCelsius = [0, 20, 25, 30, 35]
const temperaturasFahrenheit = converteArrayParaFahrenheit(temperaturasCelsius)

console.log(temperaturasFahrenheit)
````

### 09) Dado um array de números, use o método reduce() para calcular a soma de todos os elementos.
````javascript
const calculaSoma = () => {
    const arrayDeNumeros = [1, 2, 3, 4, 5]
    const soma = arrayDeNumeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
    console.log(`A soma dos números ${arrayDeNumeros} é de ${soma}.`)
}

calculaSoma()
````

### 10) Crie um array de strings e use o método reduce() para concatenar todas as strings em uma única string.
````javascript
const concatenaStrings = () => {
    const arrayDeStrings = ["Olá", " ", "turma", " ", "#1004!", " ", "Tudo", " ", "bem?"]
    const stringConcatenada = arrayDeStrings.reduce((acumulador, stringAtual) => acumulador + stringAtual, "")
    console.log(stringConcatenada)
}

concatenaStrings()
````
