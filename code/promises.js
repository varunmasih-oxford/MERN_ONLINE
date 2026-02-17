// sync Async

// var a = 10
// var b = 20
// var c = a+b

// var data = fetch("https://jsonplaceholder.typicode.com/posts/1")
// console.log(data);

// console.log(c);

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data.id); // Actual API data
//   });

// console.log("a");

// async function getData() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const data = await response.json();
//     console.log(data);
// }

// getData();

// console.log("b");


class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} says Woof!`);
  }
}

// var a = new Animal("camel")
// a.speak()


const d1 = new Dog("Tommy");
d1.speak(); // Tommy makes a sound
d1.bark();  // Tommy says Woof!
