
var show = document.getElementById("car")
show.innerHTML = "it iz wat it iz"

document.getElementById("demo").innerHTML = "Hello World!";

// ________________________________________let, var and const __________________________

// Summary of Features
// Scope:
// var is function-scoped or globally scoped.
// let and const are block-scoped.

// Hoisting:
// var declarations are hoisted and initialized to undefined.
// let and const are hoisted but not initialized, leading to a temporal dead zone.

// Redeclaration:
// var can be redeclared in the same scope.
// let and const cannot be redeclared in the same scope.

// Reassignment:
// var and let can be reassigned.
// const cannot be reassigned once defined.

// Use Case:
// Use var for older code or where function-level scope is required.
// Use let for variables that may change within block scopes.
// Use const for constants that should not be reassigned.


// 1> ________________________________________________OBJECTS___________________________________________

const cars2 = {
    name: "Tata Safari",
    // setters and getters require private variable with _
    _model: "Safari900",
    weight: 670,
    color: 'red',
    get model() {
        return this.model.toUpperCase()
    },
    get clr() {
        return this.color;
    },
    set clr(clr) {
        this.color = clr;
    },
    set model(mdl) {
        this.model = mdl.topUpperCase()
    },

    start: function () {
        console.log("Car has started...")
        document.getElementById(car).innerHTML = "Car is Driveing"
    },
    brake: function () {
        console.log("Brake applied...")
    },
    drive: function () {
        console.log("Auto Pilot on...")
    },
    stop: function () {
        console.log("Car Stopped on...")
    }

}

// iterating
for (let x in cars2) {
    console.log(x + " of the car is " + cars2[x])
}

Object.keys(cars2).forEach(key => {
    console.log(`${key}: ${cars2[key]}`);
});

//-GETTERS and SETTERS-

// Get and set are special keywords to create getter and setter function for js
// Getters do not require parentheses; they are accessed like properties, not called like functions.
// Since JavaScript objects are not truly private by default (everything is publicly accessible), 
// developers often use an underscore to signal that a property or method should not be accessed or modified directly from outside the object.

// using getter and setter

cars2.clr = "red"
console.log(cars2.clr)

const mod2 = cars2.modelName
console.log(mod)

// calling a function
const mod = cars2.start()

//--------------------APPLY, CALL AND BIND----------------------------

const personSyntax = {
    firstName: "Ram",
    lastName: "Kumar",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const student = {
    firstName: "Sonu",
    lastName: "Kumar"
}

const student2 = {
    firstName: "Vipin",
    lastName: "Durrani"
}

// Method	
// call()	Executes the function immediately	Arguments are passed individually
// apply()	Executes the function immediately	Arguments are passed as an array
// bind()	Does not execute immediately, returns a new function	Arguments are passed individually



// --bind -- bind gives the new function

let passFullNameToStudent = personSyntax.fullName.bind(student2)
const studentFullName = passFullNameToStudent()
console.log(studentFullName)

// -- Apply -- It directly gives the value by executing the functin in second object  and takes argument comma seperated
const person1FullNameCall = personSyntax.fullName.call(student)
console.log(person1FullNameCall)

// -- call--- It directly gives the value by executing the functin in second object  and takes argument in in array
const person1FullNameApply = personSyntax.fullName.apply(student2)
console.log(person1FullNameApply)

/*
+---------------------+---------------------------------------+---------------------------------------+-------------------------------------+
| Feature             | call()                                | apply()                               | bind()                              |
+---------------------+---------------------------------------+---------------------------------------+-------------------------------------+
| Purpose             | Invokes function with specified `this`| Invokes function with specified `this`| Returns a new function with         |
|                     | and individual arguments.             | and arguments as an array.            | specified `this` and optional       |
|                     |                                       |                                       | preset arguments.                   |
+---------------------+---------------------------------------+---------------------------------------+-------------------------------------+
| Invocation          | Invokes immediately.                  | Invokes immediately.                  | Returns a new function (not         |
|                     |                                       |                                       | invoked immediately).               |
+---------------------+---------------------------------------+---------------------------------------+-------------------------------------+
| Argument Format     | Individual arguments.                 | Arguments as an array.                | Individual or preset during         |
|                     |                                       |                                       | binding.                            |
+---------------------+---------------------------------------+---------------------------------------+-------------------------------------+
| Return Value        | Result of the function.               | Result of the function.               | A new function for later use.       |
+---------------------+---------------------------------------+---------------------------------------+-------------------------------------+
| Use Case            | When specific `this` context and      | When `this` context and               | To create a function with a         |
|                     | arguments are needed.                 | array of arguments are needed.        | specific `this` for future use.     |
+---------------------+---------------------------------------+---------------------------------------+-------------------------------------+
| Example             | `func.call(thisArg, arg1, arg2)`      | `func.apply(thisArg, [arg1, arg2])`   | `const newFunc = func.bind(thisArg, |
|                     |                                       |                                       | arg1, arg2); newFunc()`             |
+---------------------+---------------------------------------+---------------------------------------+-------------------------------------+
*/


// ------------------------------------------------ Nested Looping in Objects -----------------------

const myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}

