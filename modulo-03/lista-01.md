# ✩ Lista 01 de exercícios de Typescript ✩
### 01) Crie uma classe chamada Person com propriedades name e age. Instancie alguns objetos dessa classe.
````typescript
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    showDetails = () => {
        console.log(`Nome: ${this.name}, Idade: ${this.age}`);
    }
}

const person1 = new Person("João", 30);
const person2 = new Person("Maria", 25);
const person3 = new Person("Carlos", 40);

person1.showDetails();
person2.showDetails();
person3.showDetails();

````
