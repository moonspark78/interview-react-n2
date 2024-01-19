function getMultipleValues() {
    return 10;
    return 20;
}
/* Une fonction peut avoir qu'un seule return */
/* la solution a cela nous avons les generators */

const result = getMultipleValues();
console.log(result);

/* Si nous voulions plusieurs return il faut alors utiliser les generate function voici comment les déclarer : */
/* il faut rajouter une étoile et utiliser la méthode next */

function* getMultipleValue() {
    yield 10;
    yield 20;
}

const results = getMultipleValues();
console.log(results.next());
console.log(results.next());