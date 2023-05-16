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
