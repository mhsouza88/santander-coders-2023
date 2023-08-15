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
    console.log(termo1)
    console.log(termo2)
    while (proximoTermo <= 1000) {
        console.log(proximoTermo)
        termo1 = termo2
        termo2 = proximoTermo
        proximoTermo = termo1 + termo2
    }
}

geraFibonacciAteMil()
````

### 25) Escreva um programa que calcule a média de uma lista de números. O usuário deve fornecer quantos números deseja inserir, e em seguida, inserir os números.
````javascript
const calculaMedia = () => {
    let totalNumeros = parseInt(prompt("Quantos números você deseja inserir?"))
    let soma = 0
    for (let i = 0; i < totalNumeros; i++) {
        let numero = parseFloat(prompt(`Digite o número ${i + 1} de ${totalNumeros}: `))
        soma += numero
    }
    let media = soma / totalNumeros
    window.alert(`A média dos números fornecidos é ${media}.`)
}

calculaMedia()
````

### 26) Escreva um programa que peça ao usuário para adivinhar um número secreto entre 1 e 100. O programa deve fornecer dicas como "maior" ou "menor" até que o jogador adivinhe corretamente.
````javascript
const adivinheONumero = () => {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1
    let tentativas = 0
    let acertou = false
    while (!acertou) {
        let palpite = parseInt(prompt("Adivinhe um número entre 1 e 100: "))
        if (palpite < numeroSecreto) {
           window.alert("Maior!")
        } else if (palpite > numeroSecreto) {
            window.alert("Menor!")
        } else {
            acertou = true
            alert(`Parabéns! Você acertou o número em ${tentativas + 1} tentativas!`)
        }
        tentativas++
    }
}

adivinheONumero()
````

### 27) Crie um programa que gere a sequência de números primos até um número fornecido pelo usuário.
````javascript
const geraNumerosPrimos = () => {
    const ehPrimo = (num) => {
        if (num <= 1) return false
        if (num <= 3) return true
        if (num % 2 === 0 || num % 3 === 0) return false
        let i = 5
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false
            i += 6
        }
        return true
    }
    const limite = parseInt(prompt("Digite o número limite para a sequência de primos: "))
    let primos = []
    for (let i = 2; i <= limite; i++) {
        if (ehPrimo(i)) {
            primos.push(i)
        }
    }
    window.alert(`Números primos até ${limite}: ${primos.join(', ')}`)
}

geraNumerosPrimos()
````

### 28) Escreva um código JavaScript que utilize um laço de repetição while para imprimir os números pares de 0 a 10.
````javascript
const imprimePares = () => {
    let numero = 0
    while (numero <= 10) {
        if (numero % 2 === 0) {
            console.log(numero)
        }
        numero++
    }
}

imprimePares()
````

### 29) Escreva um código JavaScript que solicite ao usuário um número e utilize um laço de repetição do-while para verificar se o número inserido é uma potência de 2.
````javascript
const verificaPotenciaDe2 = () => {
    let numero = parseInt(prompt("Digite um número para saber se ele é uma potência de 2!"))
    do {
        if (numero === 1) {
            alert("O número é uma potência de 2!")
            return
        } else if (numero < 1) {
            break
        }
        numero = numero / 2
    } while (numero >= 1)
    window.alert("O número não é uma potência de 2.")
}

verificaPotenciaDe2()
````

### 30) Escreva um código JavaScript que utilize um laço de repetição while para calcular a soma dos números de 1 a 100 e exiba o resultado.
````javascript
const calculaSoma = () => {
    let soma = 0
    let contador = 1
    while (contador <= 100) {
        soma += contador
        contador++
    }
    console.log(`A soma dos números de 1 a 100 é ${soma}.`)
}

calculaSoma()
````

### 31) Peça ao usuário para digitar uma letra. Use uma estrutura condicional para verificar se a letra é uma vogal ou uma consoante. Exiba uma mensagem indicando se a letra é uma vogal ou consoante.
````javascript
const verificaLetra = () => {
    let letra = prompt("Digite uma letra:").toLowerCase()
    if (["a", "e", "i", "o", "u"].includes(letra)) {
        window.alert("Você digitou uma vogal!")
    } else if ((letra >= 'a' && letra <= 'z') || (letra >= 'A' && letra <= 'Z')) {
        window.alert("Você digitou uma consoante!")
    } else {
       window.alert("Isso não é uma letra válida!")
    }
}

verificaLetra()
````

### 32) Peça ao usuário para digitar dois números e uma operação matemática (+, -, *, /). Use uma estrutura condicional para realizar a operação selecionada nos números dados. Exiba o resultado da operação.
````javascript
const realizaOperacao = () => {
    const numero1 = parseFloat(prompt("Digite o primeiro número: "))
    const numero2 = parseFloat(prompt("Digite o segundo número: "))
    const operacao = prompt("Digite uma operação matemática (+, -, *, /): ")
    let resultado
    switch (operacao) {
        case '+':
            resultado = numero1 + numero2
            break
        case '-':
            resultado = numero1 - numero2
            break
        case '*':
            resultado = numero1 * numero2
            break
        case '/':
            if (numero2 !== 0) {
                resultado = numero1 / numero2
            } else {
                window.alert("Divisão por zero não é permitida!")
                return
            }
            break
        default:
            window.alert("Operação inválida!")
            return
    }
    window.alert(`O resultado de ${numero1} ${operacao} ${numero2} é ${resultado}.`)
}

realizaOperacao()
````

