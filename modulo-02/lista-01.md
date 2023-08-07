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
