# Emergency Service Directory - Assignment 05

## Q1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

-   **getElementById** → Finds one element using its id. Since id is
    unique, it will only return that single element.

-   **getElementsByClassName** → Finds all element that have the same
    class name. if new elements are
    added with that class, list update automatically.

-   **querySelector** → Finds the first element that matches a CSS
    selector (like #id, .class).

-   **querySelectorAll** → Finds all elements that match a CSS selector.
    it won't change even if new
    elements are added later.

## Q2: How do you create and insert a new element into the DOM?

To create and insert a new element into the DOM, you need:
1. Create the element using `document.createElement()`.
2. Add any desired content like text or other elements to the new
element.
3. Insert the new element into the DOM with `appendChild`,
`insertBefore`, or other DOM methods.

## Q3: What is Event Bubbling and how does it work?

When you click on an element, the event doesn't stop . It also
travels upwards to its parents, one by one, until it reaches the top
(`document`).

**how it work:** If you click a button inside a `<div>`, the click first
happens on the button, then also on the `<div>`, then maybe on the
`<body>`, and so on.

## Q4: What is Event Delegation in JavaScript? Why is it useful?

Instead of putting event listeners on every small element, you put one
listener on the parent element. That parent checks which child was
clicked and than handles it.

**Why useful?**
- Saves memory.
- Works great for dynamic content (when new children are added).

## Q5: What is the difference between preventDefault() and stopPropagation() methods?

-   **preventDefault()** → Stops the browser's default action.
    *Example:* Prevent a form from submitting or a link from going to
    another page.

``` js
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault(); // form won’t submit
});
```

-   **stopPropagation()** → Stops the event from bubbling up to
    parents.
    *Example:* A button click won't trigger the parent `<div>`'s click
    listener.

``` js
document.querySelector("button").addEventListener("click", function(e) {
  e.stopPropagation(); // event stays only on button
});
```
