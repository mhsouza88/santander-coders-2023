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

  static showAllDetails = (...persons: Person[]) => {
      console.log(persons.map(person => `Nome: ${person.name}, Idade: ${person.age}`).join(' | '));
  }
}

const person1 = new Person("Marcos", 30);
const person2 = new Person("Joana", 25);
const person3 = new Person("Caio", 40);

Person.showAllDetails(person1, person2, person3);
````
