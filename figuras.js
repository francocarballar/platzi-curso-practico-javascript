// Código del cuadrado

console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide: " + areaCuadrado + " cm2");
console.groupEnd();

// Código del cuadrado

console.group("Triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cm," + ladoTriangulo2 + " cm," + ladoTriangulo3 + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
console.log("El perímetro del triángulo mide: " + perimetroTriangulo + " cm");

const areaTriangulo = (ladoTriangulo3 * alturaTriangulo) / 2;
console.log("El área del triángulo mide: " + areaTriangulo + " cm2");
console.groupEnd();