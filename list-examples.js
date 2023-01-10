// vår första lista:

let pokemons = ['bulbasaur', 'ivysaur', 'venusaur'];

let newArray = new Array('jox1', 'jox2', 'osv');
// console.log(newArray);

let cars = ['volvo', 'saab', 'ford'];

// lista med objekt:
let series = [{
        title: 'Breaking Bad',
        genre: 'Drama',
        episodes: 76
    },
    {
        title: 'Game Of Thrones',
        genre: 'Fantasy',
        episodes: 48
    },
    {
        title: 'Våra Bästa År',
        genre: 'Drama',
        episodes: 14430
    }
];

let newObj = {
    title: 'Glamour',
    genre: 'Drama',
    episodes: 8000
};

series.push(newObj);
// console.log(series);
series.pop(); // tar bort sista elementet i en lista
series.shift(); // tar bort första elementet i en lista 
series.unshift(newObj); // lägger till nytt objekt först i listan
// console.log(series);


let nameList = ['Joakim', 'Cecilia', 'Fabiola'];

// indexOf letar fram om ett element finns i en lista
let index = nameList.indexOf('Cecilia');

if (index < 0) {
    // då finns inte elementet i listan
    //console.log('tyvärr fanns inte detta i listan');
} else {
    // om den finns i listan
    //console.log(nameList[index], ' finns i listan');
};

// for-loop

for (let i = 0; i < nameList.length; i++) {
    //console.log(nameList[i]);
};

// while loop
let i = 2;
while (i >= 0) {
    // console.log(nameList[i]);
    i--;
};

//for of-loop
for (let name of nameList) {
    console.log(name);
}