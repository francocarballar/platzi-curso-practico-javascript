// Close results

const overlay = document.getElementById('overlay');
const body = document.body;
const resultIMG = document.getElementById('resultIMG');
const resultH2 = document.getElementById('resultH2');
const resultH4 = document.getElementById('resultH4');
function closeOverlay() {
    overlay.style = 'display: none';
    body.style = 'overflow-y: scroll; overflow-x: hidden;';
}

// Cálculo del cuadrado

function perimetroCuadrado (lado) {
    return lado * 4;
}
function areaCuadrado (lado) {
    return lado * lado;
} 

const inputCuadrado = document.getElementById('inputCuadrado');
const errorCuadrado = document.getElementById('error-cuadrado')
function calcularPerimetroCuadrado(){
    const lado = Number(inputCuadrado.value);
    const perimetro = perimetroCuadrado(lado);
    overlay.style = 'display: block';
    body.style = 'overflow: hidden';
    resultIMG.src = './assets/icons/square.png';
    resultH2.innerHTML = 'Cuadrado';
    resultH4.innerHTML = 'El perímetro del cuadrado es ' + perimetro + ' cm';
    inputCuadrado.value = '';
    errorCuadrado.innerHTML = ''
    if (lado === 0) {
        overlay.style = 'display: none';
        body.style = 'overflow-y: scroll; overflow-x: hidden;';
        errorCuadrado.innerHTML = 'Ingrese un valor válido para el lado';
    } else {
        errorCuadrado.innerHTML = '';
    }
}
function calcularAreaCuadrado() {
    const lado = Number(inputCuadrado.value);
    const area = areaCuadrado(lado);
    overlay.style = 'display: block';
    body.style = 'overflow: hidden';
    resultIMG.src = './assets/icons/square.png';
    resultH2.innerHTML = 'Cuadrado';
    resultH4.innerHTML = 'El área del cuadrado es ' + area + ' cm';
    inputCuadrado.value = '';
    errorCuadrado.innerHTML = ''
    if (lado === 0) {
        overlay.style = 'display: none';
        body.style = 'overflow-y: scroll; overflow-x: hidden;';
        errorCuadrado.innerHTML = 'Ingrese un valor válido para el lado';
    } else {
        errorCuadrado.innerHTML = '';
    }
}

// Cálculo del rectángulo

function perimetroRectangulo (lado1, lado2) {
    return (lado1 * 2) + (lado2 * 2);
}
function areaRectangulo (lado1, lado2) {
    return lado1 * lado2;
} 

const inputRectangulo1 = document.getElementById('inputRectangulo1');
const inputRectangulo2 = document.getElementById('inputRectangulo2');
const errorRectanguloLado1 = document.getElementById('error-rectangulo-L1');
const errorRectanguloLado2 = document.getElementById('error-rectangulo-L2');
function calcularPerimetroRectangulo(){
    const lado1 = Number(inputRectangulo1.value);
    const lado2 = Number(inputRectangulo2.value);
    const perimetro = perimetroRectangulo(lado1, lado2);
    overlay.style = 'display: block';
    body.style = 'overflow: hidden';
    resultIMG.src = './assets/icons/cube.png';
    resultH2.innerHTML = 'Rectángulo';
    resultH4.innerHTML = 'El perímetro del rectángulo es ' + perimetro + ' cm';
    inputCuadrado.value = '';
    errorRectanguloLado1.innerHTML = '';
    errorRectanguloLado2.innerHTML = '';
    if (lado1 === 0) {
        overlay.style = 'display: none';
        body.style = 'overflow-y: scroll; overflow-x: hidden;';
        errorRectanguloLado1.innerHTML = 'Ingrese un valor válido para el Lado A';
    } else if (lado2 === 0) {
        overlay.style = 'display: none';
        body.style = 'overflow-y: scroll; overflow-x: hidden;';
        errorRectanguloLado2.innerHTML = 'Ingrese un valor válido para el Lado B';
    } else {
        errorRectanguloLado1.innerHTML = '';
        errorRectanguloLado2.innerHTML = '';
    }
}
function calcularAreaRectangulo() {
    const lado1 = Number(inputRectangulo1.value);
    const lado2 = Number(inputRectangulo2.value);
    const area = areaRectangulo(lado1, lado2);
    overlay.style = 'display: block';
    body.style = 'overflow: hidden';
    resultIMG.src = './assets/icons/cube.png';
    resultH2.innerHTML = 'Rectángulo';
    resultH4.innerHTML = 'El área del rectángulo es ' + area + ' cm';
    inputCuadrado.value = '';
    errorRectanguloLado1.innerHTML = '';
    errorRectanguloLado2.innerHTML = '';
    if (lado1 === 0) {
        overlay.style = 'display: none';
        body.style = 'overflow-y: scroll; overflow-x: hidden;';
        errorRectanguloLado1.innerHTML = 'Ingrese un valor válido para el Lado A';
    } else if (lado2 === 0) {
        overlay.style = 'display: none';
        body.style = 'overflow-y: scroll; overflow-x: hidden;';
        errorRectanguloLado2.innerHTML = 'Ingrese un valor válido para el Lado B';
    } else {
        errorRectanguloLado1.innerHTML = '';
        errorRectanguloLado2.innerHTML = '';
    }
}

