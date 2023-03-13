// Account list
// Let's build upon a previous account object exercise. A bank account is still defined by:

// A name property.
// A balance property, initially set to 0.
// A credit method adding the value passed as an argument to the account balance.
// A describe method returning the account description.
// Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.

//syntax for creating an object using a class

class MyClass{
    constructor(param1,param2,/*...*/){
        this.property1 = param1;
        this.property2 = param2;
        //...
    }
    method1(/* ... */){
        // ...
    }
    method2(/* ... */){
        // ...
    }
    // ...
}

class Account{
    constructor(owner){
        this.owner = owner;
        this.balance = 0;
    }
    credit(amount){
        this.balance += amount
    }
    describe(){
        console.log(`owner: ${this.owner}, balance: ${this.balance}`)
    }
}

const acctList = [new Account('Sean'), new Account('Brad'), new Account('Georges')]
//can create the array and the objects at the same time

console.log(acctList[1])
//check that the array was correctly created

acctList.forEach(element=>{
    element.credit(+(1000))
    console.log(element.describe())
})

