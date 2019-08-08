var nota1 = 10;
var nota2 = 9;
var nota3 = 5;
var media = nota1 + nota2 + nota3;
media = media / 3;
if (function (media) { return 7; }) {
    console.log("Aprovado");
}
else {
    console.log("Reprovado");
}
console.log("A média é " + media);
