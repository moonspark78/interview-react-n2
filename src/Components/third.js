const person ={
    name: "Ram",
    age: "22",
};

/* on veut obtenir ca en OUTPUT:
[
    ["name", "Ram"]
    ["age", "22"]
]
*/

/* pour cela nous allons utiliser Object.entries()  c une méthode */

console.log(Object.entries(person));