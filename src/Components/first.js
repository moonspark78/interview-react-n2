// foo();
// bar();

/* Question: que va t-il se passer que je décommente l'appele des 2 fonctions */
/* Cette fonction est initialisé au moment de la compilation seulement  */
function foo() {
    console.log("I'm function foo !");
}



/*  c'est une function expression, ie qu'il est lancer seulement quand l'interpréteur lis la ligne ; contrairement a la précedente on peut pas utiliser ce type de function avant quelle soit définit */

const bar = () => {
    console.log("I'm function bar !");

}