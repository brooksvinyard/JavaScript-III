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
const hobbit = {
    name: 'Samwise',
    food: 'taters',
    cook: function() {
     console.log(`${this.name} loves to eat ${this.food}`) 
    }
  }
  
  hobbit.cook();
*/


// Principle 3

// code example for New Binding


















// Principle 4

// code example for Explicit Binding

/*
const person = {
    name: 'Sarah'
  }
  
  const hobbit = {
    name: 'Frodo'
  }
  
  const skills = ['HTML', 'CSS', 'JS'];
  
  function introduce(skills1, skills2, skills3) {
    
    console.log(`Hello!  My name is ${this.name}, and I have skills in: ${skills1}, ${skills2}, ${skills3}`)
  }
  
  // call has one argument list
  introduce.call(person, skills);
  // apply accepts an array
  introduce.apply(person, skills);
  */