const myObj4 = {
    name: "Sonu",
    age: 19,
    cars: [
        { name: "BMW", age: 4, models: ["Fiesta", "focus", "Digan"] },
        { name: "Audi", age: 2, models: ["Rasta", "Lasta", "Mustang"] },
        { name: "Chiron", age: 1, models: ["Fiesta", "Ritag", "Lustang"] }
    ]
}

for (let i in myObj4.cars) {
    console.log(myObj4.cars[i].name)
    for (let j in myObj4.cars[i].models) {
        console.log(myObj4.cars[i].models[j])
    }
    console.log(" ")
}

// JSON.stringify() is a powerful method in JavaScript that converts JavaScript objects into JSON strings. Here are some key benefits of using JSON.stringify():

// 1. Data Serialization
// Store or Transmit Data: It allows you to serialize complex objects into a format that can be easily stored in a database or transmitted over a network (e.g., APIs).
// String Format: Since JSON is a string format, it can be easily sent as part of HTTP requests or stored in text-based formats.
// 2. Interoperability
// Cross-Language Compatibility: JSON is a widely accepted data interchange format, making it easy to share data between different programming languages and platforms. For example, a JSON string generated in JavaScript can be parsed and used in Python, Java, or PHP.

// ---Converting to JSON---
var myFinalObject = JSON.stringify(myObj4)
console.log(myFinalObject);
console.log("Converting to json completed ")

// ---Converting back to object---
var afterObject = JSON.parse(myFinalObject);
console.log(afterObject)
console.log("Converting to Object completed ")


// --------------------------------------------------------------
var person = {
    fname: 'Ram',
    lname: 'Kumar',
    age: 20,
    address: {
        pincode: 828190,
        city: 'Delhi',

    },
    father: {
        fname: "Mohan",
        lname: "Kumar",
        address: {
            pinCode: 123456,
            city: "Mumbai"
        }
    },
    Mother: {
        fname: "Sita",
        lname: "Kumari",
        address: {
            pin: 34532,
            city: "Kolkata",
        }
    }
};

//   ------------------------------------ 

// In JavaScript, the concepts of shallow copy and deep copy refer to how objects are copied and how nested structures within objects are handled. Let's break down both concepts using your person object as an example.

// Shallow Copy
// A shallow copy creates a new object, but it does not create copies of nested objects. Instead, it copies references to those nested objects. This means that if you change a nested object in the copied object, it will also affect the original object.

// Example of Shallow Copy
// You can create a shallow copy using the Object.assign() method or the spread operator (...). Here’s an example:

// Original person object
var person = {
    fname: 'Ram',
    lname: 'Kumar',
    age: 20,
    address: {
        pincode: 828190,
        city: 'Delhi',
    },
    father: {
        fname: "Mohan",
        lname: "Kumar",
        address: {
            pinCode: 123456,
            city: "Mumbai"
        }
    },
    mother: {
        fname: "Sita",
        lname: "Kumari",
        address: {
            pin: 34532,
            city: "Kolkata",
        }
    }
};

