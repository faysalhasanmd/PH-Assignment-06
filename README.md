1.  What is the difference between var, let, and const?
    There are two old ways to declare variables in JavaScript. It is function-scoped and can be re-declared and updated.
    Example:
    var name = "Faysal";
    Name = "Hasan";
    var name = "Md Faysal";

2.  What is the difference between Beethoven's map(), French(), and filter()?
    Map :
    Map() is used to transform the elements of an array and returns a new array with the transformed values, without changing the original array.
    Example:
    const numbers = [1, 2, 3];
    const double = numbers.map(name => name \* 2);
    console.log(double);

        forEach:
        forEach() is used to loop through an array and perform an action on each element. It does not return anything.
        Example:
        numbers.forEach(num => console.log(num \* 2));

        filter :
        filter() is used to select elements from an array that meet a condition and returns a new array with those elements.
        Example:
        const even = numbers.filter(num => num % 2 === 0);
        console.log(even);

3.  What are arrow functions in ES6?
    Arrow functions, introduced in ES6, are a short and modern way to write functions. They use the => syntax and are often used for small operations, callbacks, or array methods like map, filter, and forEach. Unlike traditional functions, arrow functions do not have their own this, which helps avoid common mistakes in object methods or event.
    Example :
    const add = (a, b) => a + b;
    const square = x => x \* x;
    const greet = () => console.log("Hello!");

4.  How does destructuring assignment work in ES6?
    Destructuring assignment in ES6 allows you to extract values from arrays or objects and assign them to variables in a concise way, making code cleaner and easier to read.
    Example :
    for array :
    const numbers = [10, 20, 30];
    const [first, second] = numbers;
    console.log(first, second);
    for obj :
    const person = {name: "Faysal", age: 25, city: "Dhaka"};
    const {name, city, country = "Bangladesh"} = person;
    console.log(name, city, country);
    rename variable :
    const {name: fullName, age: years} = person;
    console.log(fullName, years);

5.  Explain template literals in ES6. How are they different from string concatenation?
    Template literals in ES6 are a new way to work with strings. They use backticks `` instead of quotes and allow embedding variables or expressions directly using ${}. This makes string creation easier and more readable compared to traditional string concatenation.

        literal template :
        const name = "Faysal";
        const age = 25;
        const message = `My name is ${name} and I am ${age} years old.`;
        console.log(message);
