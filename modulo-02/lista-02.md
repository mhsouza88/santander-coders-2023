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

###
````javascript

````

###
````javascript

````
