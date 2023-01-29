// const subscriberBox = document.getElementById('subBox');
let wasClicked = false;

//Função de clicar na seta e descer para próxima sessão
function arrowDownClick() {

    document.getElementById('section2').scrollIntoView();
}


//Funções de clicar no checkbox de ser assinante
document.getElementById('subBox').onclick = function() {
    let imgNoCheck = './asset/check-icon-mobile.png';
    let imgChecked = './asset/check-icon-mobile-checked.png';

    if(this.getAttribute('src') == imgNoCheck) {
       this.setAttribute('src', imgChecked);
    } else {
        this.setAttribute('src', imgNoCheck);
    }
}

document.getElementById('subBox2').onclick = function() {
    let imgNoCheck = './asset/check-icon-mobile.png';
    let imgChecked = './asset/check-icon-mobile-checked.png';

    if(this.getAttribute('src') == imgNoCheck) {
       this.setAttribute('src', imgChecked);
    } else {
        this.setAttribute('src', imgNoCheck);
    }
}

// const button6 = document.getElementById('button6');
// const button3 = document.getElementById('button3');
// const button1 = document.getElementById('button1');
// const pricePerBox = document.querySelectorAll('.pricePerBox');
// const eco = document.querySelectorAll('.eco');
// const installments = document.querySelectorAll('.installments');
// const incash = document.querySelectorAll('.inCash');


// button6.addEventListener('click', function(){
//     button6.classList.add('isActive');
//     button3.classList.remove('isActive');
//     button1.classList.remove('isActive');

//     pricePerBox[0].innerHTML = 'R$ 135,60 por caixa';
//     eco[0].innerHTML = 'Economize R$ 350,40'
//     installments[0].innerHTML = '<b>HOJE:</b> 12x <b>R$ 75,60</b>'
//     incash[0].innerHTML = 'ou R$ 813,60 à vista';
// })

// button1.addEventListener('click', function(){
//     button1.classList.add('isActive');
//     button3.classList.remove('isActive');
//     button6.classList.remove('isActive');

//     pricePerBox[0].innerHTML = 'R$ 194,00 por caixa';
//     eco[0].innerHTML = 'Economize comprando mais'
//     installments[0].innerHTML = '<b>HOJE:</b> 12x <b>R$ 19,40</b>'
//     incash[0].innerHTML = 'ou R$ 194,00 à vista';
// })

// button3.addEventListener('click', function(){
//     button3.classList.add('isActive');
//     button6.classList.remove('isActive');
//     button1.classList.remove('isActive');

//     pricePerBox[0].innerHTML = 'R$ 148,60 por caixa';
//     eco[0].innerHTML = 'Economize R$ 136,20'
//     installments[0].innerHTML = '<b>HOJE:</b> 12x <b>R$ 49,99</b>'
//     incash[0].innerHTML = 'ou R$ 445,80 à vista';
// })


// const button61 = document.getElementById('button6-1');
// const button31 = document.getElementById('button3-1');
// const button11 = document.getElementById('button1-1');


// button61.addEventListener('click', function(){
//     button61.classList.add('isActive');
//     button31.classList.remove('isActive');
//     button11.classList.remove('isActive');

//     pricePerBox[1].innerHTML = 'R$ 135,60 por caixa';
//     eco[1].innerHTML = 'Economize R$ 350,40'
//     installments[1].innerHTML = '<b>HOJE:</b> 12x <b>R$ 75,60</b>'
//     incash[1].innerHTML = 'ou R$ 813,60 à vista';
// })

// button11.addEventListener('click', function(){
//     button11.classList.add('isActive');
//     button31.classList.remove('isActive');
//     button61.classList.remove('isActive');

//     pricePerBox[1].innerHTML = 'R$ 194,00 por caixa';
//     eco[1].innerHTML = 'Economize comprando mais'
//     installments[1].innerHTML = '<b>HOJE:</b> 12x <b>R$ 19,40</b>'
//     incash[1].innerHTML = 'ou R$ 194,00 à vista';
// })

// button31.addEventListener('click', function(){
//     button31.classList.add('isActive');
//     button61.classList.remove('isActive');
//     button11.classList.remove('isActive');

