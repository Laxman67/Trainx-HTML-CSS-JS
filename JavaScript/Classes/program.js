function createBankAccount(accountHolder, mobile, email, balance) {
  let currentBalance = balance;

  return {
    deposit(amount) {
      if (amount > 0) {
        currentBalance += amount;
        console.log(`₹${amount} deposited successfully.`);
      } else {
        console.log('Invalid deposit amount.');
      }
    },

    withdraw(amount) {
      if (amount <= 0) {
        console.log('Invalid withdrawal amount.');
      } else if (amount > currentBalance) {
        console.log('Insufficient balance.');
      } else {
        currentBalance -= amount;
        console.log(`rs${amount} withdrawn successfully.`);
      }
    },

    checkBalance() {
      console.log(`Current Balance: rs${currentBalance}`);
    },

    checkBankProfile() {
      console.log('----- Bank Profile -----');
      console.log('Account Holder:', accountHolder);
      console.log('Mobile:', mobile);
      console.log('Email:', email);
      console.log('Balance: rs' + currentBalance);
    },
  };
}

// Create Account
const account = createBankAccount(
  'Arpita Pandey',
  '9876543210',
  'arpita@example.com',
  10000
);

account.checkBankProfile();

account.deposit(5000);
account.checkBalance();

account.withdraw(3000);
account.checkBalance();

account.withdraw(15000);

console.log(account.currentBalance);
