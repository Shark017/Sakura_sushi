// Объявление цен на позиции меню

const sashimiSakePrice = document.querySelector ('.menu-sashimi-sake-price');
const sashimiIkaPrice = document.querySelector ('.menu-sashimi-ika-price');
const sashimiMaguroPrice = document.querySelector ('.menu-sashimi-maguro-price');
const sashimiTakoPrice = document.querySelector ('.menu-sashimi-Tako-price');
const sashimiSakePriceMobile = document.querySelector ('.menu-mobile-sashimi-sake-price');
const sashimiIkaPriceMobile = document.querySelector ('.menu-mobile-sashimi-ika-price');
const sashimiMaguroPriceMobile = document.querySelector ('.menu-mobile-sashimi-maguro-price');
const sashimiTakoPriceMobile = document.querySelector ('.menu-mobile-sashimi-Tako-price');

let priceSashimiSake = 380;
let priceSashimiIka = 380;
let priceSashimiMaguro = 380;
let priceSashimiTako = 380;

function priceSashimi() {
    sashimiSakePrice.innerHTML = `<p>${priceSashimiSake} руб.<p>`;
    sashimiIkaPrice.innerHTML = `<p>${priceSashimiIka} руб.<p>`;
    sashimiMaguroPrice.innerHTML = `<p>${priceSashimiMaguro} руб.<p>`;
    sashimiTakoPrice.innerHTML = `<p>${priceSashimiTako} руб.<p>`;
    sashimiSakePriceMobile.innerHTML = `<p>${priceSashimiSake} руб.<p>`;
    sashimiIkaPriceMobile.innerHTML = `<p>${priceSashimiIka} руб.<p>`;
    sashimiMaguroPriceMobile.innerHTML = `<p>${priceSashimiMaguro} руб.<p>`;
    sashimiTakoPriceMobile.innerHTML = `<p>${priceSashimiTako} руб.<p>`;
}

priceSashimi();

// Блок меню сашими "Сяке"

const sashimiSakeMinus = document.querySelector ('.sashimi-sake-minus');
const sashimiSakePlus = document.querySelector ('.sashimi-sake-plus');
const sashimiSakeNumber = document.querySelector ('.sashimi-sake-number');
const sashimiSakeOrder = document.querySelector ('.sashimi-sake-order'); 
let numberSashimiSake = 0;

sashimiSakePlus.addEventListener('click', () => {
    numberSashimiSake++;
    sashimiSakeNumber.innerHTML = `<p>${numberSashimiSake}<p>`
});

sashimiSakeMinus.addEventListener('click', () => {
    if (numberSashimiSake !== 0) {
        numberSashimiSake--;
        sashimiSakeNumber.innerHTML = `<p>${numberSashimiSake}<p>`
    } else {
        numberSashimiSake = 0;
    }
});

sashimiSakeOrder.addEventListener('click', () => {
    if (numberSashimiSake > 0) {
        alert(`Заказано сашими "Сяке", количество - ${numberSashimiSake}`);
        numberSashimiSake = 0;
        sashimiSakeNumber.innerHTML = `<p>${numberSashimiSake}<p>`
    } else {
        numberSashimiSake = 0;
    }
});

// Блок меню сашими "Ика"

const sashimiIkaMinus = document.querySelector ('.sashimi-ika-minus');
const sashimiIkaPlus = document.querySelector ('.sashimi-ika-plus');
const sashimiIkaNumber = document.querySelector ('.sashimi-ika-number');
const sashimiIkaOrder = document.querySelector ('.sashimi-ika-order'); 
let numberSashimiIka = 0;

sashimiIkaPlus.addEventListener('click', () => {
    numberSashimiIka++;
    sashimiIkaNumber.innerHTML = `<p>${numberSashimiIka}<p>`
});

sashimiIkaMinus.addEventListener('click', () => {
    if (numberSashimiIka !== 0) {
        numberSashimiIka--;
        sashimiIkaNumber.innerHTML = `<p>${numberSashimiIka}<p>`
    } else {
        numberSashimiIka = 0;
    }
});

sashimiIkaOrder.addEventListener('click', () => {
    if (numberSashimiIka > 0) {
        alert(`Заказано сашими "Ика", количество - ${numberSashimiIka}`);
        numberSashimiIka = 0;
        sashimiIkaNumber.innerHTML = `<p>${numberSashimiIka}<p>`
    } else {
        numberSashimiIka = 0;
    }
});