### 33) Peça ao usuário para digitar um número. Use uma estrutura condicional para verificar se o número é primo (divisível apenas por 1 e por ele mesmo). Exiba uma mensagem indicando se o número é primo ou não.
````javascript
const verificaSeNumeroEhPrimo = () => {
    const ehPrimo = num => {
        if (num <= 1) return false
        if (num <= 3) return true
        if (num % 2 === 0 || num % 3 === 0) return false
        let i = 5
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false
            i += 6
        }
        return true
    }
    const numero = parseInt(prompt("Digite um número:"))
    if (ehPrimo(numero)) {
        window.alert(`${numero} é um número primo!`)
    } else {
        window.alert(`${numero} não é um número primo.`)
    }
}

verificaSeNumeroEhPrimo()
````

### 34) Peça ao usuário para digitar uma temperatura em graus Celsius. Use uma estrutura condicional para converter a temperatura para Fahrenheit ou Kelvin, de acordo com a escolha do usuário. Exiba o resultado da conversão.
````javascript
const converteTemperatura = () => {
    const celsius = parseFloat(prompt("Digite uma temperatura em graus Celsius: "))
    const escolha = prompt("Você deseja converter para Fahrenheit (F) ou Kelvin (K)?").toUpperCase()
    if (escolha === "F") {
        const fahrenheit = (celsius * 9/5) + 32
        window.alert(`A temperatura em Fahrenheit é ${fahrenheit}°F.`)
    } else if (escolha === "K") {
        const kelvin = celsius + 273.15
        window.alert(`A temperatura em Kelvin é ${kelvin}K.`)
    } else {
        window.alert("Escolha inválida!")
    }
}

converteTemperatura()
````

### 35) Peça ao usuário para digitar um número de 1 a 7 representando um dia da semana. Use uma estrutura condicional switch para exibir o nome completo do dia da semana correspondente ao número digitado.
````javascript
const diaDaSemana = () => {
    const numero = parseInt(window.prompt("Digite um número de 1 a 7 representando um dia da semana:"))
    switch(numero) {
        case 1:
            window.alert("Domingo")
            break
        case 2:
            window.alert("Segunda-feira")
            break
        case 3:
            window.alert("Terça-feira")
            break
        case 4:
            window.alert("Quarta-feira")
            break
        case 5:
            window.alert("Quinta-feira")
            break
        case 6:
            window.alert("Sexta-feira")
            break
        case 7:
            window.alert("Sábado")
            break
        default:
            window.alert("Número inválido!")
    }
}

diaDaSemana()
````

### 36) Peça ao usuário para digitar um ano. Use uma estrutura condicional para verificar se o ano é bissexto (divisível por 4 e não por 100, exceto se for divisível por 400). Exiba uma mensagem indicando se o ano é bissexto ou não.
````javascript
const verificaAnoBissexto = () => {
    const ano = parseInt(window.prompt("Digite um ano: "))
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        window.alert(`${ano} é um ano bissexto!`)
    } else {
        window.alert(`${ano} não é um ano bissexto.`)
    }
}

verificaAnoBissexto()
````

### 37) Peça ao usuário para digitar uma palavra ou frase. Use uma estrutura condicional para contar o número de vogais e consoantes na entrada. Exiba os resultados separadamente.
````javascript
const contaVogaisEConsoantes = () => {
    const entrada = window.prompt("Digite uma palavra ou frase: ")
    let vogais = 0
    let consoantes = 0
    for (let char of entrada.toLowerCase()) {
        if ('aeiou'.includes(char)) {
            vogais++
        } else if (char >= 'a' && char <= 'z') {
            consoantes++
        }
    }
    window.alert(`Número de vogais: ${vogais}\nNúmero de consoantes: ${consoantes}`)
}

contaVogaisEConsoantes()
````

### 38) Peça ao usuário para digitar um número. Use uma estrutura condicional para verificar se o número é positivo, negativo ou zero. Exiba uma mensagem indicando a natureza do número.
````javascript
const verificaNumero = () => {
    const numero = parseFloat(window.prompt("Digite um número: "))
    if (numero > 0) {
        window.alert("O número é positivo.")
    } else if (numero < 0) {
        window.alert("O número é negativo.")
    } else {
        window.alert("O número é zero.")
    }
}

verificaNumero()
````

### 39) Peça ao usuário para digitar sua idade e se tem cartão de estudante (responda com "sim" ou "não"). Use uma estrutura condicional para determinar o preço do bilhete de cinema de acordo com as regras: menores de 18 anos pagam $5, estudantes pagam $8 e os demais pagam $10. Exiba o preço do bilhete.
````javascript
const verificaPrecoBilhete = () => {
    const idade = parseInt(window.prompt("Digite sua idade:"))
    const estudante = window.prompt("Você tem cartão de estudante? (sim ou não)").toLowerCase()
    if (idade < 18) {
        window.alert("O preço do bilhete é $5.")
    } else if (estudante === "sim") {
        window.alert("O preço do bilhete é $8.")
    } else {
        window.alert("O preço do bilhete é $10.")
    }
}

verificaPrecoBilhete()
````

### 40) Peça ao usuário para digitar uma palavra ou frase. Use uma estrutura condicional para verificar se a entrada é um palíndromo (lê-se igual de trás para frente e de frente para trás). Exiba uma mensagem indicando se a entrada é um palíndromo ou não.
````javascript
const verificaPalindromo = () => {
    const entrada = prompt("Digite uma palavra ou frase: ")
    const limpo = entrada.replace(/[\W_]/g, '').toLowerCase()
    const invertido = limpo.split('').reverse().join('')
    if (limpo === invertido) {
        window.alert("É um palíndromo!")
    } else {
        window.alert("Não é um palíndromo.")
    }
}

verificaPalindromo()
````
