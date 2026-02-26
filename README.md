1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answers : 

1.getElementById : getElementById() is used to select an element by it id.
Example:
const allJob = document.getElementById('all-job');

2.getElementsByClassName : getElementsByClassName() is used to select elements by their class name.it give a html collection.
Example:

const items = document. getElementsByClassName('item');

3.querySelector: querySelector always give first matching element using a css selector,


using id:
document.querySelector("#container")

using class:
document.querySelector(".title")

using tag:
document.querySelector("p")

4.querySelectorAll:  querySelectorAll selects all matching  elements using a css selector.it is best practice and common used in modern js.
it return a NodeList.

document.querySelectorAll(".title");


2. How do you create and insert a new element into the DOM?
setp-1:first createElement
const newElement = document.createElement("p");
newElement.innerText = "Hello";

setp-2:then assign it parent container
mainContainer.appendChild(newElement);


3. What is Event Bubbling? And how does it work?
answer:
document.getElementById("child").addEventListener("click", function() {
  console.log("Button clicked");
});

document.getElementById("parent").addEventListener("click", function() {
  console.log("Parent clicked");
});

if i click button ,the event will bubble up to the parent element.

4. What is Event Delegation in JavaScript? Why is it useful?

answer:
Event Delegation means instead of handling many child elements separately, we attach a single event listener to their parent element.
It works through Event Bubbling.

const mainContainer=document.getElementById("job-container");
 mainContainer.addEventListener("click",function(event)){
const clickElement=event.target;
 }




5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() :
The preventDefault method is used to prevent the browser's default behavior associated with an event. For example, clicking on a link normally navigates to a new page, or submitting a form reloads the page. Using preventDefault stops these actions.


stopPropagation()
The stopPropagation method is used to stop the event from propagating to parent elements. This means the event will not bubble up or trickle down the DOM hierarchy, preventing parent or ancestor event handlers from being triggered.