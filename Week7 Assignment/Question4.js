// Calling the regular function before defining it
greet(); // Works! Function declarations are hoisted.

function greet() {
    console.log("Hello, welcome!");
}

// Calling the arrow function before defining it
// greetArrow(); // Error! Cannot access 'greetArrow' before initialization.

const greetArrow = () => {
    console.log("Hello, welcome!");
};

// Calling the arrow function after defining it
greetArrow(); // Works!
