function createBankAccount(accHolder, mobile, email, balance = 0) {
  return {
    accountHolder: accHolder,
    mobile: mobile,
    email: email,
    balance: balance,

    deposit(amount) {
      this.balance += amount;
      console.log(sendDepositEmail.call(this, amount));
    },
    withdraw(amount) {
      if (this.balance <= 0 || this.balance < amount) {
        console.log('Insufficient Balance');
        console.log(InsufficientFundEmail.call(this, amount));
      } else {
        this.balance -= amount;
        sendWithdrawEmail.call(this, amount);
      }
    },

    checkBalance() {
      console.log(`Your balance is ${this.balance}`);
    },

    checkBankProfile() {
      console.log(`Account Holder = ${accHolder} `);
      console.log(`Mobile no. = ${mobile}`);
      console.log(`Email = ${email}`);
      console.log(`Account Balance = ${this.balance}`);
    },
  };
}

let person1 = createBankAccount(
  'Shreya',
  '78595959500',
  'xyz@gmail.com',
  50000
);

let person2 = createBankAccount(
  'Vinayak',
  '78595959500',
  'vinayak@gmail.com',
  120000
);

person2.deposit(10000);
// person1.checkBankProfile();

// Send Email when Withdrawing and Depositing >  After each Fucntion