// Блок меню сашими "Магуро"

const sashimiMaguroMinus = document.querySelector ('.sashimi-maguro-minus');
const sashimiMaguroPlus = document.querySelector ('.sashimi-maguro-plus');
const sashimiMaguroNumber = document.querySelector ('.sashimi-maguro-number');
const sashimiMaguroOrder = document.querySelector ('.sashimi-maguro-order'); 
let numberSashimiMaguro = 0;

sashimiMaguroPlus.addEventListener('click', () => {
    numberSashimiMaguro++;
    sashimiMaguroNumber.innerHTML = `<p>${numberSashimiMaguro}<p>`
});

sashimiMaguroMinus.addEventListener('click', () => {
    if (numberSashimiMaguro !== 0) {
        numberSashimiMaguro--;
        sashimiMaguroNumber.innerHTML = `<p>${numberSashimiMaguro}<p>`
    } else {
        numberSashimiMaguro = 0;
    }
});

sashimiMaguroOrder.addEventListener('click', () => {
    if (numberSashimiMaguro > 0) {
        alert(`Заказано сашими "Магуро", количество - ${numberSashimiMaguro}`);
        numberSashimiMaguro = 0;
        sashimiMaguroNumber.innerHTML = `<p>${numberSashimiMaguro}<p>`
    } else {
        numberSashimiMaguro = 0;
    }
});

// Блок меню сашими "Тако"

const sashimiTakoMinus = document.querySelector ('.sashimi-tako-minus');
const sashimiTakoPlus = document.querySelector ('.sashimi-tako-plus');
const sashimiTakoNumber = document.querySelector ('.sashimi-tako-number');
const sashimiTakoOrder = document.querySelector ('.sashimi-tako-order'); 
let numberSashimiTako = 0;

sashimiTakoPlus.addEventListener('click', () => {
    numberSashimiTako++;
    sashimiTakoNumber.innerHTML = `<p>${numberSashimiTako}<p>`
});

sashimiTakoMinus.addEventListener('click', () => {
    if (numberSashimiTako !== 0) {
        numberSashimiTako--;
        sashimiTakoNumber.innerHTML = `<p>${numberSashimiTako}<p>`
    } else {
        numberSashimiTako = 0;
    }
});

sashimiTakoOrder.addEventListener('click', () => {
    if (numberSashimiTako > 0) {
        alert(`Заказано сашими "Тако", количество - ${numberSashimiTako}`);
        numberSashimiTako = 0;
        sashimiTakoNumber.innerHTML = `<p>${numberSashimiTako}<p>`
    } else {
        numberSashimiTako = 0;
    }
});

// Блок меню сашими "Сяке" мобильная версия

const sashimiSakeMinusMobile = document.querySelector ('.sashimi-sake-minus-mobile');
const sashimiSakePlusMobile = document.querySelector ('.sashimi-sake-plus-mobile');
const sashimiSakeNumberMobile = document.querySelector ('.sashimi-sake-number-mobile');
const sashimiSakeOrderMobile = document.querySelector ('.sashimi-sake-order-mobile'); 
let numberSashimiSakeMobile = 0;

sashimiSakePlusMobile.addEventListener('click', () => {
    numberSashimiSakeMobile++;
    sashimiSakeNumberMobile.innerHTML = `<p>${numberSashimiSakeMobile}<p>`
});

sashimiSakeMinusMobile.addEventListener('click', () => {
    if (numberSashimiSakeMobile !== 0) {
        numberSashimiSakeMobile--;
        sashimiSakeNumberMobile.innerHTML = `<p>${numberSashimiSakeMobile}<p>`
    } else {
        numberSashimiSakeMobile = 0;
    }
});

sashimiSakeOrderMobile.addEventListener('click', () => {
    if (numberSashimiSakeMobile > 0) {
        alert(`Заказано сашими "Сяке", количество - ${numberSashimiSakeMobile}`);
        numberSashimiSakeMobile = 0;
        sashimiSakeNumberMobile.innerHTML = `<p>${numberSashimiSakeMobile}<p>`
    } else {
        numberSashimiSakeMobile = 0;
    }
});

// Блок меню сашими "Ика" мобильная версия

