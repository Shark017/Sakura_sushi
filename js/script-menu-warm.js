// Объявление цен на позиции меню

const rollWarmTempurePrice = document.querySelector ('.menu-warm-roll-tempure-price');
const rollWarmTempureUnagiPrice = document.querySelector ('.menu-warm-roll-tempure-unagi-price');
const rollWarmTempureCaliforniaPrice = document.querySelector ('.menu-warm-roll-tempure-california-price');
const rollWarmTempurePriceMobile = document.querySelector ('.menu-mobile-warm-roll-tempure-price');
const rollWarmTempureUnagiPriceMobile = document.querySelector ('.menu-mobile-warm-roll-tempure-unagi-price');
const rollWarmTempureCaliforniaPriceMobile = document.querySelector ('.menu-mobile-warm-roll-tempure-california-price');

let priceWarmTempure = 450;
let priceWarmTempureUnagi = 450;
let priceWarmTempureCalifornia = 450;

function priceWarmRoll() {
    rollWarmTempurePrice.innerHTML = `<p>${priceWarmTempure} руб.<p>`;
    rollWarmTempureUnagiPrice.innerHTML = `<p>${priceWarmTempureUnagi} руб.<p>`;
    rollWarmTempureCaliforniaPrice.innerHTML = `<p>${priceWarmTempureCalifornia} руб.<p>`;
    rollWarmTempurePriceMobile.innerHTML = `<p>${priceWarmTempure} руб.<p>`;
    rollWarmTempureUnagiPriceMobile.innerHTML = `<p>${priceWarmTempureUnagi} руб.<p>`;
    rollWarmTempureCaliforniaPriceMobile.innerHTML = `<p>${priceWarmTempureCalifornia} руб.<p>`;
}

priceWarmRoll();

// Блок меню теплые роллы "Темпура"

const warmTempureMinus = document.querySelector ('.warm-roll-tempure-minus');
const warmTempurePlus = document.querySelector ('.warm-roll-tempure-plus');
const warmTempureNumber = document.querySelector ('.warm-roll-tempure-number');
const warmTempureOrder = document.querySelector ('.warm-roll-tempure-order'); 
let numberWarmTempure = 0;

warmTempurePlus.addEventListener('click', () => {
    numberWarmTempure++;
    warmTempureNumber.innerHTML = `<p>${numberWarmTempure}<p>`
});

warmTempureMinus.addEventListener('click', () => {
    if (numberWarmTempure !== 0) {
        numberWarmTempure--;
        warmTempureNumber.innerHTML = `<p>${numberWarmTempure}<p>`
    } else {
        numberWarmTempure = 0;
    }
});

warmTempureOrder.addEventListener('click', () => {
    if (numberWarmTempure > 0) {
        alert(`Заказано теплые роллы "Темпура", количество - ${numberWarmTempure}`);
        numberWarmTempure = 0;
        warmTempureNumber.innerHTML = `<p>${numberWarmTempure}<p>`
    } else {
        numberWarmTempure = 0;
    }
});

// Блок меню теплые роллы "Унаги темпура"

const warmTempureUnagiMinus = document.querySelector ('.warm-roll-tempure-unagi-minus');
const warmTempureUnagiPlus = document.querySelector ('.warm-roll-tempure-unagi-plus');
const warmTempureUnagiNumber = document.querySelector ('.warm-roll-tempure-unagi-number');
const warmTempureUnagiOrder = document.querySelector ('.warm-roll-tempure-unagi-order'); 
let numberWarmTempureUnagi = 0;

warmTempureUnagiPlus.addEventListener('click', () => {
    numberWarmTempureUnagi++;
    warmTempureUnagiNumber.innerHTML = `<p>${numberWarmTempureUnagi}<p>`
});

warmTempureUnagiMinus.addEventListener('click', () => {
    if (numberWarmTempureUnagi !== 0) {
        numberWarmTempureUnagi--;
        warmTempureUnagiNumber.innerHTML = `<p>${numberWarmTempureUnagi}<p>`
    } else {
        numberWarmTempureUnagi = 0;
    }
});

warmTempureUnagiOrder.addEventListener('click', () => {
    if (numberWarmTempureUnagi > 0) {
        alert(`Заказано теплые роллы "Унаги темпура", количество - ${numberWarmTempureUnagi}`);
        numberWarmTempureUnagi = 0;
        warmTempureUnagiNumber.innerHTML = `<p>${numberWarmTempureUnagi}<p>`
    } else {
        numberWarmTempureUnagi = 0;
    }
});

// Блок меню теплые роллы "Калифорния темпура"

const warmTempureCaliforniaMinus = document.querySelector ('.warm-roll-tempure-california-minus');
const warmTempureCaliforniaPlus = document.querySelector ('.warm-roll-tempure-california-plus');
const warmTempureCaliforniaNumber = document.querySelector ('.warm-roll-tempure-california-number');
const warmTempureCaliforniaOrder = document.querySelector ('.warm-roll-tempure-california-order'); 
let numberWarmTempureCalifornia= 0;

warmTempureCaliforniaPlus.addEventListener('click', () => {
    numberWarmTempureCalifornia++;
    warmTempureCaliforniaNumber.innerHTML = `<p>${numberWarmTempureCalifornia}<p>`
});

warmTempureCaliforniaMinus.addEventListener('click', () => {
    if (numberWarmTempureCalifornia !== 0) {
        numberWarmTempureCalifornia--;
        warmTempureCaliforniaNumber.innerHTML = `<p>${numberWarmTempureCalifornia}<p>`
    } else {
        numberWarmTempureCalifornia = 0;
    }
});

