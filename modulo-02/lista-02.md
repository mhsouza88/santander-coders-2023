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

### 11) Dado um array de objetos representando despesas com propriedades como valor e categoria, use o método reduce() para calcular o total de despesas de uma categoria específica.
````javascript
const calculaDespesasPorCategoria = (categoria) => {
    const despesas = [
        { valor: 100, categoria: "alimentação" },
        { valor: 50, categoria: "transporte" },
        { valor: 200, categoria: "alimentação" },
        { valor: 30, categoria: "lazer" },
        { valor: 10, categoria: "transporte" }
    ]
    const totalDespesas = despesas.reduce((acumulador, despesa) => {
        if (despesa.categoria === categoria) {
            return acumulador + despesa.valor
        } else {
            return acumulador
        }
    }, 0)
    console.log(`O total gasto em ${categoria} foi de R$${totalDespesas}.`)
}

calculaDespesasPorCategoria("alimentação")
````

### 12) Dado um array de números, use o método reduce() para encontrar o maior número no array.
````javascript
const encontraMaiorNumero = (numeros) => {
    const maior = numeros.reduce((maiorAtual, numeroAtual) => {
        return numeroAtual > maiorAtual ? numeroAtual : maiorAtual
    })
    console.log(`O maior número entre ${arrayDeNumeros} é ${maior}!`)
}

const arrayDeNumeros = [3, 42, 15, 8, 23, 99, 57]
encontraMaiorNumero(arrayDeNumeros)
````

### 13) Imprima os números de 1 a 10 utilizando um loop for.
````javascript
const imprimeDeUmADez = () => {
    for(let i = 1; i <= 10; i++) {
        console.log(i)
    }
}

imprimeDeUmADez()
````

### 14) Imprima os números pares de 1 a 20 utilizando um loop for.
````javascript
const imprimeParesAteVinte = () => {
    for(let i = 1; i <= 20; i++) {
        if(i % 2 === 0) {
            console.log(i)
        }
    }
}

imprimeParesAteVinte()
````

### 15) Calcule a soma dos números de 1 a 50 utilizando um loop for.
````javascript
const calculaSomaAteCinquenta = () => {
    let soma = 0
    for (let i = 1; i <= 50; i++) {
        soma += i
    }
    return soma
}

console.log(`A soma dos números de 1 a 50 é ${calculaSomaAteCinquenta()}.`)
````

### 16) Imprima a tabuada do 7 utilizando um loop for.
````javascript
const imprimeTabuadaDoSete = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(`7 x ${i} = ${7 * i}`)
    }
}

imprimeTabuadaDoSete()
````

### 17) Escreva um programa que solicite ao usuário um número e imprima a sequência de números de 1 até o número inserido, utilizando um loop for.
````javascript
const imprimeSequencia = () => {
    const numero = parseInt(prompt("Digite um número: "))
    for (let i = 1; i <= numero; i++) {
        console.log(i)
    }
}

imprimeSequencia()
````

### 18) Escreva um programa que solicite ao usuário um número e verifique se ele é primo.
````javascript
const ehPrimo = () => {
    const numero = parseInt(prompt("Digite um número para saber se ele é primo ou não: "))
    if (numero <= 1) {
        window.alert(`${numero} não é um número primo.`)
        return
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            window.alert(`${numero} não é um número primo.`)
            return
        }
    }
    window.alert(`${numero} é um número primo!`)
}

ehPrimo()
````

### 19) Crie um programa que gere a sequência de Fibonacci até o décimo termo. (Dica: o próximo termo é a soma dos dois termos anteriores)
````javascript
const fibonacci = () => {
    let termos = [0, 1]
    for(let i = 2; i < 10; i++) {
        termos[i] = termos[i-1] + termos[i-2]
    }
    console.log(termos)
}

fibonacci()
````

### 20) Crie um programa que solicite ao usuário um número e calcule o fatorial desse número.
````javascript
const calculaFatorial = () => {
    const numero = parseInt(prompt("Digite um número para calcular o fatorial: "))
    let fatorial = 1
    for(let i = 1; i <= numero; i++) {
        fatorial *= i
    }
    window.alert(`O fatorial de ${numero} é ${fatorial}.`)
}

calculaFatorial()
````

### 21) Escreva um programa que imprima a seguinte série: 1, 3, 6, 10, 15, 21, ..., onde cada número é a soma dos números naturais consecutivos.
````javascript
const imprimeSomaConsecutivos = () => {
    let soma = 0
    for (let i = 1; i <= 10; i++) {
        soma += i
        console.log(soma)
    }
}

imprimeSomaConsecutivos()
````

### 22) Crie um programa que encontre e imprima todos os números perfeitos de 1 a 1000. Um número perfeito é aquele cuja soma de seus divisores (excluindo ele mesmo) é igual ao próprio número.
````javascript
const encontraNumerosPerfeitos = () => {
    const encontraDivisores = numero => {
        let divisores = []
        for (let i = 1; i <= numero / 2; i++) {
            if (numero % i === 0) {
                divisores.push(i)
            }
        }
        return divisores
    }
    const ehPerfeito = numero => {
        const divisores = encontraDivisores(numero)
        const somaDivisores = divisores.reduce((acc, curr) => acc + curr, 0)
        return somaDivisores === numero
    }
    for (let i = 1; i <= 1000; i++) {
        if (ehPerfeito(i)) {
            console.log(i)
        }
    }
}

encontraNumerosPerfeitos()
````

### 23) Crie um jogo em que o computador escolhe um número aleatório entre 1 e 100, e o jogador deve adivinhar qual é esse número. O jogo deve fornecer dicas informando se o número a ser adivinhado é maior ou menor do que o palpite do jogador, e o jogo deve continuar até que o jogador acerte o número.
````javascript
const jogoAdivinhacao = () => {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1
    const fazerPalpite = () => {
        const palpite = parseInt(prompt("Adivinhe o número entre 1 e 100:"))
        if (palpite === numeroAleatorio) {
            alert("Parabéns! Você acertou!")
            return
        }
        if (palpite < numeroAleatorio) {
            alert("O número é maior que " + palpite)
        } else {
            alert("O número é menor que " + palpite)
        }
        fazerPalpite()
    }
    fazerPalpite()
}

jogoAdivinhacao()
````

### 24) Crie um programa que gere a sequência de números de Fibonacci usando um loop while até que o próximo termo seja maior que 1000.
````javascript
const geraFibonacciAteMil = () => {
    let termo1 = 0
    let termo2 = 1
    let proximoTermo = termo1 + termo2
    while (proximoTermo <= 1000) {
        console.log(proximoTermo)
        termo1 = termo2
        termo2 = proximoTermo
        proximoTermo = termo1 + termo2
    }
}

geraFibonacciAteMil()
````

###
````javascript

````

###
````javascript

````

###
````javascript

````

###
````javascript

````

###
````javascript

````