// Cálculo del triángulo

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo (base, altura){
    return (base * altura) / 2;
}

const inputTriangulo1 = document.getElementById('inputTriangulo1');
const inputTriangulo2 = document.getElementById('inputTriangulo2');
const inputBase = document.getElementById('inputBase');
const inputAltura = document.getElementById('inputAltura');
const errorTranguloLado1 = document.getElementById('error-triangulo-L1');
const errorTranguloLado2 = document.getElementById('error-triangulo-L2');
const errorTranguloBase = document.getElementById('error-triangulo-base');
const errorTranguloAltura = document.getElementById('error-triangulo-altura');
function calcularPerimetroTriangulo(){
    const lado1 = Number(inputTriangulo1.value);
    const lado2 = Number(inputTriangulo2.value);
    const base = Number(inputBase.value);
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    overlay.style = 'display: block';
    body.style = 'overflow: hidden';
    resultIMG.src = './assets/icons/triangle.png';
    resultH2.innerHTML = 'Triángulo';
    resultH4.innerHTML = 'El perímetro del triángulo es ' + perimetro + ' cm';
    inputTriangulo1.value = '';
    inputTriangulo2.value = '';
    inputBase.value = '';
    inputAltura.value = '';
    errorTranguloLado1.innerHTML = '';
    errorTranguloLado2.innerHTML = '';
    errorTranguloBase.innerHTML = '';
    errorTranguloAltura.innerHTML = '';
    if (lado1 === 0) {
        overlay.style = 'display: none';
        body.style = 'overflow-y: scroll; overflow-x: hidden;';
        errorTranguloLado1.innerHTML = 'Ingrese un valor válido para el Lado A';
    } else if(lado2 === 0){
        overlay.style = 'display: none';
        body.style = 'overflow-y: scroll; overflow-x: hidden;';
        errorTranguloLado2.innerHTML = 'Ingrese un valor válido para el Lado B';
    } else if(base === 0){
        overlay.style = 'display: none';
        body.style = 'overflow-y: scroll; overflow-x: hidden;';
        errorTranguloBase.innerHTML = 'Ingrese un valor válido para la base';
    } else if(altura === 0){
        overlay.style = 'display: none';
        body.style = 'overflow-y: scroll; overflow-x: hidden;';
        errorTranguloAltura.innerHTML = 'Ingrese un valor válido para la altura';
    } else {
        errorTranguloLado1.innerHTML = '';
        errorTranguloLado2.innerHTML = '';
        errorTranguloBase.innerHTML = '';
        errorTranguloAltura.innerHTML = '';
    }
}
function calcularAreaTriangulo() {
    const base = Number(inputBase.value);
    const altura = Number(inputAltura.value);
    const area = areaTriangulo(base, altura);
    overlay.style = 'display: block';
    body.style = 'overflow: hidden';
    resultIMG.src = './assets/icons/triangle.png';
    resultH2.innerHTML = 'Triángulo';
    resultH4.innerHTML = 'El área del triángulo es ' + area + ' cm';
    inputTriangulo1.value = '';
    inputTriangulo2.value = '';
    inputBase.value = '';
    inputAltura.value = '';
    errorTranguloLado1.innerHTML = '';
    errorTranguloLado2.innerHTML = '';
    errorTranguloBase.innerHTML = '';
    errorTranguloAltura.innerHTML = '';
    if(base === 0){
        overlay.style = 'display: none';
        body.style = 'overflow-y: scroll; overflow-x: hidden;';
        errorTranguloBase.innerHTML = 'Ingrese un valor válido para la base';
    } else if(altura === 0){
        overlay.style = 'display: none';
        body.style = 'overflow-y: scroll; overflow-x: hidden;';
        errorTranguloAltura.innerHTML = 'Ingrese un valor válido para la altura';
    } else {
        errorTranguloLado1.innerHTML = '';
        errorTranguloLado2.innerHTML = '';
        errorTranguloBase.innerHTML = '';
        errorTranguloAltura.innerHTML = '';
    }
}

// Cálculo del círculo

function diametroCirculo(radio) {
    return radio * 2;
}
const PI = Math.PI;
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