const sashimiIkaMinusMobile = document.querySelector ('.sashimi-ika-minus-mobile');
const sashimiIkaPlusMobile = document.querySelector ('.sashimi-ika-plus-mobile');
const sashimiIkaNumberMobile = document.querySelector ('.sashimi-ika-number-mobile');
const sashimiIkaOrderMobile = document.querySelector ('.sashimi-ika-order-mobile'); 
let numberSashimiIkaMobile = 0;

sashimiIkaPlusMobile.addEventListener('click', () => {
    numberSashimiIkaMobile++;
    sashimiIkaNumberMobile.innerHTML = `<p>${numberSashimiIkaMobile}<p>`
});

sashimiIkaMinusMobile.addEventListener('click', () => {
    if (numberSashimiIkaMobile !== 0) {
        numberSashimiIkaMobile--;
        sashimiIkaNumberMobile.innerHTML = `<p>${numberSashimiIkaMobile}<p>`
    } else {
        numberSashimiIkaMobile = 0;
    }
});

sashimiIkaOrderMobile.addEventListener('click', () => {
    if (numberSashimiIkaMobile > 0) {
        alert(`Заказано сашими "Ика", количество - ${numberSashimiIkaMobile}`);
        numberSashimiIkaMobile = 0;
        sashimiIkaNumberMobile.innerHTML = `<p>${numberSashimiIkaMobile}<p>`
    } else {
        numberSashimiIkaMobile = 0;
    }
});

// Блок меню сашими "Магуро" мобильная версия

const sashimiMaguroMinusMobile = document.querySelector ('.sashimi-maguro-minus-mobile');
const sashimiMaguroPlusMobile = document.querySelector ('.sashimi-maguro-plus-mobile');
const sashimiMaguroNumberMobile = document.querySelector ('.sashimi-maguro-number-mobile');
const sashimiMaguroOrderMobile = document.querySelector ('.sashimi-maguro-order-mobile'); 
let numberSashimiMaguroMobile = 0;

sashimiMaguroPlusMobile.addEventListener('click', () => {
    numberSashimiMaguroMobile++;
    sashimiMaguroNumberMobile.innerHTML = `<p>${numberSashimiMaguroMobile}<p>`
});

sashimiMaguroMinusMobile.addEventListener('click', () => {
    if (numberSashimiMaguroMobile !== 0) {
        numberSashimiMaguroMobile--;
        sashimiMaguroNumberMobile.innerHTML = `<p>${numberSashimiMaguroMobile}<p>`
    } else {
        numberSashimiMaguroMobile = 0;
    }
});

sashimiMaguroOrderMobile.addEventListener('click', () => {
    if (numberSashimiMaguroMobile > 0) {
        alert(`Заказано сашими "Магуро", количество - ${numberSashimiMaguroMobile}`);
        numberSashimiMaguroMobile = 0;
        sashimiMaguroNumberMobile.innerHTML = `<p>${numberSashimiMaguroMobile}<p>`
    } else {
        numberSashimiMaguroMobile = 0;
    }
});

// Блок меню сашими "Тако" мобильная версия

const sashimiTakoMinusMobile = document.querySelector ('.sashimi-tako-minus-mobile');
const sashimiTakoPlusMobile = document.querySelector ('.sashimi-tako-plus-mobile');
const sashimiTakoNumberMobile = document.querySelector ('.sashimi-tako-number-mobile');
const sashimiTakoOrderMobile = document.querySelector ('.sashimi-tako-order-mobile'); 
let numberSashimiTakoMobile = 0;

sashimiTakoPlusMobile.addEventListener('click', () => {
    numberSashimiTakoMobile++;
    sashimiTakoNumberMobile.innerHTML = `<p>${numberSashimiTakoMobile}<p>`
});

sashimiTakoMinusMobile.addEventListener('click', () => {
    if (numberSashimiTakoMobile !== 0) {
        numberSashimiTakoMobile--;
        sashimiTakoNumberMobile.innerHTML = `<p>${numberSashimiTakoMobile}<p>`
    } else {
        numberSashimiTakoMobile = 0;
    }
});

sashimiTakoOrderMobile.addEventListener('click', () => {
    if (numberSashimiTakoMobile > 0) {
        alert(`Заказано сашими "Тако", количество - ${numberSashimiTakoMobile}`);
        numberSashimiTakoMobile = 0;
        sashimiTakoNumberMobile.innerHTML = `<p>${numberSashimiTakoMobile}<p>`
    } else {
        numberSashimiTakoMobile = 0;
    }
});