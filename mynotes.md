I know how to reference DOM elements
I know how to add event listener to th button 
To get the entered name, I had to create a variable(using (.value))
textContent v innerHTML - works the same but textContent does not take CSS styles into account when retrieving the content. (Still need to gather information on this one)

DIFFERENCE BETWEEN innerHTML and textContent:
The `innerHTML` and `textContent` properties in JavaScript are used to access and manipulate the content of an HTML element, but they have some important differences:

1. Content Handling:
   - `innerHTML`: It represents the HTML markup contained within the element, including any HTML tags and their content. When you retrieve the `innerHTML` value, it returns the HTML content as a string, including both the tags and the text content.
   - `textContent`: It represents the textual content of the element, excluding any HTML tags. When you retrieve the `textContent` value, it returns only the text content without any HTML tags.

2. HTML Parsing and Rendering:
   - `innerHTML`: When you assign a new value to `innerHTML`, it parses and renders the HTML markup. This means that any HTML tags and entities within the assigned value will be interpreted and displayed as HTML elements. It allows you to dynamically add or modify HTML structure.
   - `textContent`: When you assign a new value to `textContent`, it treats the assigned value as plain text. It does not parse or render any HTML tags or entities. It is useful when you want to manipulate only the textual content of an element and avoid unintended HTML parsing or rendering.

3. Security Considerations:
   - `innerHTML`: Since it parses and renders HTML, using `innerHTML` with user-provided or untrusted content can potentially lead to security vulnerabilities such as cross-site scripting (XSS) attacks. It is important to properly sanitize and validate any content that is assigned to `innerHTML`.
   - `textContent`: It treats the assigned value as plain text and does not interpret any HTML tags or entities. Therefore, it is generally safer to use `textContent` when dealing with user-provided or untrusted content, as it mitigates the risk of injecting malicious scripts or HTML.

In summary, `innerHTML` allows you to work with HTML markup and renders it, while `textContent` deals only with the textual content of an element, excluding HTML tags. When working with user-provided or untrusted content, `textContent` is usually safer to use to avoid security vulnerabilities.

SIMILARITIES BETWEEN innerHTML and textContent:
While `innerHTML` and `textContent` have some important differences, they also share some similarities:

1. Accessing Content: Both properties allow you to access the content of an HTML element.
   - `innerHTML`: It provides access to the HTML markup contained within the element, including any HTML tags and their content.
   - `textContent`: It provides access to the textual content of the element, excluding any HTML tags.

2. Modifying Content: Both properties can be used to modify the content of an HTML element.
   - `innerHTML`: By assigning a new value to `innerHTML`, you can replace the existing HTML content of an element with new HTML markup.
   - `textContent`: By assigning a new value to `textContent`, you can replace the existing text content of an element with new text.

3. String Representations: Both properties return or accept string values.
   - `innerHTML`: When you retrieve the value of `innerHTML`, it returns the HTML content as a string, including HTML tags and their content.
   - `textContent`: When you retrieve the value of `textContent`, it returns the text content as a string, excluding any HTML tags.

4. Traversing and Manipulating Elements: Both properties can be used in conjunction with other DOM methods and properties to traverse and manipulate elements.
   - `innerHTML`: You can use `innerHTML` to insert new HTML elements, change the attributes of existing elements, or modify the structure of the DOM.
   - `textContent`: You can use `textContent` to modify the text content of an element, search for specific text within an element, or perform text-related operations.

It's important to note that while `innerHTML` and `textContent` have similarities, their main differences lie in how they handle HTML markup and their security implications. Understanding these differences is crucial to using them effectively and appropriately in different scenarios.

LOCAL STORAGE
The localStorage object allows you to save key/value pairs in the browser.
The localStorage object stores data with no expiration date.
The data is not deleted when the browser is closed, and are available for future sessions.

Session Storage:
The sessionStorage Object which stores data for one session.
The data is deleted when the browser window is closed

Syntax
window.localStorage
or just:
localStorage

Save Data to Local Storage
localStorage.setItem(key, value);

Read Data from Local Storage
let lastname = localStorage.getItem(key);

Remove Data from Local Storage
localStorage.removeItem(key);

Remove All (Clear Local Storage)
localStorage.clear();

EXAMPLE:
Set and retrieve localStorage name/value pair:

