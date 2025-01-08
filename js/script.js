// stats
let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let inventory = ["stick"]

const xpText = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');

//controls
const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")

function goStore() {
    console.log("Going to store.");
}

function goCave() {
    console.log("Going to cave.");
}

// Monster stats
let monsterHealth
const monsterHealthText = document.querySelector("#monsterHealth");
const monsterStats = document.querySelector('#monsterStats');
const monsterName = document.querySelector('#monsterName');

//text
const text = document.querySelector('#text');

//fight
let fighting

function fightDragon() {
    console.log("Fighting dragon.");
}

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
