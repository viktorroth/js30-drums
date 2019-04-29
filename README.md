# Javascript30 - 1. Drums

[Link to the website](https://viktorroth.github.io/js30-drums/)

## Things learned

### JS related:
- `pointer-events: none` to restrict clicking on certain elements
- `classlist.add('className')` and `classlist.remove('className')` 
  - doesn't work in __IE9__
- the `data-*` attributes gives us the ability to embed custom data attributes on all HTML elements
- __audio__ --> `audio.currentTime = 0` and `audio.play()`

- `this` keyword with __function declaration__ VS __arrow function__

```js
function removeTransition(ev) {
  console.log(this); // returns the class "key" div
  this.classList.remove('playing');
}

const removeTransition = (ev) => {
  console.log(this); // returns window object
  this.classList.remove('playing'); // throws an error
}
```


### Resources
[Keycodes](https://keycode.info/)
- great website created by [Wes Bos](https://wesbos.com/) - helps with finding the correct keycodes to corresponding keys on the keyboard

[JavaScript30](https://javascript30.com/)
- A free 30 day vanilla js coding challenge by [Wes Bos](https://wesbos.com/)