const inputCirculo = document.getElementById('inputCirculo');
const errorCirculo = document.getElementById('error-circulo')
function calcularPerimetroCirculo(){
    const radio = Number(inputCirculo.value);
    const perimetro = perimetroCirculo(radio);
    overlay.style = 'display: block';
    body.style = 'overflow: hidden';
    resultIMG.src = './assets/icons/circle.png';
    resultH2.innerHTML = 'Círculo';
    resultH4.innerHTML = 'El perímetro del círculo es ' + perimetro + ' cm';
    inputCirculo.value = '';
    errorCirculo.innerHTML = '';
    if(radio === 0){
        overlay.style = 'display: none';
        body.style = 'overflow-y: scroll; overflow-x: hidden;';
        errorCirculo.innerHTML = 'Ingrese un valor válido para el radio';
    } else {
        errorCirculo.innerHTML = '';
    }
}
function calcularAreaCirculo() {
    const radio = Number(inputCirculo.value);
    const area = areaCirculo(radio);
    overlay.style = 'display: block';
    body.style = 'overflow: hidden';
    resultIMG.src = './assets/icons/circle.png';
    resultH2.innerHTML = 'Círculo';
    resultH4.innerHTML = 'El área del círculo es ' + area + ' cm';
    inputCirculo.value = '';
    errorCirculo.innerHTML = '';
    if(radio === 0){
        overlay.style = 'display: none';
        body.style = 'overflow-y: scroll; overflow-x: hidden;';
        errorCirculo.innerHTML = 'Ingrese un valor válido para el radio';
    } else {
        errorCirculo.innerHTML = '';
    }
}
function calcularDiametroCirculo() {
    const radio = Number(inputCirculo.value);
    const diametro = diametroCirculo(radio);
    overlay.style = 'display: block';
    body.style = 'overflow: hidden';
    resultIMG.src = './assets/icons/circle.png';
    resultH2.innerHTML = 'Círculo';
    resultH4.innerHTML = 'El diámetro del círculo es ' + diametro + ' cm';
    inputCirculo.value = '';
    errorCirculo.innerHTML = '';
    if(radio === 0){
        overlay.style = 'display: none';
        body.style = 'overflow-y: scroll; overflow-x: hidden;';
        errorCirculo.innerHTML = 'Ingrese un valor válido para el radio';
    } else {
        errorCirculo.innerHTML = '';
    }
}

// Función hover en las tarjetas

const card2 = document.getElementById('card2');
const card2__div = document.querySelector('#card2 div');
const card2__h4 = document.querySelector('#card2 h4');
const card2__h2 = document.querySelector('#card2 h2');
const card2__p = document.querySelector('#card2 p');
const card2__img = document.querySelector('#card2 img');
const card3 = document.getElementById('card3');
const card3__div = document.querySelector('#card3 div');
const card3__h4 = document.querySelector('#card3 h4');
const card3__h2 = document.querySelector('#card3 h2');
const card3__p = document.querySelector('#card3 p');
const card3__img = document.querySelector('#card3 img');
const card4 = document.getElementById('card4');
const card4__div = document.querySelector('#card4 div');
const card4__h4 = document.querySelector('#card4 h4');
const card4__h2 = document.querySelector('#card4 h2');
const card4__p = document.querySelector('#card4 p');
const card4__img = document.querySelector('#card4 img');
document.addEventListener('mouseover', (e) => {
    const mouseover = e.target;
    if(mouseover === card2 || mouseover === card2__div  || mouseover === card2__h4 || mouseover === card2__h2 || mouseover === card2__p ||  mouseover === card2__img) {
        card2.style = "background-color: var(--primary-color); border: none; height: 150px;";
        card2__img.style = "filter: invert(0);";
        card3.style = "background-color: var(--secondary-color); color: #FFFFFF;";
        card3__img.style = "filter: invert(1);";
        card4.style = "background-color: var(--secondary-color); color: #FFFFFF;";
        card4__img.style = "filter: invert(1);";
    } else if(mouseover === card3 || mouseover === card3__div  || mouseover === card3__h4 || mouseover === card3__h2 || mouseover === card3__p ||  mouseover === card3__img) {
        card3.style = "background-color: var(--primary-color); border: none; height: 150px;";
        card3__img.style = "filter: invert(0);";
        card2.style = "background-color: var(--secondary-color); color: #FFFFFF;";
        card2__img.style = "filter: invert(1);";
        card4.style = "background-color: var(--secondary-color); color: #FFFFFF;";
        card4__img.style = "filter: invert(1);";
    } else if(mouseover === card4 || mouseover === card4__div  || mouseover === card4__h4 || mouseover === card4__h2 || mouseover === card4__p ||  mouseover === card4__img) {
        card4.style = "background-color: var(--primary-color); border: none; height: 150px;";
        card4__img.style = "filter: invert(0);";
        card2.style = "background-color: var(--secondary-color); color: #FFFFFF;";
        card2__img.style = "filter: invert(1);";
        card3.style = "background-color: var(--secondary-color); color: #FFFFFF;";
        card3__img.style = "filter: invert(1);";
    } else {
        card2.style = "background-color: var(--primary-color); height: 125px;";
        card2__img.style = "filter: invert(0)";
        card3.style = "background-color: var(--primary-color); height: 125px;";
        card3__img.style = "filter: invert(0)";
        card4.style = "background-color: var(--primary-color); height: 125px;";
        card4__img.style = "filter: invert(0)";
    }
});
