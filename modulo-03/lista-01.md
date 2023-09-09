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

### 02) Adicione um método à classe Person que imprime uma saudação com o nome da pessoa.
````typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }

  greet() {
      console.log(`Oi, meu nome é ${this.name}!`);
  }

  static showAllDetails = (...persons: Person[]) => {
      console.log(persons.map(person => `Nome: ${person.name}, Idade: ${person.age}`).join(' | '));
  }
}

const person1 = new Person("Marcos", 30);
const person2 = new Person("Joana", 25);
const person3 = new Person("Caio", 40);

Person.showAllDetails(person1, person2, person3);

person1.greet();
person2.greet();
person3.greet();
````

### 03) Crie uma classe Rectangle com propriedades width e height. Adicione um método que calcula a área do retângulo.
````typescript
class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(10, 5);
console.log(`A área do retângulo é ${rectangle.area()}.`);
````

### 04) Crie uma classe Circle com propriedade radius e um método que calcula a área do círculo.
````typescript
class Circle {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle(5);
console.log(`A área do círculo é ${circle.area()}.`);
````

### 05) Crie uma classe Car com propriedades make, model e year. Crie um método que retorna a descrição do carro.
````typescript
class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
  }

  description(): string {
      return `O ano de lançamento é ${this.year}, a empresa é ${this.make} e o modelo é ${this.model}`;
  }
}

const car = new Car("Chery", "Tiggo 3X", 2021);
console.log(`Descrição do carro: ${car.description()}.`);
````

### 06)
````typescript

````

### 07)
````typescript

````

### 08)
````typescript

````

### 09)
````typescript

````

### 10)
````typescript

````
