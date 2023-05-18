// Объявление цен на позиции меню

const saladGreecePrice = document.querySelector ('.menu-salad-greece-price');
const saladCaesarShrimpPrice = document.querySelector ('.menu-salad-caesar-shrimp-price');
const saladSaladCaesarPrice = document.querySelector ('.menu-salad-caesar-chiken-price');
const saladGreecePriceMobile = document.querySelector ('.menu-mobile-salad-greece-price');
const saladCaesarShrimpPriceMobile = document.querySelector ('.menu-mobile-salad-caesar-shrimp-price');
const saladSaladCaesarPriceMobile = document.querySelector ('.menu-mobile-salad-caesar-chiken-price');

let priceSaladGreece = 250;
let priceSaladCaesarShrimp = 380;
let priceSaladCaesarChiken = 320;

function priceSoup() {
    saladGreecePrice.innerHTML = `<p>${priceSaladGreece} руб.<p>`;
    saladCaesarShrimpPrice.innerHTML = `<p>${priceSaladCaesarShrimp} руб.<p>`;
    saladSaladCaesarPrice.innerHTML = `<p>${priceSaladCaesarChiken} руб.<p>`;
    saladGreecePriceMobile.innerHTML = `<p>${priceSaladGreece} руб.<p>`;
    saladCaesarShrimpPriceMobile.innerHTML = `<p>${priceSaladCaesarShrimp} руб.<p>`;
    saladSaladCaesarPriceMobile.innerHTML = `<p>${priceSaladCaesarChiken} руб.<p>`;
}

priceSoup();

// Блок меню салат "Греческий"

const saladGreeceMinus = document.querySelector ('.salad-greece-minus');
const saladGreecePlus = document.querySelector ('.salad-greece-plus');
const saladGreeceNumber = document.querySelector ('.salad-greece-number');
const saladGreeceOrder = document.querySelector ('.salad-greece-order'); 
let numberSaladGreece = 0;

saladGreecePlus.addEventListener('click', () => {
    numberSaladGreece++;
    saladGreeceNumber.innerHTML = `<p>${numberSaladGreece}<p>`
});

saladGreeceMinus.addEventListener('click', () => {
    if (numberSaladGreece !== 0) {
        numberSaladGreece--;
        saladGreeceNumber.innerHTML = `<p>${numberSaladGreece}<p>`
    } else {
        numberSaladGreece = 0;
    }
});

saladGreeceOrder.addEventListener('click', () => {
    if (numberSaladGreece > 0) {
        alert(`Заказано салат "Греческий", количество - ${numberSaladGreece}`);
        numberSaladGreece = 0;
        saladGreeceNumber.innerHTML = `<p>${numberSaladGreece}<p>`
    } else {
        numberRollBostonMobile = 0;
    }
});

// Блок меню салат "Цезарь с креветками"

const saladCaesarShrimpMinus = document.querySelector ('.salad-caesar-shrimp-minus');
const saladCaesarShrimpPlus = document.querySelector ('.salad-caesar-shrimp-plus');
const saladCaesarShrimpNumber = document.querySelector ('.salad-caesar-shrimp-number');
const saladCaesarShrimpOrder = document.querySelector ('.salad-caesar-shrimp-order'); 
let numberSaladCaesarShrimp = 0;

saladCaesarShrimpPlus.addEventListener('click', () => {
    numberSaladCaesarShrimp++;
    saladCaesarShrimpNumber.innerHTML = `<p>${numberSaladCaesarShrimp}<p>`
});

saladCaesarShrimpMinus.addEventListener('click', () => {
    if (numberSaladCaesarShrimp !== 0) {
        numberSaladCaesarShrimp--;
        saladCaesarShrimpNumber.innerHTML = `<p>${numberSaladCaesarShrimp}<p>`
    } else {
        numberSaladCaesarShrimp = 0;
    }
});

saladCaesarShrimpOrder.addEventListener('click', () => {
    if (numberSaladCaesarShrimp > 0) {
        alert(`Заказано салат "Цезарь с креветками", количество - ${numberSaladCaesarShrimp}`);
        numberSaladCaesarShrimp = 0;
        saladCaesarShrimpNumber.innerHTML = `<p>${numberSaladCaesarShrimp}<p>`
    } else {
        numberSaladCaesarShrimp = 0;
    }
});

// Блок меню салат "Цезарь с курицей"

const saladCaesarChikenMinus = document.querySelector ('.salad-caesar-chiken-minus');
const saladCaesarChikenPlus = document.querySelector ('.salad-caesar-chiken-plus');
const saladCaesarChikenNumber = document.querySelector ('.salad-caesar-chiken-number');
const saladCaesarChikenOrder = document.querySelector ('.salad-caesar-chiken-order'); 
let numberSaladCaesarChiken = 0;

saladCaesarChikenPlus.addEventListener('click', () => {
    numberSaladCaesarChiken++;
    saladCaesarChikenNumber.innerHTML = `<p>${numberSaladCaesarChiken}<p>`
});

saladCaesarChikenMinus.addEventListener('click', () => {
    if (numberSaladCaesarChiken !== 0) {
        numberSaladCaesarChiken--;
        saladCaesarChikenNumber.innerHTML = `<p>${numberSaladCaesarChiken}<p>`
    } else {
        numberSaladCaesarChiken = 0;
    }
});

