// Función hover en las tarjetas

const footer = document.querySelector('.footer');
const navWorks = document.querySelector('.nav-works');
const card1 = document.getElementById('card1');
const card1__div = document.querySelector('#card1 div');
const card1__h4 = document.querySelector('#card1 h4');
const card1__h2 = document.querySelector('#card1 h2');
const card1__p = document.querySelector('#card1 p');
const card1__img = document.querySelector('#card1 img');
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
if (window.innerWidth >= 1024) {
    navWorks.style = "flex-direction: column; align-items: flex-end; width: 500px; top: 0; right: 0;";
    card1.style = "width: 500px; height: 25vh;";
    card2.style = "width: 500px; height: 25vh;";
    card3.style = "width: 500px; height: 25vh;";
    card4.style = "width: 500px; height: 25vh;";
    footer.style = "top: 100vh; height: 25vh;";
}
document.addEventListener('mouseover', (e) => {
    const mouseover = e.target;
    console.log(mouseover);
    if (window.innerWidth >= 1024) {
        if(mouseover === card1 || mouseover === card1__div || mouseover === card1__h4 || mouseover === card1__h2 || mouseover === card1__p || mouseover === card1__img) {
            card1.style = "background-color: var(--primary-color); border: none; width: 600px; height: 30vh;";
            card1__img.style = "filter: invert(0)";
            card2.style = "background-color: var(--secondary-color); color: #FFFFFF; width: 500px; height: 25vh;";
            card2__img.style = "filter: invert(1)";
            card3.style = "background-color: var(--secondary-color); color: #FFFFFF; width: 500px; height: 25vh;";
            card3__img.style = "filter: invert(1);";
            card4.style = "background-color: var(--secondary-color); color: #FFFFFF; width: 500px; height: 25vh;";
            card4__img.style = "filter: invert(1);";
        } else if(mouseover === card2 || mouseover === card2__div  || mouseover === card2__h4 || mouseover === card2__h2 || mouseover === card2__p ||  mouseover === card2__img) {
            card2.style = "background-color: var(--primary-color); border: none; width: 600px; height: 30vh;";
            card2__img.style = "filter: invert(0)";
            card1.style = "background-color: var(--secondary-color); color: #FFFFFF; width: 500px; height: 25vh;";
            card1__img.style = "filter: invert(1)";
            card3.style = "background-color: var(--secondary-color); color: #FFFFFF; width: 500px; height: 25vh;";
            card3__img.style = "filter: invert(1);";
            card4.style = "background-color: var(--secondary-color); color: #FFFFFF; width: 500px; height: 25vh;";
            card4__img.style = "filter: invert(1);";
        } else if(mouseover === card3 || mouseover === card3__div  || mouseover === card3__h4 || mouseover === card3__h2 || mouseover === card3__p ||  mouseover === card3__img) {
            card3.style = "background-color: var(--primary-color); border: none; width: 600px; height: 30vh;";
            card3__img.style = "filter: invert(0)";
            card1.style = "background-color: var(--secondary-color); color: #FFFFFF; width: 500px; height: 25vh;";
            card1__img.style = "filter: invert(1)";
            card2.style = "background-color: var(--secondary-color); color: #FFFFFF; width: 500px; height: 25vh;";
            card2__img.style = "filter: invert(1);";
            card4.style = "background-color: var(--secondary-color); color: #FFFFFF; width: 500px; height: 25vh;";
            card4__img.style = "filter: invert(1);";
        } else if(mouseover === card4 || mouseover === card4__div  || mouseover === card4__h4 || mouseover === card4__h2 || mouseover === card4__p ||  mouseover === card4__img) {
            card4.style = "background-color: var(--primary-color); border: none; width: 600px; height: 30vh;";
            card4__img.style = "filter: invert(0)";
            card1.style = "background-color: var(--secondary-color); color: #FFFFFF; width: 500px; height: 25vh;";
            card1__img.style = "filter: invert(1)";
            card2.style = "background-color: var(--secondary-color); color: #FFFFFF; width: 500px; height: 25vh;";
            card2__img.style = "filter: invert(1);";
            card3.style = "background-color: var(--secondary-color); color: #FFFFFF; width: 500px; height: 25vh;";
            card3__img.style = "filter: invert(1);";
        } else {
            card1.style = "background-color: var(--primary-color); width: 500px; height: 25vh;";
            card1__img.style = "filter: invert(0)";
            card2.style = "background-color: var(--primary-color); width: 500px; height: 25vh;";
            card2__img.style = "filter: invert(0)";
            card3.style = "background-color: var(--primary-color); width: 500px; height: 25vh;";
            card3__img.style = "filter: invert(0)";
            card4.style = "background-color: var(--primary-color); width: 500px; height: 25vh;";
            card4__img.style = "filter: invert(0)";
        }
    } else {
        if(mouseover === card1 || mouseover === card1__h4 || mouseover === card1__h2 || mouseover === card1__p || mouseover === card1__img) {
            card1.style = "background-color: var(--primary-color); border: none; ";
            card1__img.style = "filter: invert(0)";
            card2.style = "background-color: var(--secondary-color); color: #FFFFFF; ";
            card2__img.style = "filter: invert(1)";
            card3.style = "background-color: var(--secondary-color); color: #FFFFFF; ";
            card3__img.style = "filter: invert(1);";
            card4.style = "background-color: var(--secondary-color); color: #FFFFFF; ";
            card4__img.style = "filter: invert(1);";
        } else if(mouseover === card2 || mouseover === card2__h4 || mouseover === card2__h2 || mouseover === card2__p ||  mouseover === card2__img) {
            card2.style = "background-color: var(--primary-color); border: none; ";
            card2__img.style = "filter: invert(0)";
            card1.style = "background-color: var(--secondary-color); color: #FFFFFF; ";
            card1__img.style = "filter: invert(1)";
            card3.style = "background-color: var(--secondary-color); color: #FFFFFF; ";
            card3__img.style = "filter: invert(1);";
            card4.style = "background-color: var(--secondary-color); color: #FFFFFF; ";
            card4__img.style = "filter: invert(1);";
        } else if(mouseover === card3 || mouseover === card3__h4 || mouseover === card3__h2 || mouseover === card3__p ||  mouseover === card3__img) {
            card3.style = "background-color: var(--primary-color); border: none; ";
            card3__img.style = "filter: invert(0)";
            card1.style = "background-color: var(--secondary-color); color: #FFFFFF; ";
            card1__img.style = "filter: invert(1)";
            card2.style = "background-color: var(--secondary-color); color: #FFFFFF; ";
            card2__img.style = "filter: invert(1);";
            card4.style = "background-color: var(--secondary-color); color: #FFFFFF; ";
            card4__img.style = "filter: invert(1);";
        } else if(mouseover === card4 || mouseover === card4__h4 || mouseover === card4__h2 || mouseover === card4__p ||  mouseover === card4__img) {
            card4.style = "background-color: var(--primary-color); border: none; ";
            card4__img.style = "filter: invert(0)";
            card1.style = "background-color: var(--secondary-color); color: #FFFFFF; ";
            card1__img.style = "filter: invert(1)";
            card2.style = "background-color: var(--secondary-color); color: #FFFFFF; ";
            card2__img.style = "filter: invert(1);";
            card3.style = "background-color: var(--secondary-color); color: #FFFFFF; ";
            card3__img.style = "filter: invert(1);";
        } else {
            card1.style = "background-color: var(--primary-color);";
            card1__img.style = "filter: invert(0)";
            card2.style = "background-color: var(--primary-color);";
            card2__img.style = "filter: invert(0)";
            card3.style = "background-color: var(--primary-color); ";
            card3__img.style = "filter: invert(0)";
            card4.style = "background-color: var(--primary-color);";
            card4__img.style = "filter: invert(0)";
    }
}});
