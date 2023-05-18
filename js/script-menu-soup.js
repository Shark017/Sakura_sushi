// Объявление цен на позиции меню

const soupMisoPrice = document.querySelector ('.menu-soup-miso-price');
const soupRamenPrice = document.querySelector ('.menu-soup-ramen-price');
const soupTomYamPrice = document.querySelector ('.menu-soup-tom-yam-price');
const soupMisoPriceMobile = document.querySelector ('.menu-mobile-soup-miso-price');
const soupRamenPriceMobile = document.querySelector ('.menu-mobile-soup-ramen-price');
const soupTomYamPriceMobile = document.querySelector ('.menu-mobile-soup-tom-yam-price');

let priceSoupMiso = 230;
let priceSoupRamen = 350;
let priceSoupTomYam = 500;

function priceSoup() {
    soupMisoPrice.innerHTML = `<p>${priceSoupMiso} руб.<p>`;
    soupRamenPrice.innerHTML = `<p>${priceSoupRamen} руб.<p>`;
    soupTomYamPrice.innerHTML = `<p>${priceSoupTomYam} руб.<p>`;
    soupMisoPriceMobile.innerHTML = `<p>${priceSoupMiso} руб.<p>`;
    soupRamenPriceMobile.innerHTML = `<p>${priceSoupRamen} руб.<p>`;
    soupTomYamPriceMobile.innerHTML = `<p>${priceSoupTomYam} руб.<p>`;
}

priceSoup();

// Блок меню суп "Мисо"

const soupMisoMinus = document.querySelector ('.soup-miso-minus');
const soupMisoPlus = document.querySelector ('.soup-miso-plus');
const soupMisoNumber = document.querySelector ('.soup-miso-number');
const soupMisoOrder = document.querySelector ('.soup-miso-order'); 
let numberSoupMiso = 0;

soupMisoPlus.addEventListener('click', () => {
    numberSoupMiso++;
    soupMisoNumber.innerHTML = `<p>${numberSoupMiso}<p>`
});

soupMisoMinus.addEventListener('click', () => {
    if (numberSoupMiso !== 0) {
        numberSoupMiso--;
        soupMisoNumber.innerHTML = `<p>${numberSoupMiso}<p>`
    } else {
        numberSoupMiso = 0;
    }
});

soupMisoOrder.addEventListener('click', () => {
    if (numberSoupMiso > 0) {
        alert(`Заказано суп "Мисо", количество - ${numberSoupMiso}`);
        numberSoupMiso = 0;
        soupMisoNumber.innerHTML = `<p>${numberSoupMiso}<p>`
    } else {
        numberSoupMiso = 0;
    }
});

// Блок меню суп "Рамен"

const soupRamenMinus = document.querySelector ('.soup-ramen-minus');
const soupRamenPlus = document.querySelector ('.soup-ramen-plus');
const soupRamenNumber = document.querySelector ('.soup-ramen-number');
const soupRamenOrder = document.querySelector ('.soup-ramen-order'); 
let numberSoupRamen = 0;

soupRamenPlus.addEventListener('click', () => {
    numberSoupRamen++;
    soupRamenNumber.innerHTML = `<p>${numberSoupRamen}<p>`
});

soupRamenMinus.addEventListener('click', () => {
    if (numberSoupRamen !== 0) {
        numberSoupRamen--;
        soupRamenNumber.innerHTML = `<p>${numberSoupRamen}<p>`
    } else {
        numberSoupRamen = 0;
    }
});

soupRamenOrder.addEventListener('click', () => {
    if (numberSoupRamen > 0) {
        alert(`Заказано суп "Рамен", количество - ${numberSoupRamen}`);
        numberSoupRamen = 0;
        soupRamenNumber.innerHTML = `<p>${numberSoupRamen}<p>`
    } else {
        numberSoupRamen = 0;
    }
});

// Блок меню суп " Том Ям"

const soupTomYamMinus = document.querySelector ('.soup-tom-yam-minus');
const soupTomYamPlus = document.querySelector ('.soup-tom-yam-plus');
const soupTomYamNumber = document.querySelector ('.soup-tom-yam-number');
const soupTomYamOrder = document.querySelector ('.soup-tom-yam-order'); 
let numberSoupTomYam = 0;

soupTomYamPlus.addEventListener('click', () => {
    numberSoupTomYam++;
    soupTomYamNumber.innerHTML = `<p>${numberSoupTomYam}<p>`
});

soupTomYamMinus.addEventListener('click', () => {
    if (numberSoupTomYam !== 0) {
        numberSoupTomYam--;
        soupTomYamNumber.innerHTML = `<p>${numberSoupTomYam}<p>`
    } else {
        numberSoupTomYam = 0;
    }
});

