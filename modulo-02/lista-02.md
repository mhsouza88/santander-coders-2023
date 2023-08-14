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
