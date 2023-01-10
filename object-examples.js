// deklarera ett objekt

let pokemon = {
    name: 'Bulbasaur',
    id: 1,
    type: 'grass'
};

// console.log(pokemon.name);
// console.log(pokemon['type']);
// delete pokemon.type;
// console.log(pokemon);

pokemon.generation = 1;

// loopa över alla egenskaper i objektet pokemon
// for-in-loop
for (x in pokemon) {
    console.log(pokemon[x]);
}
// for of-loop
// skapar ny array
let arr = [pokemon, pokemon, pokemon];
console.log(arr);

for (obj of arr) {
    console.log(obj.name);
}