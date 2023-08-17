# ✩ Lista 04 de exercícios de Javascript ✩
### 01) Crie uma função chamada executarCallback que recebe uma função de callback como argumento e a executa.
````javascript
const executarCallback = (callback) => {
    callback()
}

executarCallback(() => console.log("Oi, eu sou um callback!"))
````

### 02) Crie uma função chamada dobrarNumeros que recebe um array de números e uma função de callback. A função dobrarNumeros deve aplicar a função de callback a cada elemento do array e retornar um novo array com os elementos dobrados.
````javascript
const dobrarNumerosPrincipal = () => {
    const dobrarNumeros = (numeros, callback) => {
        return numeros.map(numero => callback(numero))
    }
    const numeros = [1, 2, 3, 4, 5]
    const dobrados = dobrarNumeros(numeros, numero => numero * 2)
    console.log(dobrados)
}

dobrarNumerosPrincipal()
````

### 03) Crie uma função chamada filtrarPalavras que recebe um array de palavras e uma função de callback. A função filtrarPalavras deve retornar um novo array contendo apenas as palavras que atendem ao critério da função de callback.
````javascript
const filtrarPalavrasPrincipal = () => {
    const filtrarPalavras = (palavras, callback) => {
        return palavras.filter(palavra => callback(palavra))
    }
    const palavras = ['sol', 'lua', 'planeta', 'estrela', 'galáxia']
    const resultado = filtrarPalavras(palavras, palavra => palavra.length > 4)
    console.log(resultado)
}

filtrarPalavrasPrincipal()
````

### 04) Crie uma função chamada ordenarNumeros que recebe um array de números e uma função de callback para determinar a ordem de ordenação. A função ordenarNumeros deve retornar um novo array com os números ordenados de acordo com o critério da função de callback.
````javascript
const ordenarNumerosPrincipal = () => {
    const ordenarNumeros = (numeros, callback) => {
        return numeros.sort(callback)
    }
    const numeros = [34, 2, 56, 23, 11, 9, 89]
    const resultadoCrescente = ordenarNumeros([...numeros], (a, b) => a - b)
    const resultadoDecrescente = ordenarNumeros([...numeros], (a, b) => b - a)
    console.log("Ordem crescente:", resultadoCrescente)
    console.log("Ordem decrescente:", resultadoDecrescente)
}

ordenarNumerosPrincipal()
````

### 05) Crie uma função chamada executarAposTempo que recebe uma função de callback e um tempo em milissegundos. A função executarAposTempo deve agendar a execução da função de callback após o tempo especificado.
````javascript
const executarAposTempo = () => {
    const callback = () => {
        console.log("Passaram 4 segundos!")
    }
    setTimeout(callback, 4000)
}

executarAposTempo()
````

### 06)
````javascript

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
