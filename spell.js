// Fonction that creates a Player object
const PlayerFactory = (name, age, health, mana) => {
    let player = {
        _name: name,
        _age: age,
        _occupation: 'adventurer',
        _health: health,
        _mana: mana,

        get name() {
            return this._name
        },

        get age() {
            return this._age
        },

        get health() {
            return this._health
        },

        get mana() 
        {return this._mana
        },

        /* Method of the Player object that will return a certain amount of damage based on the amount of ennemies under 40 hp.
            (Dammage returned = average health of npc under 40 hp) */
        spell(arr) {
            let lowNpc = [];
            let damage = 0;
            if (this_mana >= 3) {
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].health < 40) {
                        lowNpc.push(arr[i]);
                    }
                }

                for (let i = 0; i < lowNpc.length; i++) {
                    damage += lowNpc[i].health;
                    lowNpc[i].kill;
                }

                damage /= lowNpc.length;
                this._mana -= lowNpc.length * 3;

                return damage;
            } else {
                console.log ('Not enough mana');
            }
        }
    }

    return player
}

// Function that creates npcs
const npcFactory = (id, health, mana) => {
    let npc = {
        _id: id,
        _health: health,
        _mana: mana,

        get id() {
            return this._id
        },

        get health() {
            return this._health
        },

        get mana() {
            this._mana
        },

        // Would put the npc's health at -10 and kill it
        kill() {
            this._health = -10;
        }
    }

    return npc
}


// Function that creates a random number between 0 and 150. Rounds it up to the lower number.
function randNumber() {
    return Math.floor(Math.random() * 150)
}

console.log(`The random number is ${randNumber()}`);

// Creates 30 npcs and addes them to an empty array
let npcArr = [];
for (let i = 0; i < 30; i++) {
    npcArr.push(npcFactory(i, randNumber(), randNumber()));
}

// Creation of a player called Peterson
let peterson = PlayerFactory('Peterson', 23, 140, 30);

console.log(npcArr[3].mana)
console.log(npcArr[7].mana)
console.log(npcArr[16].mana)