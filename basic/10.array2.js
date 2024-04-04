const marvel_heros = ["Thor","Ironman","Spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros)
console.log('Concat: ',allHeros);

const all_new_heros = [...marvel_heros,...dc_heros]
console.log('Spread: ', all_new_heros);

const another_array = [1,2,3, [4,5,6],[7,8,[9,10]]]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Chaman"));
console.log(Array.from("Chaman"));
console.log(Array.from({name: "Koushik"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));