warmTempureCaliforniaOrder.addEventListener('click', () => {
    if (numberWarmTempureCalifornia > 0) {
        alert(`Заказано теплые роллы "Калифорния темпура", количество - ${numberWarmTempureCalifornia}`);
        numberWarmTempureCalifornia = 0;
        warmTempureCaliforniaNumber.innerHTML = `<p>${numberWarmTempureCalifornia}<p>`
    } else {
        numberWarmTempureCalifornia = 0;
    }
});

// Блок меню теплые роллы "Темпура" мобильная версия

const warmTempureMinusMobile = document.querySelector ('.warm-roll-tempure-minus-mobile');
const warmTempurePlusMobile = document.querySelector ('.warm-roll-tempure-plus-mobile');
const warmTempureNumberMobile = document.querySelector ('.warm-roll-tempure-number-mobile');
const warmTempureOrderMobile = document.querySelector ('.warm-roll-tempure-order-mobile'); 
let numberWarmTempureMobile = 0;

warmTempurePlusMobile.addEventListener('click', () => {
    numberWarmTempureMobile++;
    warmTempureNumberMobile.innerHTML = `<p>${numberWarmTempureMobile}<p>`
});

warmTempureMinusMobile.addEventListener('click', () => {
    if (numberWarmTempureMobile !== 0) {
        numberWarmTempureMobile--;
        warmTempureNumberMobile.innerHTML = `<p>${numberWarmTempureMobile}<p>`
    } else {
        numberWarmTempureMobile = 0;
    }
});

warmTempureOrderMobile.addEventListener('click', () => {
    if (numberWarmTempureMobile > 0) {
        alert(`Заказано теплые роллы "Темпура", количество - ${numberWarmTempureMobile}`);
        numberWarmTempureMobile = 0;
        warmTempureNumberMobile.innerHTML = `<p>${numberWarmTempureMobile}<p>`
    } else {
        numberWarmTempureMobile = 0;
    }
});

// Блок меню теплые роллы "Унаги темпура" мобильная версия

const warmTempureUnagiMinusMobile = document.querySelector ('.warm-roll-tempure-unagi-minus-mobile');
const warmTempureUnagiPlusMobile = document.querySelector ('.warm-roll-tempure-unagi-plus-mobile');
const warmTempureUnagiNumberMobile = document.querySelector ('.warm-roll-tempure-unagi-number-mobile');
const warmTempureUnagiOrderMobile = document.querySelector ('.warm-roll-tempure-unagi-order-mobile'); 
let numberWarmTempureUnagiMobile = 0;

warmTempureUnagiPlusMobile.addEventListener('click', () => {
    numberWarmTempureUnagiMobile++;
    warmTempureUnagiNumberMobile.innerHTML = `<p>${numberWarmTempureUnagiMobile}<p>`
});

warmTempureUnagiMinusMobile.addEventListener('click', () => {
    if (numberWarmTempureUnagiMobile !== 0) {
        numberWarmTempureUnagiMobile--;
        warmTempureUnagiNumberMobile.innerHTML = `<p>${numberWarmTempureUnagiMobile}<p>`
    } else {
        numberWarmTempureUnagiMobile = 0;
    }
});

warmTempureUnagiOrderMobile.addEventListener('click', () => {
    if (numberWarmTempureUnagiMobile > 0) {
        alert(`Заказано теплые роллы "Унаги темпура", количество - ${numberWarmTempureUnagiMobile}`);
        numberWarmTempureUnagiMobile = 0;
        warmTempureUnagiNumberMobile.innerHTML = `<p>${numberWarmTempureUnagiMobile}<p>`
    } else {
        numberWarmTempureUnagiMobile = 0;
    }
});

// Блок меню теплые роллы "Калифорния темпура" мобильная версия

const warmTempureCaliforniaMinusMobile = document.querySelector ('.warm-roll-tempure-california-minus-mobile');
const warmTempureCaliforniaPlusMobile = document.querySelector ('.warm-roll-tempure-california-plus-mobile');
const warmTempureCaliforniaNumberMobile = document.querySelector ('.warm-roll-tempure-california-number-mobile');
const warmTempureCaliforniaOrderMobile = document.querySelector ('.warm-roll-tempure-california-order-mobile'); 
let numberWarmTempureCaliforniaMobile= 0;

warmTempureCaliforniaPlusMobile.addEventListener('click', () => {
    numberWarmTempureCaliforniaMobile++;
    warmTempureCaliforniaNumberMobile.innerHTML = `<p>${numberWarmTempureCaliforniaMobile}<p>`
});

warmTempureCaliforniaMinusMobile.addEventListener('click', () => {
    if (numberWarmTempureCaliforniaMobile !== 0) {
        numberWarmTempureCaliforniaMobile--;
        warmTempureCaliforniaNumberMobile.innerHTML = `<p>${numberWarmTempureCaliforniaMobile}<p>`
    } else {
        numberWarmTempureCaliforniaMobile = 0;
    }
});

warmTempureCaliforniaOrderMobile.addEventListener('click', () => {
    if (numberWarmTempureCaliforniaMobile > 0) {
        alert(`Заказано теплые роллы "Калифорния темпура", количество - ${numberWarmTempureCaliforniaMobile}`);
        numberWarmTempureCaliforniaMobile = 0;
        warmTempureCaliforniaNumberMobile.innerHTML = `<p>${numberWarmTempureCaliforniaMobile}<p>`
    } else {
        numberWarmTempureCaliforniaMobile = 0;
    }
});