function Account (amount) {
  let balance = amount;
  return {
    deposit: (amount) => {
      balance += amount;
    },

    withdraw: (amount) => {
      balance -= amount;
    }
  }
}

const account = Account(100);
console.log(account.balance);  // undefined