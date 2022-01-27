const adjectives = ['Sickly', 'Mighty', 'Cowardly', 'Courageous', 'Charming', 'Garish', 'Awkward', 'Self - assured', 'Normal'];
const ancestry = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Halfling', 'Half-Dwarf', 'Half-Elf', 'Half-Orc', 'Human', 'Tiefling'];
const classes = ['Bard', 'Barbarian', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
const months = ['Veer', 'Kindle', 'Laden', 'Lodge', 'Batten', 'Meridian', 'Burnish', 'Garner', 'Welter', 'Furi', 'Floe', 'Vale']

function randomYear() {
    return Math.floor(Math.random() * (1258 - 1174) + 1174);
}
function randomDay() {
    return Math.floor(Math.random() * (29 - 1) + 1);
}

var randomResult = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

var makeMessage = () => {
    console.log(`You are a(n) ${randomResult(adjectives)}, ${randomResult(ancestry)} ${randomResult(classes)}!`);
    console.log(`You were born on ${randomResult(months)} ${randomDay()}, ${randomYear()}!`);
}

makeMessage();