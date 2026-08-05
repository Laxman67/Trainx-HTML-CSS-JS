Object().__proto__.sendDepositEmail = function (amount) {
  console.log(`To ${this.__accountHolderName},
This is to inform you that amount of Rs.${amount} is deposited`);
};

Object.prototype.sendWithdrawEmail = function (amount, name) {
  const { __accountHolderName } = this;
  console.log(`To ${__accountHolderName},
    This is to inform you that amount of Rs.${amount} is withdrawn | Available Balance is ${this.balance}`);
};
console.log(Object());

class Bank {
  // Private Properties and Methods
  #percentageInProfit = 1.5;
  #calculatePercentage() {
    console.log(
      `Your income will be calculated by ${this.#percentageInProfit} * ${this.balance}`
    );
  }
  // Private Properties and Methods

  static bankCode = 'CBIN0078';
  static getBankCode() {
    return `Bank Code: ${this.bankCode}`;
  }

  constructor(name, mobile, email, amount = 0) {
    this.__accountHolderName = name;
    this.mobile = mobile;
    this._email = email;
    this.balance = amount;
  }

  set email(emailvalue) {
    this._email = emailvalue;
  }

  get email() {
    return this._email;
  }

  deposit(amount) {
    console.log('---DEPOSITED STARTED---');
    this.balance += Number(amount);

    console.log(
      `Amount of Rs. ${amount} is Deposited by ${this.__accountHolderName}`
    );
    Object.__proto__.sendDepositEmail.call(this, amount);

    console.log('---DEPOSITED COMPLETED---');
  }
  checkBalance() {
    console.log(`Your balance is ${this.balance}`);
  }
  withdraw(amount) {
    console.log('---WITHDRAWL STARTED----');
    if (amount !== undefined && amount !== 0) {
      if (this.balance <= 0 || this.balance < amount) {
        console.log('Insufficient Balance');
        // console.log(InsufficientFundEmail.call(this, amount));
      } else {
        this.balance -= amount;
        console.log(`Amount Withdrawn : Rs ${amount}`);
        console.log(this);

        let sendEmail = sendWithdrawEmail.bind(
          this,
          amount,
          this.__accountHolderName
        );
        console.log(sendEmail());
      }
    } else {
      console.log(`Please Enter amount to Withdraw(----AMOUNT-----)`);
    }
    console.log('---WITHDRAWL FINISHED----');
  }
  getPercentage() {
    console.log(`The Percetage is ${this.#percentageInProfit}`);
    this.#calculatePercentage();
  }
  checkBankProfile() {
    const { _accountHolderName, mobile, email, balance } = this;
    console.log(`Account Holder = ${_accountHolderName} `);
    console.log(`Mobile no. = ${mobile}`);
    console.log(`Email = ${email}`);
    console.log(`Account Balance = ${Number(balance)}`);
  }
}

function InsufficientFundEmail(amount) {
  return `To ${this.accountHolderName},
    You're trying to withdraw Balance then available Rs .${amount}`;
}

let obj1 = new Bank('Raj', '5959561000', 'raj45@gmail.com', 522000);

obj1.deposit(9000);
obj1.deposit(9000);
// obj1.withdraw(90);