// Creating a shallow copy using Object.assign()
var shallowCopy = Object.assign({}, person);

// OR using spread operator
var shallowCopy2 = { ...person };

// Modifying the address of the copied object
shallowCopy.address.city = "New Delhi";

// Output
console.log(person.address.city); // Output: "New Delhi" (original object is affected)
console.log(shallowCopy.address.city); // Output: "New Delhi" (copied object reflects the change)




//   ---- DEEP COPY-----------

// Deep Copy
// A deep copy creates a new object and recursively copies all nested objects, ensuring that the copied object and the original object are completely independent. Changes to nested objects in the deep copy do not affect the original object.

// Creating a deep copy using JSON.stringify() and JSON.parse()
var deepCopy = JSON.parse(JSON.stringify(person));

// Modifying the address of the deep copied object
deepCopy.address.city = "New Delhi";

// Output
console.log(person.address.city); // Output: "Delhi" (original object is unaffected)
console.log(deepCopy.address.city); // Output: "New Delhi" (copied object reflects the change)


// shallow copy
//   peraon4.address.city=vegas

//   make person 2 exact copy of person 1 name bob city vegas


//   reference copy
//   var person2=person;

//   shallow copy
//   var person3={...person}

//   person3.fname="Sohan"
//   person3.address.city="Jhumritaliya"
//   console.log(person.fname)
//   console.log(person3.fname)


//   console.log("This is done ")
//   console.log(person.address.city)
//   console.log(person3.address.city)
//   Deep copy

// var person2 ={...person}
// var person4 ={...person,address:{...person.address}}
// var person2 ={...person, fname:'Bob'}

// console.log(person4)
// person4.fname="bob"
// person4.address.city="Vegas"

// console.log(person4.fname)
// console.log(person4.address.city)


//   var person4={...person,address:{...person.address}}
//   person4.address.city="ChinaTown"
//   console.log(person)
//   console.log(person4)



//________________________________________________ ARRAY METHODS ___________________________________________


// String interpolation
var fname = "Sonu"
var lname = "kumr"
var name = `my name is ${fname} ${lname}`
console.log(name);

const arr2 = new Array(90, 9, 3, 44, 3, 23)
console.log("For each loop")

// for loop
for (var i = 0; i < size; i++) {
    console.log(arr54[i]);
}

arr2.map((item, index) => {
    console.log(item)
})

// forEach
arr2.forEach(function (val) {
    console.log(val);
})
arr2.forEach((val) => {
    console.log(val);
})

// for in
console.log("For in loop")
for (x in arr2) {
    console.log(arr2[x])
}

// for x
console.log("For x loop")
for (x of arr2) {
    console.log(x)
}
// length
const cars = ['volov', 'Jeep', 'Hello']
var size = cars.length;

/*
+-------------------------+-------------------------------+-------------------------------+
| Feature                 | forEach()                     | map()                         |
+-------------------------+-------------------------------+-------------------------------+
| Purpose                 | Executes a function for       | Creates a new array with      |
|                         | each element                  | transformed elements          |
+-------------------------+-------------------------------+-------------------------------+
| Return Value            | undefined                     | New array with results        |
+-------------------------+-------------------------------+-------------------------------+
| Chainable               | No                            | Yes                           |
+-------------------------+-------------------------------+-------------------------------+
| Original Array          | Can modify original array     | Does not modify original      |
| Mutability              |                               | array                         |
+-------------------------+-------------------------------+-------------------------------+
| Use Case                | Side effects (e.g., logging)  | Transforming data             |
+-------------------------+-------------------------------+-------------------------------+
*/


// ---------------------------------------SORTING-----------------------------

const arrAges = [49, 83, 22, 5, 6, 76, 11, 25, 87]

