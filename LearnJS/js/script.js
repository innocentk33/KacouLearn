var name = "inno kacou";
var nameLength = name.length;
var xString = '12';
var xNumber = parseInt(xString); //conversion de nombre
/*
les parses
parseInt , Float, Double
*/
console.log(nameLength);
console.log(xNumber);
//Retrouver la postion d'un sous string
var postion = name.indexOf("kacou");
console.log(postion);
//Fontion replace
var newName = name.replace("inno", "kirito");
console.log(newName);
//concatenation
var string1 = 'salut';
var string2 = 'inno';
var myNewString = string1 + " " + string2;
console.log(myNewString);
// les operateurs
/** + - * / % x++ x-- x+=*/
// les booleens
var myBool = true;
console.log(myBool);
//les operateurs de comparaions
var x = 5;
myBool = (x === "5"); // le triple egale compare strictement meme avec le type de la variable
console.log(myBool);
myBool = (5 >= 12);
console.log(myBool);
myBool = (5 <= 12);
console.log(myBool);
var y = 12;
myBool = (x > 3 && y > 15);
console.log(myBool);
myBool = (x > 3 || y < 15);
console.log(myBool);
//Table de verite
console.log("------------Table de verite--------");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("---------------non-------------------");
console.log(!true);
console.log(!false);

console.log("---------------Les Conditions---------------");
var speed = 70;
if (speed < 80) {
    console.log("bonne vitesse");
} else if (speed < 100) {
    console.log("ralentir");
} else {
    console.log("trop vite");
}
console.log("---------------Le Switch---------------");
var choix = "red";
switch (choix) {
    case "blue":
        console.log("couleur blue choisi");
        break;
    case "red":
        console.log("la couleur de la passion");
        break;
    default:
        console.log("un arc en ciel");

}
console.log("---------------Les boucles---------------");
var nombreDeFois = 0;

while (nombreDeFois <= 2) {
    console.log(nombreDeFois);
    nombreDeFois++;
}
do {
    console.log(nombreDeFois);
    nombreDeFois++;
} while (nombreDeFois < 5);
/*
for(initialisation , condition , Mise a jour){

}*/
console.log("---------------Les Fonctions---------------");
var x = 9;
var y = 2;


function multiply(num1, num2) {
    VarableGblobale = 15; // on peu declarer une variable globale
    return num1 * num2;
}
console.log(multiply(x, y));

console.log("---------------Tableaux---------------");
var marqueDePc = ["dell", "asus", "apple"];
console.log(marqueDePc.length);
console.log(marqueDePc);
console.log(marqueDePc[1]);
//rajouter des valeurs a un tableau
marqueDePc.push("HP")
console.log(marqueDePc);
marqueDePc.pop();
//decouper
console.log("decouper");
var decoupe = marqueDePc.slice(0, 1);
console.log(marqueDePc.slice(0, 2));
//comme une collection peu prendre tout type de donnée
var myArray = [
    [0, "une valeur du array dans un array"], true, "Asus"
];
console.log(myArray[0][1]);
console.log("-------------Les objets---------------");
var dog = {
    name: "kissais",
    color: " white",
    age: 4
};
console.log(dog.age);
console.log("liste des proprietes d'un objet");
for (var proprietes in dog) {
    console.log(dog[proprietes]);
}
console.log("Objet construit");
var cat = new Object();
cat.name = "PoussyCat";
cat.age = 4;
cat.color = "grey";
cat.cri = function (number) {
    while (number > 0) {
        console.log("MIAAOUU!");
        number--;
    }

}
cat.cri(6);
console.log("------Fonction constructeur----");

function Cat(nameCat, color, age) {
    this.name = nameCat; // le this pointe vers l'instance qui sera créee
    this.color = color;
    this.age = age;

    this.cri = function () {
        console.log(this.name + "Miaou");
    }
}
var beerus = new Cat("Beerus", "violet", 600);
var zama = new Cat("Zama", "blue", 5);
console.log(beerus);
zama.cri();