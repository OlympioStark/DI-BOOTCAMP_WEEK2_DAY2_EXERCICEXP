/* Exercice 1 */

let x = 5;
let y = 2;

if (x > y) {
    console.log("x is the biggest number");
} else {
    console.log("y is the biggest number")
}

/* Exercice 2 */

//1.
let newDog = "Chihuahua"

//2.
console.log(newDog.length);

//3.
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

//4.
if (newDog == "Chihuahua") {
    console.log("J'adore les chihuahuas, c'est ma race de chien préférée");
} else {
    console.log("Je m'en fous, je préfère les chats");
}

/* Exercice 3 */

//1.
let a = prompt("Entrez un nombre svp", );

//2.
if (a % 2 == 0) {
    console.log("a est pair");
} else {
    console.log("a est impair");
}

/* Exercice 4 */

//1.
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (users.length == 0) {
    console.log("Personne n'est en ligne");
} else if (users.length == 1) {
    console.log(`${users[0]} est en ligne`);
} else if (users.length == 2) {
    console.log(`${users[0]} et ${users[1]} sont en lignes`);
} else {
    console.log(`${users[0]}, ${users[1]} et ${users.length - 2}  sont en lignes`);
}