localStorage.setItem("lastname", "Smith"); (this set name)
localStorage.getItem("lastname"); (this retrieve the name)

More Examples
Count the number of times a user has clicked a button:

if (localStorage.clickcount) {
  localStorage.clickcount = Number(localStorage.clickcount) + 1;
} else {
  localStorage.clickcount = 1;
}
Even if i the refresh browser this will happen >>>> (Close the browser tab (or window), and try again, and the counter will continue to count (is not reset)).
[ExamplesAreFromW3School] - check that when confused!!!

To test GREET FUNCTION

1. Set up Mocha.js and chai
2. Create a new test file:
- Create a new file named greet.test.js

I STILL NEED TO UNDERSTAND MORE ABOUT [JSON.stringify() and JSON.parse()]. 

In JavaScript, JSON.stringify() and JSON.parse() are methods that are part of the built-in JSON object. They are used for converting JavaScript objects or values to JSON strings and parsing JSON strings back into JavaScript objects or values, respectively.

JSON.stringify(): This method takes a JavaScript object or value and converts it into a JSON string representation. It serializes the object by converting its properties to a string format that adheres to the JSON (JavaScript Object Notation) syntax. 
The syntax for using JSON.stringify() is as follows:

Example of syntanx: 
JSON.stringify(value[, replacer[, space]])
Explainantion of the above code:
> value: The JavaScript object or value to be converted into a JSON string.

> replacer (optional): A function or an array specifying the properties included in the resulting JSON string, or a value transformation. It can be used to filter and transform values during serialization. If replacer is an array, only the specified properties are included in the resulting JSON string.

> space (optional): A string or number that specifies the indentation of nested levels in the resulting JSON string. It controls the spacing used for formatting the output to make it more readable.

Example usage of JSON.stringify():

const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const jsonString = JSON.stringify(person);
console.log(jsonString);
// Output: {"name":"John","age":30,"city":"New York"}

JSON.parse(): This method takes a JSON string and parses it into a JavaScript object or value. It deserializes the string by reconstructing the JavaScript object from the JSON representation. The syntax for using JSON.parse() is as follows:

Example syntax: 
JSON.parse(text[, reviver])

Explanation of the above syntax:
> text: The JSON string to be parsed into a JavaScript object.
> reviver (optional): A function that can be used to transform or filter the resulting object. It can be used to modify values or exclude properties during parsing.

Example usage of JSON.parse():
const jsonString = '{"name":"John","age":30,"city":"New York"}';

const person = JSON.parse(jsonString);
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.city); // Output: New York

SUMMARY: Using JSON.stringify() and JSON.parse() together, you can convert JavaScript objects to JSON strings and then parse those strings back into JavaScript objects as needed.

TIMEOUT [HowDoesItWork]

Definition and Usage
The setTimeout() method calls a function after a number of milliseconds.

1 second = 1000 milliseconds.

Notes
The setTimeout() is executed only once.

If you need repeated executions, use setInterval() instead.

Use the clearTimeout() method to prevent the function from starting.

To clear a timeout, use the id returned from setTimeout():

myTimeout = setTimeout(function, milliseconds);
Then you can to stop the execution by calling clearTimeout():

clearTimeout(myTimeout);
See Also:
The clearTimeout() Method

The setInterval() Method

The clearInterval() Method

Syntax
setTimeout(function, milliseconds, param1, param2, ...)
Parameters
Parameter	Description
function	Required.
The function to execute.
milliseconds	Optional.
Number of milliseconds to wait before executing.
Default value is 0.
param1,
param2,
...	Optional.
Parameters to pass to the function.
Not supported in IE9 and earlier.
Return Value
Type	Description
A number	The id of the timer.
Use this id with clearTimeout(id) to cancel the timer.

More Examples
Display an alert box after 3 seconds (3000 milliseconds):

let timeout;

function myFunction() {
  timeout = setTimeout(alertFunc, 3000);
}

function alertFunc() {
  alert("Hello!");
}

Open a new window and close the window after three seconds (3000 milliseconds):

const myWindow = window.open("", "", "width=200, height=100");
setTimeout(function() {myWindow.close()}, 3000);

However, if you use an anonymous function, it will work in all browsers:

setTimeout(function() {myFunc("param1", "param2")}, 2000);




        