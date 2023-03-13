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
