// ----------------------------
// Déclaration de variables
// ----------------------------
let userName = "JohnDoe";         // variable simple
const USER_AGE = 28;              // constante (valeur fixe)

// ******************************** LES OBJETS ********************************
// ----------------------------
// Création d'un objet
// ----------------------------
const user = {
    name: userName,               // affecte "JohnDoe" à la propriété name
    age: USER_AGE                 // affecte 28 à la propriété age
};

// ----------------------------
// Lecture des propriétés
// ----------------------------
console.log(user.name, user.age);             // Accès avec le point : JohnDoe 28
console.log(user['name'], user['age']);        // Accès avec des crochets : JohnDoe 28

// ----------------------------
// Ajout de nouvelles propriétés
// ----------------------------
user.city = 'New York';                       // Ajout direct
user['country'] = 'USA';               // Ajout avec crochets

console.log(user.city, user.country);          // New York USA
console.log(user['city'], user['country']);    // New York USA

// ----------------------------
// Modification d'une propriété
// ----------------------------
user.age = 29;                                 // Change l'âge de 28 à 29

console.log(user.age, USER_AGE);               // 29 28 (la constante USER_AGE n'a pas changé)
console.log(user['age']);                      // 29

// ----------------------------
// Suppression d'une propriété
// ----------------------------
delete user.age;                              // Supprime la propriété age

console.log(user.age);                        // undefined (n'existe plus)
console.log(user);                            // { name: 'JohnDoe', city: 'New York', country: 'USA' }

// ----------------------------
// Vérification d'existence d'une propriété
// ----------------------------
console.log('age' in user);                    // false (car supprimé)
console.log('name' in user);                   // true

// ----------------------------
// Parcourir toutes les propriétés de l'objet
// ----------------------------
for (let key in user) {
    console.log(key, user[key]);               // Affiche clé et valeur
}

// ----------------------------
// Récupérer uniquement les clés, valeurs ou entrées
// ----------------------------
console.log(Object.keys(user));                // ['name', 'city', 'country']
console.log(Object.values(user));              // ['JohnDoe', 'New York', 'USA']
console.log(Object.entries(user));             // [['name', 'JohnDoe'], ['city', 'New York'], ['country', 'USA']]

// ----------------------------
// Créer une copie indépendante de l'objet
// ----------------------------
let copieUser = { ...user };                   // Copie avec l'opérateur spread (...)

copieUser.city = "AnotherCity";                // Change uniquement la copie
console.log(user.city);                        // New York (original inchangé)
console.log(copieUser.city);                   // AnotherCity

// ----------------------------
// Geler un objet (empêcher toute modification)
// ----------------------------
Object.freeze(user);                           // Le gèle : plus aucune modification possible

user.city = "Los Angeles";                         // Impossible, reste New York
console.log(user.city);                        // New York

// ----------------------------
// Ajouter une méthode à un objet
// ----------------------------
const userWithMethod = {
    name: "JohnDoe",
    greet() {                                  // Fonction qui dit bonjour
        console.log(`Hello, my name is ${this.name}`);
    }
};

userWithMethod.greet();                        // Hello, my name is JohnDoe

// ----------------------------
// Fusionner plusieurs objets
// ----------------------------
const additionalInfo = { hobby: "Photography" };
const mergedUser = { ...user, ...additionalInfo }; // Fusionne deux objets

mergedUser.age = 30;                            // On ajoute une nouvelle propriété à mergedUser

console.log(mergedUser);
// Résultat final :
// {
//   name: 'JohnDoe',
//   city: 'New York',
//   country: 'USA',
//   hobby: 'Photography',
//   age: 30
// }

// ******************************** LES ARRAYS ********************************

// ----------------------------
// Création d'un array
// ----------------------------
let fruits = ['apple', 'banana', 'cherry'];

console.log(fruits); // ['apple', 'banana', 'cherry']

// ----------------------------
// Accéder aux éléments
// ----------------------------
console.log(fruits[0]); // 'apple'
console.log(fruits[1]); // 'banana'

// ----------------------------
// Modifier un élément
// ----------------------------
fruits[1] = 'blueberry';
console.log(fruits); // ['apple', 'blueberry', 'cherry']

// ----------------------------
// Ajouter un élément
// ----------------------------

// À la fin
fruits.push('date');
console.log(fruits); // ['apple', 'blueberry', 'cherry', 'date']

// Au début
fruits.unshift('avocado');
console.log(fruits); // ['avocado', 'apple', 'blueberry', 'cherry', 'date']

// À une position précise (insertion sans suppression)
fruits.splice(2, 0, 'blackberry');
console.log(fruits); // ['avocado', 'apple', 'blackberry', 'blueberry', 'cherry', 'date']

// ----------------------------
// Supprimer un élément
// ----------------------------

// À la fin
fruits.pop();
console.log(fruits); // ['avocado', 'apple', 'blackberry', 'blueberry', 'cherry']

// Au début
fruits.shift();
console.log(fruits); // ['apple', 'blackberry', 'blueberry', 'cherry']

