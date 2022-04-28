// Close results

const error = [...document.querySelectorAll('.error')];
const overlay = document.getElementById('overlay');
const body = document.body;
const resultIMG = document.getElementById('resultIMG');
const resultH2 = document.getElementById('resultH2');
const resultH4 = document.getElementById('resultH4');
function closeOverlay() {
    overlay.style = 'display: none';
    body.style = 'overflow-y: scroll; overflow-x: hidden;';
}

// Cálculo de descuento

const inputPrecio = document.getElementById('inputPrecio');
const inputDescuento = document.getElementById('inputDescuento');
const inputCupon = document.getElementById('inputCupon');
const errorPrecio = document.getElementById('error-precio');
const errorDescuento = document.getElementById('error-descuento');
const errorCupon = document.getElementById('error-cupon')
const promo10 = 90;
const promo20 = 180;
const promo30 = 270;
function calcularPrecioConDescuento(precio, descuento, cupon){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    if(cupon === 'promo10') {
        resultH4.innerHTML = 'El precio con descuento es $' + (precioConDescuento - promo10);
        overlay.style = 'display: block';
        body.style = 'overflow: hidden';
        resultIMG.src = './assets/icons/price.png';
        resultH2.innerHTML = 'Precio';
    } else if(cupon === 'promo20') {
        resultH4.innerHTML = 'El precio con descuento es $' + (precioConDescuento - promo20);
        overlay.style = 'display: block';
        body.style = 'overflow: hidden';
        resultIMG.src = './assets/icons/price.png';
        resultH2.innerHTML = 'Precio';
    } else if(cupon === 'promo30') {
        resultH4.innerHTML = 'El precio con descuento es $' + (precioConDescuento - promo30);
        overlay.style = 'display: block';
        body.style = 'overflow: hidden';
        resultIMG.src = './assets/icons/price.png';
        resultH2.innerHTML = 'Precio';
    } else if (cupon === ''){
        resultH4.innerHTML = 'El precio con descuento es $' + precioConDescuento;
        overlay.style = 'display: block';
        body.style = 'overflow: hidden';
        resultIMG.src = './assets/icons/price.png';
        resultH2.innerHTML = 'Precio';
    } else if (cupon !== 'promo10' && cupon !== 'promo20' && cupon !== 'promo30') {
        overlay.style = 'display: none';
        body.style = 'overflow-y: scroll; overflow-x: hidden;';
        error[2].style = 'display: block';
        errorCupon.innerHTML = 'Ingrese un cupón válido';
    } 
}
function calcularPrecioFinal(){
    const precio = Number(inputPrecio.value);
    const descuento = Number(inputDescuento.value);
    const cupon = inputCupon.value;
    if (precio === 0) {
        overlay.style = 'display: none';
        body.style = 'overflow-y: scroll; overflow-x: hidden;';
        error[0].style = 'display: block';
        errorPrecio.innerHTML = 'Ingrese un valor válido para el precio';
    } else if (descuento === 0){
        overlay.style = 'display: none';
        body.style = 'overflow-y: scroll; overflow-x: hidden;';
        error[1].style = 'display: block';
        errorDescuento.innerHTML = 'Ingrese un valor válido para hacer el descuento';
    } else {
        calcularPrecioConDescuento(precio, descuento, cupon);
    }
}

// Función hover en las tarjetas

const card1 = document.getElementById('card1');
const card1__div = document.querySelector('#card1 div');
const card1__h4 = document.querySelector('#card1 h4');
const card1__h2 = document.querySelector('#card1 h2');
const card1__p = document.querySelector('#card1 p');
const card1__img = document.querySelector('#card1 img');
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
    if(mouseover === card1 || mouseover === card1__div  || mouseover === card1__h4 || mouseover === card1__h2 || mouseover === card1__p ||  mouseover === card1__img) {
        card1.style = "background-color: var(--primary-color); border: none; height: 150px;";
        card1__img.style = "filter: invert(0);";
        card3.style = "background-color: var(--secondary-color); color: #FFFFFF;";
        card3__img.style = "filter: invert(1);";
        card4.style = "background-color: var(--secondary-color); color: #FFFFFF;";
        card4__img.style = "filter: invert(1);";
    } else if(mouseover === card3 || mouseover === card3__div  || mouseover === card3__h4 || mouseover === card3__h2 || mouseover === card3__p ||  mouseover === card3__img) {
        card3.style = "background-color: var(--primary-color); border: none; height: 150px;";
        card3__img.style = "filter: invert(0);";
        card1.style = "background-color: var(--secondary-color); color: #FFFFFF;";
        card1__img.style = "filter: invert(1);";
        card4.style = "background-color: var(--secondary-color); color: #FFFFFF;";
        card4__img.style = "filter: invert(1);";
    } else if(mouseover === card4 || mouseover === card4__div  || mouseover === card4__h4 || mouseover === card4__h2 || mouseover === card4__p ||  mouseover === card4__img) {
        card4.style = "background-color: var(--primary-color); border: none; height: 150px;";
        card4__img.style = "filter: invert(0);";
        card1.style = "background-color: var(--secondary-color); color: #FFFFFF;";
        card1__img.style = "filter: invert(1);";
        card3.style = "background-color: var(--secondary-color); color: #FFFFFF;";
        card3__img.style = "filter: invert(1);";
    } else {
        card1.style = "background-color: var(--primary-color); height: 125px;";
        card1__img.style = "filter: invert(0)";
        card3.style = "background-color: var(--primary-color); height: 125px;";
        card3__img.style = "filter: invert(0)";
        card4.style = "background-color: var(--primary-color); height: 125px;";
        card4__img.style = "filter: invert(0)";
    }
});

// Estilos del pié de página

const footer = document.querySelector('.footer');
footer.style = "top: 757px;";