soupTomYamOrder.addEventListener('click', () => {
    if (numberSoupTomYam > 0) {
        alert(`Заказано суп "Том Ям", количество - ${numberSoupTomYam}`);
        numberSoupTomYam = 0;
        soupTomYamNumber.innerHTML = `<p>${numberSoupTomYam}<p>`
    } else {
        numberSoupTomYam = 0;
    }
});

// Блок меню суп "Мисо" мобильная версия

const soupMisoMinusMobile = document.querySelector ('.soup-miso-minus-mobile');
const soupMisoPlusMobile = document.querySelector ('.soup-miso-plus-mobile');
const soupMisoNumberMobile  = document.querySelector ('.soup-miso-number-mobile');
const soupMisoOrderMobile = document.querySelector ('.soup-miso-order-mobile'); 
let numberSoupMisoMobile = 0;

soupMisoPlusMobile.addEventListener('click', () => {
    numberSoupMisoMobile++;
    soupMisoNumberMobile.innerHTML = `<p>${numberSoupMisoMobile}<p>`
});

soupMisoMinusMobile.addEventListener('click', () => {
    if (numberSoupMisoMobile !== 0) {
        numberSoupMisoMobile--;
        soupMisoNumberMobile.innerHTML = `<p>${numberSoupMisoMobile}<p>`
    } else {
        numberSoupMisoMobile = 0;
    }
});

soupMisoOrderMobile.addEventListener('click', () => {
    if (numberSoupMisoMobile > 0) {
        alert(`Заказано суп "Мисо", количество - ${numberSoupMisoMobile}`);
        numberSoupMisoMobile = 0;
        soupMisoNumberMobile.innerHTML = `<p>${numberSoupMisoMobile}<p>`
    } else {
        numberSoupMisoMobile = 0;
    }
});

// Блок меню суп "Рамен" мобильная версия

const soupRamenMinusMobile = document.querySelector ('.soup-ramen-minus-mobile');
const soupRamenPlusMobile = document.querySelector ('.soup-ramen-plus-mobile');
const soupRamenNumberMobile = document.querySelector ('.soup-ramen-number-mobile');
const soupRamenOrderMobile = document.querySelector ('.soup-ramen-order-mobile'); 
let numberSoupRamenMobile = 0;

soupRamenPlusMobile.addEventListener('click', () => {
    numberSoupRamenMobile++;
    soupRamenNumberMobile.innerHTML = `<p>${numberSoupRamenMobile}<p>`
});

soupRamenMinusMobile.addEventListener('click', () => {
    if (numberSoupRamenMobile !== 0) {
        numberSoupRamenMobile--;
        soupRamenNumberMobile.innerHTML = `<p>${numberSoupRamenMobile}<p>`
    } else {
        numberSoupRamenMobile = 0;
    }
});

soupRamenOrderMobile.addEventListener('click', () => {
    if (numberSoupRamenMobile > 0) {
        alert(`Заказано суп "Рамен", количество - ${numberSoupRamenMobile}`);
        numberSoupRamenMobile = 0;
        soupRamenNumberMobile.innerHTML = `<p>${numberSoupRamenMobile}<p>`
    } else {
        numberSoupRamenMobile = 0;
    }
});

// Блок меню суп " Том Ям" мобильная версия

const soupTomYamMinusMobile = document.querySelector ('.soup-tom-yam-minus-mobile');
const soupTomYamPlusMobile = document.querySelector ('.soup-tom-yam-plus-mobile');
const soupTomYamNumberMobile = document.querySelector ('.soup-tom-yam-number-mobile');
const soupTomYamOrderMobile = document.querySelector ('.soup-tom-yam-order-mobile'); 
let numberSoupTomYamMobile = 0;

soupTomYamPlusMobile.addEventListener('click', () => {
    numberSoupTomYamMobile++;
    soupTomYamNumberMobile.innerHTML = `<p>${numberSoupTomYamMobile}<p>`
});

soupTomYamMinusMobile.addEventListener('click', () => {
    if (numberSoupTomYamMobile !== 0) {
        numberSoupTomYamMobile--;
        soupTomYamNumberMobile.innerHTML = `<p>${numberSoupTomYamMobile}<p>`
    } else {
        numberSoupTomYamMobile = 0;
    }
});

soupTomYamOrderMobile.addEventListener('click', () => {
    if (numberSoupTomYamMobile > 0) {
        alert(`Заказано суп "Том Ям", количество - ${numberSoupTomYamMobile}`);
        numberSoupTomYamMobile = 0;
        soupTomYamNumberMobile.innerHTML = `<p>${numberSoupTomYamMobile}<p>`
    } else {
        numberSoupTomYamMobile = 0;
    }
});