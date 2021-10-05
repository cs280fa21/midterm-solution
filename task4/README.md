# Task 4

Suppose we have the following class:

```jsx
class Account {
  constructor(amount) {
    this.balance = amount;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

const account = new Account(100);
console.log(account.balance);  // 100
```

Currently, JavaScript class construct does not support "access modifiers." Therefore, it is not possible to "hide" the `balance` property (i.e., we cannot make it a private field). Rewrite the `Account` class and turn it into a "function." By employing "closure," hide the `balance` property. Note one should be able to use the `deposit` and `withdraw` methods as before.


```js
function Account (amount) {
  // TODO Implement me!
}

const account = Account(100);
console.log(account.balance);  // undefined
```

Please complete this task in the `index.js` file inside this folder. Do **not** write the answer in this README file.