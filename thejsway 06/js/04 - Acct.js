/*Write a program that creates an account object with the following characteristics:
• A name property set to “Alex”.
• A balance property set to 0.
• A credit method adding the (positive or negative) value passed as an argument to the
account balance.
• A describe method returning the account description.
Use this object to show its description, crediting 250, debiting 80, then show its description again.*/

const acct = {
    name: "Alex",
    balance: 0,
    credit(value){
        return acct.balance += value
    },
    describe(){
        return `The owner of this account is ${this.name}, the balance is currently: ${this.balance}.`
    }
}

console.log(acct.describe())
acct.credit(250)
acct.credit(-80)
console.log(acct.describe())