//     pricePerBox[1].innerHTML = 'R$ 148,60 por caixa';
//     eco[1].innerHTML = 'Economize R$ 136,20'
//     installments[1].innerHTML = '<b>HOJE:</b> 12x <b>R$ 49,99</b>'
//     incash[1].innerHTML = 'ou R$ 445,80 à vista';
// })


// const bteste = document.querySelectorAll('.box6')

// for(let i = 0; i < bteste.length; i++) {
//     bteste[i].addEventListener('click', function(){
//         console.log('fon')
//     })
// }


const button6 = document.querySelectorAll('.box6');
const button3 = document.querySelectorAll('.box3');
const button1 = document.querySelectorAll('.box1');
const pricePerBox = document.querySelectorAll('.pricePerBox');
const eco = document.querySelectorAll('.eco');
const installments = document.querySelectorAll('.installments');
const incash = document.querySelectorAll('.inCash');

for(let i = 0; i < button6.length; i++) {
    button6[i].addEventListener('click', function(){
        button6[i].classList.add('isActive');
        button3[i].classList.remove('isActive');
        button1[i].classList.remove('isActive');
    
        pricePerBox[i].innerHTML = 'R$ 135,60 por caixa';
        eco[i].innerHTML = 'Economize R$ 350,40'
        installments[i].innerHTML = '<b>HOJE:</b> 12x <b>R$ 75,60</b>'
        incash[i].innerHTML = 'ou R$ 813,60 à vista';
    })
}

for(let i = 0; i < button1.length; i++) {

    button1[i].addEventListener('click', function(){
        button1[i].classList.add('isActive');
        button3[i].classList.remove('isActive');
        button6[i].classList.remove('isActive');
    
        pricePerBox[i].innerHTML = 'R$ 194,00 por caixa';
        eco[i].innerHTML = 'Economize comprando mais'
        installments[i].innerHTML = '<b>HOJE:</b> 12x <b>R$ 19,40</b>'
        incash[i].innerHTML = 'ou R$ 194,00 à vista';
    })
    
}

for(let i = 0; i < button3.length; i++) {

    button3[i].addEventListener('click', function(){
        button3[i].classList.add('isActive');
        button6[i].classList.remove('isActive');
        button1[i].classList.remove('isActive');
    
        pricePerBox[i].innerHTML = 'R$ 148,60 por caixa';
        eco[i].innerHTML = 'Economize R$ 136,20'
        installments[i].innerHTML = '<b>HOJE:</b> 12x <b>R$ 49,99</b>'
        incash[i].innerHTML = 'ou R$ 445,80 à vista';
    })
    
}


// const button61 = document.getElementById('button6-1');
// const button31 = document.getElementById('button3-1');
// const button11 = document.getElementById('button1-1');


// button61.addEventListener('click', function(){
//     button61.classList.add('isActive');
//     button31.classList.remove('isActive');
//     button11.classList.remove('isActive');

//     pricePerBox[1].innerHTML = 'R$ 135,60 por caixa';
//     eco[1].innerHTML = 'Economize R$ 350,40'
//     installments[1].innerHTML = '<b>HOJE:</b> 12x <b>R$ 75,60</b>'
//     incash[1].innerHTML = 'ou R$ 813,60 à vista';
// })

// button11.addEventListener('click', function(){
//     button11.classList.add('isActive');
//     button31.classList.remove('isActive');
//     button61.classList.remove('isActive');

//     pricePerBox[1].innerHTML = 'R$ 194,00 por caixa';
//     eco[1].innerHTML = 'Economize comprando mais'
//     installments[1].innerHTML = '<b>HOJE:</b> 12x <b>R$ 19,40</b>'
//     incash[1].innerHTML = 'ou R$ 194,00 à vista';
// })

// button31.addEventListener('click', function(){
//     button31.classList.add('isActive');
//     button61.classList.remove('isActive');
//     button11.classList.remove('isActive');

//     pricePerBox[1].innerHTML = 'R$ 148,60 por caixa';
//     eco[1].innerHTML = 'Economize R$ 136,20'
//     installments[1].innerHTML = '<b>HOJE:</b> 12x <b>R$ 49,99</b>'
//     incash[1].innerHTML = 'ou R$ 445,80 à vista';
// })