// --------------- DEFAULT ------------
// The sort() function by default converts the array elements to strings and sorts them lexicographically (alphabetically). 
const arrAgesDefault = arrAges.sort()
sortedArrayAsc.forEach((item) => {
    console.log(item)
})


// Compare the first character of both strings:
// '1' in "12" and '1' in "13"

// The Unicode value for '1' is 49.
// The Unicode value for '2' is 50.
// The Unicode value for '3' is 51.

// output : ["11", "22", "25", "49", "5", "6", "76", "83", "87"]

// --------------- Ascending order ------------

//Since you're working with numbers, you need to pass a comparison function to sort numerically.
const sortedArrayAsc = arrAges.sort((a, b) => a - b)
sortedArrayAsc.forEach((item) => {
    console.log(item)
})

// --------------- Descending order ------------

const sortedArrayDesc = arrAges.sort((a, b) => b - a)
sortedArrayDesc.forEach((item) => {
    console.log(item)
})
// output : [87,83,76,49,25,22,11,6,5]
// -----------------------map -filter- reduce--------------------------
// map

arrAges.map((item) => {
    console.log(item)
})

// filter
const filteredArray = arr2.filter((item) => item > 3)
arr2.forEach((value) => {
    console.log(value)
})
console.log("this is cool")

// reduce

const total = arr2.reduce((accumalator, current) => {
    return accumalator + current
})
console.log(total)


/*
| Feature             | map()                          | filter()                        | reduce()                               |
|---------------------|--------------------------------|---------------------------------|----------------------------------------|
| Purpose             | Transforms each element        | Filters elements based on a condition | Reduces an array to a single value     |
| Return              | A new array (same length)      | A new array (possibly shorter)  | A single value (number, object, etc.)  |
| Mutates original?   | No                             | No                              | No                                     |
| Callback function   | Required to transform values   | Required to return true/false   | Required to accumulate a result        |
| Common use cases    | Data transformation            | Filtering elements from an array| Summing, aggregating, or building values|
*/

// ----------- ARRAY OPERATIONS --------

// array.slice(start, end);
// array.splice(start, deleteCount, item1, item2, ...);

// Reverse
const students = ["Ram", "Shyam", "Dhyam"]
const reverseStudents = students.reverse()
console.log(reverseStudents)

// findIndex
const idx = students.findIndex((item) => item === "Ram")
console.log(idx)

//includes
const hasRam = students.includes("Ram")
console.log(hasRam)

// slice -> it returns new array 
// array.slice(start, end);


// splice -> modifies the original array -> deleted elements return in new array
// array.splice(start, deleteCount, item1, item2, ...);




//---------MAP ------------
// A Map is a collection of key-value pairs where both the keys and values can be of any type (objects, functions, primitive values, etc.).

// The set() method adds a new key-value pair to the Map.

const fruits = new Map()
fruits.set("appple", 5)
fruits.set("banaba", 15)
fruits.set("papaya", 25)

// forEach the takes the first parameter as value and second as key
fruits.forEach(function (value, key) {
    console.log(key, value)
})

// custom filter for Map
function mapFun(value) {
    return value > 24;
}

const filteredFruits = fruits.forEach(function (value, key) {
    if (mapFun(value)) {
        console.log(key + " is " + value)
    }
})



// --------------SET-------------------

const letter = new Set()
letter.add(4)
letter.add(5)
letter.add(2)
letter.add(7)
letter.add(7)

letter.forEach(function (value) {
    console.log(value)
})

// _____________________________ DATE __________________________

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const date = new Date();
console.log(months[date.getMonth()])

// ____________________________________MATHS_____________________________

// Math.round(x)	Returns x rounded to its nearest integer 4.7 => 5
// Math.ceil(x)	    Returns x rounded up to its nearest integer  4.7 => 5
// Math.floor(x)	Returns x rounded down to its nearest integer 4.7 => 4
// Math.trunc(x)	Returns the integer part of x (new in ES6) 4.7 => 4
// Math.random()    Return value from 0,1

// write a function to select random value from the array
const colors = ['red', 'yellow', 'pink', 'green', 'aqua', 'black', 'white', 'purple', 'gray', '#f5f5f5']

