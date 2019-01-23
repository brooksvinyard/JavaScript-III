/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. global scope, refers to the window binding
* 2. implicit binding, deals with objects and you refer to the object left of the dot
* 3. new binding, when you invoke an object with new, you create a new object that inherits the this
* 4. explicit binding allows you to call when functions are separate from their objects
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// console.log(this);



// Principle 2

// code example for Implicit Binding

/*
const person = {
    name: 'Fred',
    food: 'apples',
    cook: function() {
     console.log(`${this.name} loves to eat ${this.food}`) 
    }
  }
  
person.cook();
*/



// Principle 3

// code example for New Binding

/*
function Student(attributes) {
    this.name = attributes.name
    this.fav_class = attributes.fav_class;
  }
  
Student.prototype.greet = function() {
    return `${this.name} likes the class: ${this.fav_class}`;
  }

const bob = new Student({
    name: 'Bob',
    fav_class: 'English',
  });

console.log(bob.greet());
*/



// Principle 4

// code example for Explicit Binding

/*
const person = {
    name: 'Sarah'
}

const skills = ['HTML', 'CSS', 'JS'];
  
function introduce(skills1, skills2, skills3) {    
    console.log(`Hello!  My name is ${this.name}, and I have skills in: ${skills1}, ${skills2}, ${skills3}`)
}
  
introduce.apply(person, skills);

*/