saladCaesarChikenOrder.addEventListener('click', () => {
    if (numberSaladCaesarChiken > 0) {
        alert(`Заказано салат "Цезарь с курицей", количество - ${numberSaladCaesarChiken}`);
        numberSaladCaesarChiken = 0;
        saladCaesarChikenNumber.innerHTML = `<p>${numberSaladCaesarChiken}<p>`
    } else {
        numberSaladCaesarChiken = 0;
    }
});

// Блок меню салат "Греческий" мобильная версия

const saladGreeceMinusMobile = document.querySelector ('.salad-greece-minus-mobile');
const saladGreecePlusMobile = document.querySelector ('.salad-greece-plus-mobile');
const saladGreeceNumberMobile = document.querySelector ('.salad-greece-number-mobile');
const saladGreeceOrderMobile = document.querySelector ('.salad-greece-order-mobile'); 
let numberSaladGreeceMobile = 0;

saladGreecePlusMobile.addEventListener('click', () => {
    numberSaladGreeceMobile++;
    saladGreeceNumberMobile.innerHTML = `<p>${numberSaladGreeceMobile}<p>`
});

saladGreeceMinusMobile.addEventListener('click', () => {
    if (numberSaladGreeceMobile !== 0) {
        numberSaladGreeceMobile--;
        saladGreeceNumberMobile.innerHTML = `<p>${numberSaladGreeceMobile}<p>`
    } else {
        numberSaladGreeceMobile = 0;
    }
});

saladGreeceOrderMobile.addEventListener('click', () => {
    if (numberSaladGreeceMobile > 0) {
        alert(`Заказано салат "Греческий", количество - ${numberSaladGreeceMobile}`);
        numberSaladGreeceMobile = 0;
        saladGreeceNumberMobile.innerHTML = `<p>${numberSaladGreeceMobile}<p>`
    } else {
        numberSaladGreeceMobile = 0;
    }
});

// Блок меню салат "Цезарь с креветками" мобильная версия

const saladCaesarShrimpMinusMobile = document.querySelector ('.salad-caesar-shrimp-minus-mobile');
const saladCaesarShrimpPlusMobile = document.querySelector ('.salad-caesar-shrimp-plus-mobile');
const saladCaesarShrimpNumberMobile = document.querySelector ('.salad-caesar-shrimp-number-mobile');
const saladCaesarShrimpOrderMobile = document.querySelector ('.salad-caesar-shrimp-order-mobile'); 
let numberSaladCaesarShrimpMobile = 0;

saladCaesarShrimpPlusMobile.addEventListener('click', () => {
    numberSaladCaesarShrimpMobile++;
    saladCaesarShrimpNumberMobile.innerHTML = `<p>${numberSaladCaesarShrimpMobile}<p>`
});

saladCaesarShrimpMinusMobile.addEventListener('click', () => {
    if (numberSaladCaesarShrimpMobile !== 0) {
        numberSaladCaesarShrimpMobile--;
        saladCaesarShrimpNumberMobile.innerHTML = `<p>${numberSaladCaesarShrimpMobile}<p>`
    } else {
        numberSaladCaesarShrimpMobile = 0;
    }
});

saladCaesarShrimpOrderMobile.addEventListener('click', () => {
    if (numberSaladCaesarShrimpMobile > 0) {
        alert(`Заказано салат "Цезарь с креветками", количество - ${numberSaladCaesarShrimpMobile}`);
        numberSaladCaesarShrimpMobile = 0;
        saladCaesarShrimpNumberMobile.innerHTML = `<p>${numberSaladCaesarShrimpMobile}<p>`
    } else {
        numberSaladCaesarShrimpMobile = 0;
    }
});

// Блок меню салат "Цезарь с курицей" мобильная версия

const saladCaesarChikenMinusMobile = document.querySelector ('.salad-caesar-chiken-minus-mobile');
const saladCaesarChikenPlusMobile = document.querySelector ('.salad-caesar-chiken-plus-mobile');
const saladCaesarChikenNumberMobile = document.querySelector ('.salad-caesar-chiken-number-mobile');
const saladCaesarChikenOrderMobile = document.querySelector ('.salad-caesar-chiken-order-mobile');
let numberSaladCaesarChikenMobile = 0;

saladCaesarChikenPlusMobile.addEventListener('click', () => {
    numberSaladCaesarChikenMobile++;
    saladCaesarChikenNumberMobile.innerHTML = `<p>${numberSaladCaesarChikenMobile}<p>`
});

saladCaesarChikenMinusMobile.addEventListener('click', () => {
    if (numberSaladCaesarChikenMobile !== 0) {
        numberSaladCaesarChikenMobile--;
        saladCaesarChikenNumberMobile.innerHTML = `<p>${numberSaladCaesarChikenMobile}<p>`
    } else {
        numberSaladCaesarChikenMobile = 0;
    }
});

saladCaesarChikenOrderMobile.addEventListener('click', () => {
    if (numberSaladCaesarChikenMobile > 0) {
        alert(`Заказано салат "Цезарь с курицей", количество - ${numberSaladCaesarChikenMobile}`);
        numberSaladCaesarChikenMobile = 0;
        saladCaesarChikenNumberMobile.innerHTML = `<p>${numberSaladCaesarChikenMobile}<p>`
    } else {
        numberSaladCaesarChikenMobile = 0;
    }
});