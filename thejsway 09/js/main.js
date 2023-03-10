//RPG Character Generator

// const aurora = {
//     name: "Aurora",
//     health: 150,
//     strength: 25,
//     xp: 0,

// //Return the character description
// describe(){
//     return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
//     }
// };

// //Aurora is harmed by an arrow
// aurora.health -= 20;

// //Aurora gains a strength necklace
// aurora.strength += 10;

// //Aurora learns a new skill
// aurora.xp += 15;

// console.log(aurora.describe());

// const glacius = {
//     name: "Glacius",
//     health: 130,
//     strength: 30,
//     xp: 0,

// // return char description
//     describe(){
//         return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
//     }
// };

class Character {
    constructor(name, health, strength){
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xp = 0; //XP is always 0 for new characters
        this.gold = 10
        this.keys = 1
    }
    //Attack a target
    attack(target){
        if(this.health > 0){
            const damage = this.strength;
            console.log(`${this.name} attacks ${target.name} and causes ${damage} damage points`);
            target.health -= damage;
            if(target.health > 0){
                console.log(`${target.name} has ${target.health} health points left`);
            }else{
                target.health = 0;
                const bonusXP = 10;
                const enemyGold = target.gold
                const enemyKeys = target.keys
                console.log(`${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${enemyGold} gold, and ${enemyKeys} key(s)`);
                this.xp += bonusXP;
                this.gold += enemyGold;
                this.keys += enemyKeys;
                target.gold = 0;
                target.keys = 0;
            }
        }else {
            console.log(`${this.name} can't attack (they've been eliminated)`);
        }
    }

    //return the char description
    describe(){
        return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points. ${this.name} has ${this.gold} gold and ${this.keys} key(s)`;
    }
}

const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);
console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());

//Aurora gains a strength necklace
aurora.strength += 10;

//Aurora learns a new skill
aurora.xp += 15;

console.log(aurora.describe());
console.log(glacius.describe())

//Dogs

class Dog {
    constructor(name, species, size){
        this.name = name;
        this.species = species;
        this.size = size;
    }
    bark(){
        if(this.size > 60){
            return "Grrr! Grrr!"
        }else{
            return "Woof! Woof!"
        }
    }
}
const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);


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