// À une position précise
fruits.splice(1, 1); // Supprime 1 élément à l'index 1
console.log(fruits); // ['apple', 'blueberry', 'cherry']

// ----------------------------
// Trouver un élément
// ----------------------------
console.log(fruits.indexOf('cherry')); // 2
console.log(fruits.includes('apple')); // true car on cherche la valeur
console.log('apple' in fruits); // false car in cherche l'index

// ----------------------------
// Parcourir un array
// ----------------------------

// Avec for classique
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Avec for...of (plus simple)
for (let fruit of fruits) {
    console.log(fruit);
}

// Avec for...in (pour les index)
for (let index in fruits) {
    console.log(fruits[index]);
}

// Avec forEach
fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});

// ----------------------------
// Copier un array
// ----------------------------

// Avec spread
let fruitsCopy = [...fruits];
fruitsCopy.push('elderberry');
console.log(fruits);     // ['apple', 'blueberry', 'cherry']
console.log(fruitsCopy); // ['apple', 'blueberry', 'cherry', 'elderberry']

// ----------------------------
// Fusionner deux arrays
// ----------------------------
let vegetables = ['carrot', 'broccoli'];
let food = [...fruits, ...vegetables];

console.log(food);
// ['apple', 'blueberry', 'cherry', 'carrot', 'broccoli']

// ----------------------------
// Trier un array
// ----------------------------
let numbers = [42, 5, 12, 100, 3];
numbers.sort();           // ATTENTION : trie comme des strings
console.log(numbers);     // [12, 3, 42, 5, 100] (pas top)

// Corriger tri numérique
numbers.sort((a, b) => a - b);
console.log(numbers);     // [3, 5, 12, 42, 100]

// ----------------------------
// Inverser un array
// ----------------------------
numbers.reverse();
console.log(numbers); // [100, 42, 12, 5, 3]

// ----------------------------
// Autres méthodes utiles
// ----------------------------

// map : transformer chaque élément
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // ['APPLE', 'BLUEBERRY', 'CHERRY']

// filter : filtrer des éléments
let longNamedFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longNamedFruits); // ['blueberry', 'cherry']

// find : trouver le premier qui respecte une condition
let fruitFound = fruits.find(fruit => fruit.startsWith('b'));
console.log(fruitFound); // 'blueberry'


// ******************************** LES CONDITIONS ********************************

// Exemple 1 : Utilisation d'un if simple

let age = 20;

if (age >= 18) {
    console.log("Tu es majeur.");
} else {
    console.log("Tu es mineur.");
}

// Exemple 2 : Utilisation de else if pour tester plusieurs conditions

let heure = 14;

if (heure < 12) {
    console.log("Bonjour !");
} else if (heure < 18) {
    console.log("Bon après-midi !");
} else {
    console.log("Bonsoir !");
}

// Exemple 3 : Opérateurs de comparaison

let a = 10;
let b = 5;

if (a > b) {
    console.log("a est plus grand que b");
}

if (a === 10) {
    console.log("a est exactement égal à 10");
}

if (a !== b) {
    console.log("a et b ne sont pas égaux");
}

// Exemple 4 : Combinaison de conditions avec les opérateurs logiques (&&, ||)

let age = 25;
let hasTicket = true;

if (age >= 18 && hasTicket) {
    console.log("Tu peux entrer dans l'événement.");
} else {
    console.log("Tu ne peux pas entrer.");
}

let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
    console.log("Tu peux te reposer aujourd'hui.");
} else {
    console.log("C'est un jour de travail.");
}

// Exemple 5 : Utilisation de l'opérateur NOT "!"

let isRaining = false;

if (!isRaining) {
    console.log("Il fait beau, allons dehors !");
} else {
    console.log("Il pleut, restons à l'intérieur.");
}

// Exemple 6 : Test avec plusieurs conditions et else if
let temperature = 30;

if (temperature < 10) {
    console.log("Il fait froid, prends une veste !");
} else if (temperature >= 10 && temperature < 20) {
    console.log("Il fait frais, une veste légère suffira.");
} else if (temperature >= 20 && temperature < 30) {
    console.log("Il fait agréable, profite de la journée !");
} else {
    console.log("Il fait chaud, bois beaucoup d'eau !");
}

// Exemple 8 : Utilisation d'un switch (alternative au if-else)

let fruit = "pomme";

switch (fruit) {
    case "pomme":
        console.log("C'est une pomme !");
        break;
    case "banane":
        console.log("C'est une banane !");
        break;
    case "orange":
        console.log("C'est une orange !");
        break;
    default:
        console.log("Fruit inconnu.");
}

// Exemple 9 : Vérification de l'égalité de type avec ===

let x = "10";
let y = 10;

if (x === y) {
    console.log("x et y sont égaux en valeur et en type.");
} else {
    console.log("x et y ne sont pas égaux en type ou en valeur.");
}

// Exemple 10 : Boucle while (s'exécute tant que la condition est vraie)

let i = 1;
while (i <= 5) {
    console.log(i);
    i++; // Incrémenter i pour éviter une boucle infinie
}

// Exemple 11 : Boucle do-while (le code est exécuté au moins une fois)

let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);


