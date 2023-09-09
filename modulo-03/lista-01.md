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

### 06) Crie uma classe Student com propriedades name e grades (um array). Adicione um método que calcula a média das notas.
````typescript
class Student {
    name: string;
    grades: number[];

    constructor(name: string, grades: number[]) {
        this.name = name;
        this.grades = grades;
    }

    averageGrade(): number {
        let sum = this.grades.reduce((a, b) => a + b, 0);
        return sum / this.grades.length;
    }
}

const student = new Student("Mário", [72, 100, 65, 94, 36]);
console.log(`A média das notas de ${student.name} é ${student.averageGrade()}.`);
````

### 07) Crie uma classe BankAccount com propriedades balance e owner. Adicione métodos para depositar e sacar dinheiro.
````typescript
class BankAccount {
  balance: number;
  owner: string;

  constructor(owner: string, initialBalance: number = 0) {
      this.owner = owner;
      this.balance = initialBalance;
  }

  deposit(amount: number): void {
      if (amount <= 0) {
          console.log("O valor do depósito deve ser positivo.");
          return;
      }
      this.balance += amount;
      console.log(`Olá, ${this.owner}! Depositado R$${amount}. Saldo atual: R$${this.balance}.`);
  }

  withdraw(amount: number): void {
      if (amount <= 0) {
          console.log("O valor do saque deve ser positivo.");
          return;
      }
      if (amount > this.balance) {
          console.log(`Tentativa de saque de R$${amount}. Saldo disponível: R$${this.balance}. Saldo insuficiente!`);
          return;
      }
      this.balance -= amount;
      console.log(`Retirado R$${amount}. Saldo atual: R$${this.balance}`);
  }
}

const account = new BankAccount("Mário", 1000);
account.deposit(500);
account.withdraw(200);
account.withdraw(2000);
````

### 08) Crie uma classe Book com propriedades title, author e year. Crie um método que retorna os detalhes do livro.
````typescript
class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
      this.title = title;
      this.author = author;
      this.year = year;
  }

  details(): string {
      return `"${this.title}" por ${this.author} foi publicado em ${this.year}.`;
  }
}

const book = new Book("IT", "Stephen King", 1986);
console.log(book.details());
````

### 09) Crie uma classe Product com propriedades name, price e quantity. Adicione métodos para calcular o valor total e exibir os detalhes.
````typescript
class Product {
  name: string;
  price: number;
  quantity: number;

  constructor(name: string, price: number, quantity: number) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
  }

  totalValue(): number {
      return this.price * this.quantity;
  }

  details(): string {
      return `Produto: ${this.name}, Preço: R$${this.price}, Quantidade: ${this.quantity}, Valor Total: R$${this.totalValue()}.`;
  }
}

const product = new Product("Bolo de aipim", 40, 5);
console.log(product.details());
````

### 10) Crie uma classe Employee com propriedades name, role e salary. Adicione um método que calcula um aumento de salário com base em uma porcentagem.
````typescript
class Employee {
  name: string;
  role: string;
  salary: number;

  constructor(name: string, role: string, salary: number) {
      this.name = name;
      this.role = role;
      this.salary = salary;
  }

  giveRaise(percentage: number): void {
      this.salary += this.salary * (percentage / 100);
  }

  details(): string {
      return `Nome: ${this.name}, Cargo: ${this.role}, Salário: $${this.salary.toFixed(2)}.`;
  }
}

const employee = new Employee("Maria", "Desenvolvedora", 5000);
console.log(employee.details());
employee.giveRaise(20);
console.log(employee.details());
````
