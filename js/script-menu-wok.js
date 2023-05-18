// Объявление цен на позиции меню

const wokChikenPrice = document.querySelector ('.menu-wok-chiken-price');
const wokBeefPrice = document.querySelector ('.menu-wok-beef-price');
const wokSeafoodPrice = document.querySelector ('.menu-wok-seafood-price');
const wokChikenPriceMobile = document.querySelector ('.menu-mobile-wok-chiken-price');
const wokBeefPriceMobile = document.querySelector ('.menu-mobile-wok-beef-price');
const wokSeafoodPriceMobile = document.querySelector ('.menu-mobile-wok-seafood-price');

let priceWokChiken = 320;
let priceWokBeef = 350;
let priceWokSeafood= 400;

function priceWok() {
    wokChikenPrice.innerHTML = `<p>${priceWokChiken} руб.<p>`;
    wokBeefPrice.innerHTML = `<p>${priceWokBeef} руб.<p>`;
    wokSeafoodPrice.innerHTML = `<p>${priceWokSeafood} руб.<p>`;
    wokChikenPrice.innerHTML = `<p>${priceWokChiken} руб.<p>`;
    wokBeefPrice.innerHTML = `<p>${priceWokBeef} руб.<p>`;
    wokSeafoodPrice.innerHTML = `<p>${priceWokSeafood} руб.<p>`;
}

priceWok();

// Блок меню Wok с цыпленком

const wokChikenMinus = document.querySelector ('.wok-chiken-minus');
const wokChikenPlus = document.querySelector ('.wok-chiken-plus');
const wokChikenNumber = document.querySelector ('.wok-chiken-number');
const wokChikenOrder = document.querySelector ('.wok-chiken-order'); 
let numberWokChiken = 0;

wokChikenPlus.addEventListener('click', () => {
    numberWokChiken++;
    wokChikenNumber.innerHTML = `<p>${numberWokChiken}<p>`
});

wokChikenMinus.addEventListener('click', () => {
    if (numberWokChiken !== 0) {
        numberWokChiken--;
        wokChikenNumber.innerHTML = `<p>${numberWokChiken}<p>`
    } else {
        numberWokChiken = 0;
    }
});

wokChikenOrder.addEventListener('click', () => {
    if (numberWokChiken > 0) {
        alert(`Заказано Wok с цыпленком, количество - ${numberWokChiken}`);
        numberWokChiken = 0;
        wokChikenNumber.innerHTML = `<p>${numberWokChiken}<p>`
    } else {
        numberWokChiken = 0;
    }
});

// Блок меню Wok с говядиной

const wokBeefMinus = document.querySelector ('.wok-beef-minus');
const wokBeefPlus = document.querySelector ('.wok-beef-plus');
const wokBeefNumber = document.querySelector ('.wok-beef-number');
const wokBeefOrder = document.querySelector ('.wok-beef-order'); 
let numberWokBeef = 0;

wokBeefPlus.addEventListener('click', () => {
    numberWokBeef++;
    wokBeefNumber.innerHTML = `<p>${numberWokBeef}<p>`
});

wokBeefMinus.addEventListener('click', () => {
    if (numberWokBeef !== 0) {
        numberWokBeef--;
        wokBeefNumber.innerHTML = `<p>${numberWokBeef}<p>`
    } else {
        numberWokBeef = 0;
    }
});

wokBeefOrder.addEventListener('click', () => {
    if (numberWokBeef > 0) {
        alert(`Заказано Wok с говядиной, количество - ${numberWokBeef}`);
        numberWokBeef = 0;
        wokBeefNumber.innerHTML = `<p>${numberWokBeef}<p>`
    } else {
        numberWokBeef = 0;
    }
});

// Блок меню Wok с морепродуктами

const wokSeafoodMinus = document.querySelector ('.wok-seafood-minus');
const wokSeafoodPlus = document.querySelector ('.wok-seafood-plus');
const wokSeafoodNumber = document.querySelector ('.wok-seafood-number');
const wokSeafoodOrder = document.querySelector ('.wok-seafood-order'); 
let numberWokSeafood = 0;

wokSeafoodPlus.addEventListener('click', () => {
    numberWokSeafood++;
    wokSeafoodNumber.innerHTML = `<p>${numberWokSeafood}<p>`
});

wokSeafoodMinus.addEventListener('click', () => {
    if (numberWokSeafood !== 0) {
        numberWokSeafood--;
        wokSeafoodNumber.innerHTML = `<p>${numberWokSeafood}<p>`
    } else {
        numberWokSeafood = 0;
    }
});