const index = Math.floor(Math.random() * 10)
console.log(colors[index])


// ______________________________ Destructuring ________________________
// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
};

// Destructuring
let { lastName, firstName } = person;


// Create an Array
const fruits2 = ["Bananas", "Oranges", "Apples", "Mangos"];
// Destructuring
let { [0]: fruit1, [1]: fruit2 } = fruits;

//________________________________________________ CLASS ___________________________________________

class car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        const date = new Date()
        console.log(date)
    }
}

//________________________________________________ Function with any number of arguments ___________________________________________

// arguments

// arguments only work in normal function
function addMe() {
    let size = arguments.length;
    let sum = 0;
    for (let i = 0; i < size; i++) {
        sum += arguments[i];
    }
    console.log(sum)
}

addMe(2, 3, 4, 5, 6, 7, 8)


// spread  ...
function addMe(...numbers) {
    let size = numbers.length;
    let sum = 0;
    for (let i = 0; i < size; i++) {
        sum += numbers[i];
    }
    console.log(sum)
}

addMe(2, 3, 4, 5, 6, 7, 8)

// Sample onchnage function used in reactJs
const onChangeHandle = (e) => {
    e.preventDefault()
    key = e.target.name
    value = e.target.value
    // keys are always enclosed in [] , object or array or string
    setInputs({ ...input, [key]: value })
}
// _________________________________________ Pure Functions ____________________________________


// In JavaScript, pure functions are functions that:

// Always return the same output given the same input.
// Do not cause any side effects.
// Here's a breakdown of these two main characteristics:

// pure function
function add(a, b) {
    return a + b;
}

// impure function
function multiply(a, b) {
    return a * b;
}

//________________________________________________ Async Function ___________________________________________


// "I will finish later!"

// Functions running in parallel with other functions are called asynchronous

// A good example is JavaScript setTimeout()

// Key Concepts in JavaScript Asynchronous Programming
// Synchronous vs. Asynchronous:
// Synchronous: Tasks are executed one after another, and each task must complete before the next starts. This can block the main thread.
// Asynchronous: Tasks can be started and completed in the background, without blocking the main thread, allowing other operations to run in the meantime.

// Techniques for Handling Asynchronous Code
// Callbacks
// Promises
// async / await

const getWeather = async () => {
    const response = await axios.get('url')
    console.log(response)
}

//________________________________________________ Callback Function ___________________________________________

// A callback is a function passed as an argument to another function

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
//________________________________________________ Higher Order Function ___________________________________________

// Functions that can accept other function as an argument that is called higher order function

// It will take cb as the third parameter and will call cb with the result parameter in the end
function add(a, b, cb) {
    let result = a + b;
    cb(result)
}

const showMe = (a) => {
    console.log(a)
}

add(4, 5, showMe)

// How to return a function in js
function add2(a, b) {
    let result = a + b;

    return () => {
        console.log(result)
    }
}

const newFunction = add(45, 74)
newFunction()


//________________________________________________ Promise ___________________________________________

// Promises in JavaScript are a powerful tool for managing asynchronous operations. A promise represents a value that will be available in the future, typically after an asynchronous task has completed, such as an HTTP request, file operation, or timer.

// Key Concepts of Promises
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It provides a way to write asynchronous code in a more structured and readable manner, avoiding "callback hell."

// The Promise States
// A promise can be in one of three states:

// Pending: The initial state; the promise is neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully, and the promise has a resolved value.
// Rejected: The operation failed, and the promise has a reason (error) for its rejection.
// Once a promise is either fulfilled or rejected, it becomes settled and will not change state again.

// Syntax of a Promise
// A promise is created using the Promise constructor, which takes a function with two arguments:

// resolve: Call this function when the async task completes successfully, passing the result.
// reject: Call this function when the async task fails, passing the error or reason.

// if we dont use asyn await our webpage will be unresponsive

