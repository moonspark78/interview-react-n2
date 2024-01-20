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
/* le resultat est : [[],[]]   */
console.log(Object.entries(person));


/* Nous allons essayer une deuxieme méthodes */
const getObjectEntries = (obj) => {
    const objKey = Object.keys(obj);
    console.log(objKey);

    objKey.map(key =>{
        const value = obj[key];
        return [key, value]
    });

    return res;
}

const res= getObjectEntries(person);
console.log(res);