wokSeafoodOrder.addEventListener('click', () => {
    if (numberWokSeafood > 0) {
        alert(`Заказано Wok с морепродуктами, количество - ${numberWokSeafood}`);
        numberWokSeafood = 0;
        wokSeafoodNumber.innerHTML = `<p>${numberWokSeafood}<p>`
    } else {
        numberWokSeafood = 0;
    }
});

// Блок меню Wok с цыпленком мобильная версия

const wokChikenMinusMobile = document.querySelector ('.wok-chiken-minus-mobile');
const wokChikenPlusMobile = document.querySelector ('.wok-chiken-plus-mobile');
const wokChikenNumberMobile = document.querySelector ('.wok-chiken-number-mobile');
const wokChikenOrderMobile = document.querySelector ('.wok-chiken-order-mobile'); 
let numberWokChikenMobile = 0;

wokChikenPlusMobile.addEventListener('click', () => {
    numberWokChikenMobile++;
    wokChikenNumberMobile.innerHTML = `<p>${numberWokChikenMobile}<p>`
});

wokChikenMinusMobile.addEventListener('click', () => {
    if (numberWokChikenMobile !== 0) {
        numberWokChikenMobile--;
        wokChikenNumberMobile.innerHTML = `<p>${numberWokChikenMobile}<p>`
    } else {
        numberWokChikenMobile = 0;
    }
});

wokChikenOrderMobile.addEventListener('click', () => {
    if (numberWokChikenMobile > 0) {
        alert(`Заказано Wok с цыпленком, количество - ${numberWokChikenMobile}`);
        numberWokChikenMobile = 0;
        wokChikenNumberMobile.innerHTML = `<p>${numberWokChikenMobile}<p>`
    } else {
        numberWokChikenMobile = 0;
    }
});

// Блок меню Wok с говядиной мобильная версия

const wokBeefMinusMobile = document.querySelector ('.wok-beef-minus-mobile');
const wokBeefPlusMobile = document.querySelector ('.wok-beef-plus-mobile');
const wokBeefNumberMobile = document.querySelector ('.wok-beef-number-mobile');
const wokBeefOrderMobile = document.querySelector ('.wok-beef-order-mobile'); 
let numberWokBeefMobile = 0;

wokBeefPlusMobile.addEventListener('click', () => {
    numberWokBeefMobile++;
    wokBeefNumberMobile.innerHTML = `<p>${numberWokBeefMobile}<p>`
});

wokBeefMinusMobile.addEventListener('click', () => {
    if (numberWokBeefMobile !== 0) {
        numberWokBeefMobile--;
        wokBeefNumberMobile.innerHTML = `<p>${numberWokBeefMobile}<p>`
    } else {
        numberWokBeefMobile = 0;
    }
});

wokBeefOrderMobile.addEventListener('click', () => {
    if (numberWokBeefMobile > 0) {
        alert(`Заказано Wok с говядиной, количество - ${numberWokBeefMobile}`);
        numberWokBeefMobile = 0;
        wokBeefNumberMobile.innerHTML = `<p>${numberWokBeefMobile}<p>`
    } else {
        numberWokBeefMobile = 0;
    }
});

// Блок меню Wok с морепродуктами мобильная версия

const wokSeafoodMinusMobile = document.querySelector ('.wok-seafood-minus-mobile');
const wokSeafoodPlusMobile = document.querySelector ('.wok-seafood-plus-mobile');
const wokSeafoodNumberMobile = document.querySelector ('.wok-seafood-number-mobile');
const wokSeafoodOrderMobile = document.querySelector ('.wok-seafood-order-mobile'); 
let numberWokSeafoodMobile = 0;

wokSeafoodPlusMobile.addEventListener('click', () => {
    numberWokSeafoodMobile++;
    wokSeafoodNumberMobile.innerHTML = `<p>${numberWokSeafoodMobile}<p>`
});

wokSeafoodMinusMobile.addEventListener('click', () => {
    if (numberWokSeafoodMobile !== 0) {
        numberWokSeafoodMobile--;
        wokSeafoodNumberMobile.innerHTML = `<p>${numberWokSeafoodMobile}<p>`
    } else {
        numberWokSeafoodMobile = 0;
    }
});

wokSeafoodOrderMobile.addEventListener('click', () => {
    if (numberWokSeafoodMobile > 0) {
        alert(`Заказано Wok с морепродуктами, количество - ${numberWokSeafoodMobile}`);
        numberWokSeafoodMobile = 0;
        wokSeafoodNumberMobile.innerHTML = `<p>${numberWokSeafoodMobile}<p>`
    } else {
        numberWokSeafoodMobile = 0;
    }
});