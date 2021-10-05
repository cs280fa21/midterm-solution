# Task 6

In many cases, a web application needs to defer work until after the browser has finished loading the HTML content. You can place such work into a listener for the `DOMContentLoaded` event. For example, in HW3 (Covid Dashboard), you could have used the following pattern to populate the countries dropdown and retrieve the covid statistics for the US, as soon as the app was fully loaded.

```js
document.addEventListener("DOMContentLoaded", setUp);

function setUp() {
  const dropdown = document.getElementById("countries");
  retrieveCountries(dropdown);
  retrieveStatistics({ target: { value: "us" } });
  dropdown.addEventListener("change", retrieveStatistics);
}
```

The implementation of `retrieveCountries` and `retrieveStatistics` are not shown. Notice the `setUp` is a callback function. Indeed, `addEventListener` is an async operation. This function has been a part of the Web API since before JavaScript had "Promise." Therefore, you can only use the `addEventListener` with the callback pattern. However, one can wrap it in another function, such as `whenDOMContentLoaded` yielding a promise:  

```js
whenDOMContentLoaded().then(setUp)
```

You task is to implement `whenDOMContentLoaded`. Please complete this task in the `index.js` file inside this folder. Do **not** write the answer in this README file.