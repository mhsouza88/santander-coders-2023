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

### 06) Crie uma Promise simples que retorna uma mensagem de sucesso após 2 segundos. Use a função setTimeout para simular um atraso.
````javascript
const minhaPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Sucesso após 2 segundos!")
        }, 2000)
    })
}

minhaPromise().then(mensagem => console.log(mensagem))
````

### 07) Crie uma Promise que simula uma operação que pode falhar. Se a operação for bem-sucedida, resolva a Promise com uma mensagem de sucesso. Caso contrário, rejeite-a com uma mensagem de erro. (Lembre-se de usar o reject)
````javascript
const operacaoSimulada = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) { 
                resolve("A operação deu certo! Oba!")
            } else {
                reject("Infelizmente a operação falhou. =(")
            }
        }, 1000)
    })
}

operacaoSimulada()
    .then(console.log)
    .catch(console.error)
````

### 08) Crie um encadeamento de Promises que realiza uma sequência de operações assíncronas. Por exemplo, faça uma requisição a uma API, processe os dados e, em seguida, realize outra operação.
````javascript
const executarOperacoes = () => {
    const requisicaoAPI1 = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Requisição à API 1 concluída!")
                resolve({ data: "dados da API 1" })
            }, 1000)
        })
    }
    const processarDados = (dados) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Os dados foram processados!");
                const dadosProcessados = dados.data + " - Processado!"
                resolve(dadosProcessados)
            }, 1000)
        })
    }
    const requisicaoAPI2 = (dadosProcessados) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Requisição à API 2 concluída!")
                resolve("Dado final com " + dadosProcessados)
            }, 1000)
        })
    }
    requisicaoAPI1()
        .then(dados => processarDados(dados))
        .then(dadosProcessados => requisicaoAPI2(dadosProcessados))
        .then(resultadoFinal => console.log(resultadoFinal))
        .catch(console.error)
}

executarOperacoes()
````

### 09) Crie uma função que retorna uma Promise que será resolvida após um tempo aleatório entre 1 e 5 segundos. Use a função setTimeout e Math.random() para criar esse atraso variável.
````javascript
const aguardarTempoAleatorio = () => {
    return new Promise((resolve) => {
        const tempo = (Math.random() * 4 + 1) * 1000
        setTimeout(() => {
            console.log(`Aguardado por ${tempo / 1000} segundos.`)
            resolve()
        }, tempo)
    })
}

aguardarTempoAleatorio().then(() => console.log("Promise resolvida!"))
````

### 10) Crie uma função que retorna uma Promise que será rejeitada após um tempo aleatório entre 1 e 3 segundos.
````javascript
const rejeitarAposTempoAleatorio = () => {
    return new Promise((resolve, reject) => {
        const tempo = (Math.random() * 2 + 1) * 1000
        setTimeout(() => {
            console.log(`Aguardado por ${tempo / 1000} segundos.`)
            reject(new Error("Promise rejeitada!"))
        }, tempo)
    })
}

rejeitarAposTempoAleatorio()
    .catch(error => console.log(error.message))
````

### 11) Crie uma função assíncrona que retorna uma mensagem após um atraso de 2 segundos.
````javascript
const mensagemAposAtraso = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Passaram 2 segundos!")
        }, 2000)
    })
}

mensagemAposAtraso().then(mensagem => console.log(mensagem))
````

### 12) Crie uma função assíncrona que simula uma operação que pode falhar. Use try e catch para lidar com erros.
````javascript
const operacaoAssincrona = async () => {
    try {
        let randomNum = Math.random()
        if (randomNum < 0.5) {
            throw new Error("Ocorreu um erro!")
        }
        return "A operação deu certo!"
    } catch (erro) {
        console.error("Caiu no catch:", erro.message)
        return erro.message
    }
}

operacaoAssincrona().then(resultado => console.log(resultado))
````

### 13) Crie uma série de funções assíncronas que dependem dos resultados anteriores.
````javascript
const executarProcessoAssincrono = async () => {
    const primeiraFuncao = async () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(Math.floor(Math.random() * 100 + 1))
            }, 1000)
        })
    }
    const segundaFuncao = async (numero) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(numero + 5)
            }, 1000)
        })
    }
    const terceiraFuncao = async (numero) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(numero / 2)
            }, 1000)
        })
    }
    const resultado1 = await primeiraFuncao()
    console.log("Resultado da primeira função:", resultado1)
    const resultado2 = await segundaFuncao(resultado1)
    console.log("Resultado da segunda função:", resultado2)
    const resultado3 = await terceiraFuncao(resultado2)
    console.log("Resultado da terceira função:", resultado3)
}

executarProcessoAssincrono()
````

### 14) Crie uma função que utiliza fetch com async e await para buscar dados de uma API.
````javascript
const buscarPalavraAleatoria = async () => {
    const obterPalavra = async () => {
        try {
            const url = "https://random-word-api.herokuapp.com/word"
            const resposta = await fetch(url)
            if (!resposta.ok) {
                throw new Error(`Erro ao buscar palavra: ${resposta.statusText}`)
            }
            const [palavra] = await resposta.json()
            console.log(`A palavra aleatória do dia é ${palavra}.`)
        } catch (erro) {
            console.error("Erro:", erro)
        }
    }
    await obterPalavra()
}

buscarPalavraAleatoria()
````