const promise = new Promise((resolve, reject) => {
    // Asynchronous operation (e.g., API call)
    let success = true;

    if (success) {
        resolve("Operation successful"); // Resolve if successful
    } else {
        reject("Operation failed"); // Reject if failed
    }
});

// Fetch API Overview
// fetch() is used to make HTTP requests.
// It returns a promise that resolves to a Response object.
// The .then() method is used to process the result when the promise resolves (success) or reject (failure).
// You can chain multiple .then() calls to handle different parts of the response, such as parsing the JSON data.

// Fetch data from a public API
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        // Check if the response is OK (status code is in the 200 range)
        if (!response.ok) {
            throw new Error('Network response was not OK');
        }
        // Parse the JSON data from the response
        return response.json();
    })
    .then(data => {
        // Process the parsed JSON data
        console.log('Data:', data);
    })
    .catch(error => {
        // Handle any error that occurs in the promise chain
        console.error('Fetch error:', error);
    });

//________________________________________________ Closure ___________________________________________

// A closure in JavaScript refers to a feature where an inner function has access to the outer (enclosing) function's variables, even after the outer function has finished executing. In other words, a closure allows a function to "remember" the scope in which it was created, which includes the function's variables and parameters.

function outerFunction() {
    let outerVariable = 'I am outside!';

    function innerFunction() {
        console.log(outerVariable); // innerFunction has access to outerVariable
    }

    return innerFunction;
}

const closureExample = outerFunction(); // outerFunction returns innerFunction
closureExample(); // Logs: "I am outside!"

// Closures are fundamental to many programming patterns, such as function factories, event handling, and creating private variables.

// __________________________________________ IIFE __________________________________________

// An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is executed right after it is defined. It is a common design pattern used to create a new scope, avoid polluting the global namespace, and execute code immediately.

(function () {
    const temp = "This is local to IIFE";
    console.log(temp); // Outputs: This is local to IIFE
})();

console.log(temp); // Error: temp is not defined


// _________________________________________ Event Delegation ____________________________________

// Event delegation in JavaScript is a powerful technique for managing events on a group of elements more efficiently. Instead of attaching event listeners to each individual element, you attach a single event listener to a common ancestor. This ancestor then listens for events that bubble up from its child elements.

// How Event Delegation Works
// Bubbling Phase: When an event occurs on a child element, it bubbles up to its parent elements. This means that the event is first handled by the target element, then by its parent, and so on, until it reaches the root of the document.

// Single Event Listener: By attaching the event listener to a parent element, you can handle events for all its child elements without needing to add individual listeners to each child.

// Benefits of Event Delegation
// Performance: Reduces memory consumption and improves performance by minimizing the number of event listeners.
// Dynamic Elements: Works well with dynamically added elements since the parent will still respond to events on new children.
// Simplified Code: Reduces the amount of code you need to write and manage.


const list = document.getElementById('myList');

// Event delegation: attach the event listener to the parent <ul>
list.addEventListener('click', function (event) {
    // Check if the clicked element is an <li>
    if (event.target.tagName === 'LI') {
        alert('You clicked: ' + event.target.textContent);
    }
});

// _________________________________________ Event loop ____________________________________

// The Event Loop is a fundamental concept in JavaScript that handles asynchronous operations, enabling non-blocking I/O. It allows JavaScript to perform tasks such as making network requests or handling timers without blocking the main thread, providing a seamless experience to users.

// How the Event Loop Works
// Call Stack: JavaScript executes code in a single-threaded environment with a stack called the call stack. Functions are added to the call stack when called and removed once completed.

// Web APIs: When asynchronous functions like setTimeout, fetch, or DOM events are encountered, they are offloaded to Web APIs (provided by the browser) rather than executed in the call stack. These APIs handle the tasks independently.

// Callback Queue: Once the Web API completes an asynchronous task, it pushes the callback (the function to execute after the asynchronous task) to a Callback Queue.

// Event Loop: The Event Loop continuously checks the call stack. When the stack is empty, it moves the first callback in the queue to the stack, allowing the asynchronous function to run.