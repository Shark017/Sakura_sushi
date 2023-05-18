// Объявление цен на позиции меню

const setSakuraPrice = document.querySelector ('.menu-set-sakura-price');
const setWarmSakuraPrice = document.querySelector ('.menu-warm-set-sakura-price');
const setSamuraiPrice = document.querySelector ('.menu-set-sashimi-price');
const setSakuraPriceMobile  = document.querySelector ('.menu-mobile-set-sakura-price');
const setWarmSakuraPriceMobile  = document.querySelector ('.menu-mobile-warm-set-sakura-price');
const setSamuraiPriceMobile  = document.querySelector ('.menu-mobile-set-samurai-price');

let priceSetSakura = 2250;
let priceSetWarmSakura = 2000;
let priceSetSamurai = 2100;

function priceSet() {
    setSakuraPrice.innerHTML = `<p>${priceSetSakura} руб.<p>`;
    setWarmSakuraPrice.innerHTML = `<p>${priceSetWarmSakura} руб.<p>`;
    setSamuraiPrice.innerHTML = `<p>${priceSetSamurai} руб.<p>`;
    setSakuraPriceMobile.innerHTML = `<p>${priceSetSakura} руб.<p>`;
    setWarmSakuraPriceMobile.innerHTML = `<p>${priceSetWarmSakura} руб.<p>`;
    setSamuraiPriceMobile.innerHTML = `<p>${priceSetSamurai} руб.<p>`;
}

priceSet();

// Блок сет "Сакура"

const setSakuraMinus = document.querySelector ('.set-sakura-minus');
const setSakuraPlus = document.querySelector ('.set-sakura-plus');
const setSakuraNumber = document.querySelector ('.set-sakura-number');
const setSakuraOrder = document.querySelector ('.set-sakura-order'); 
let numberSetSakura = 0;

setSakuraPlus.addEventListener('click', () => {
    numberSetSakura++;
    setSakuraNumber.innerHTML = `<p>${numberSetSakura}<p>`
});

setSakuraMinus.addEventListener('click', () => {
    if (numberSetSakura !== 0) {
        numberSetSakura--;
        setSakuraNumber.innerHTML = `<p>${numberSetSakura}<p>`
    } else {
        numberSetSakura = 0;
    }
});

setSakuraOrder.addEventListener('click', () => {
    if (numberSetSakura > 0) {
        alert(`Заказано сет "Сакура", количество - ${numberSetSakura}`);
        numberSetSakura = 0;
        setSakuraNumber.innerHTML = `<p>${numberSetSakura}<p>`
    } else {
        numberSetSakura = 0;
    }
});

// Блок теплый сет "Сакура"

const warmSetSakuraMinus = document.querySelector ('.warm-set-sakura-minus');
const warmSetSakuraPlus = document.querySelector ('.warm-set-sakura-plus');
const warmSetSakuraNumber = document.querySelector ('.warm-set-sakura-number');
const warmSetSakuraOrder = document.querySelector ('.warm-set-sakura-order'); 
let numberWarmSetSakura = 0;

warmSetSakuraPlus.addEventListener('click', () => {
    numberWarmSetSakura++;
    warmSetSakuraNumber.innerHTML = `<p>${numberWarmSetSakura}<p>`
});

warmSetSakuraMinus.addEventListener('click', () => {
    if (numberWarmSetSakura !== 0) {
        numberWarmSetSakura--;
        warmSetSakuraNumber.innerHTML = `<p>${numberWarmSetSakura}<p>`
    } else {
        numberWarmSetSakura = 0;
    }
});

warmSetSakuraOrder.addEventListener('click', () => {
    if (numberWarmSetSakura > 0) {
        alert(`Заказано теплый сет "Сакура", количество - ${numberWarmSetSakura}`);
        numberWarmSetSakura = 0;
        warmSetSakuraNumber.innerHTML = `<p>${numberWarmSetSakura}<p>`
    } else {
        numberWarmSetSakura = 0;
    }
});

// Блок сет сашими "Самурай"

const setSamuraiMinus = document.querySelector ('.set-samurai-minus');
const setSamuraiPlus = document.querySelector ('.set-samurai-plus');
const setSamuraiNumber = document.querySelector ('.set-samurai-number');
const setSamuraiOrder = document.querySelector ('.set-samurai-order'); 
let numberSetSamurai = 0;

setSamuraiPlus.addEventListener('click', () => {
    numberSetSamurai++;
    setSamuraiNumber.innerHTML = `<p>${numberSetSamurai}<p>`
});

setSamuraiMinus.addEventListener('click', () => {
    if (numberSetSamurai !== 0) {
        numberSetSamurai --;
        setSamuraiNumber.innerHTML = `<p>${numberSetSamurai}<p>`
    } else {
        numberSetSamurai = 0;
    }
});

setSamuraiOrder.addEventListener('click', () => {
    if (numberSetSamurai > 0) {
        alert(`Заказано сет сашими "Самурай", количество - ${numberSetSamurai}`);
        numberSetSamurai = 0;
        setSamuraiNumber.innerHTML = `<p>${numberSetSamurai}<p>`
    } else {
        numberSetSamurai = 0;
    }
});

// Блок сет "Сакура" мобильная версия

const setSakuraMinusMobile  = document.querySelector ('.set-sakura-minus-mobile');
const setSakuraPlusMobile  = document.querySelector ('.set-sakura-plus-mobile');
const setSakuraNumberMobile  = document.querySelector ('.set-sakura-number-mobile');
const setSakuraOrderMobile  = document.querySelector ('.set-sakura-order-mobile'); 
let numberSetSakuraMobile  = 0;

setSakuraPlusMobile.addEventListener('click', () => {
    numberSetSakuraMobile++;
    setSakuraNumberMobile.innerHTML = `<p>${numberSetSakuraMobile }<p>`
});

setSakuraMinusMobile.addEventListener('click', () => {
    if (numberSetSakuraMobile !== 0) {
        numberSetSakuraMobile--;
        setSakuraNumberMobile.innerHTML = `<p>${numberSetSakuraMobile }<p>`
    } else {
        numberSetSakuraMobile = 0;
    }
});

setSakuraOrderMobile.addEventListener('click', () => {
    if (numberSetSakuraMobile > 0) {
        alert(`Заказано сет "Сакура", количество - ${numberSetSakuraMobile}`);
        numberSetSakuraMobile = 0;
        setSakuraNumberMobile.innerHTML = `<p>${numberSetSakuraMobile }<p>`
    } else {
        numberSetSakuraMobile = 0;
    }
});

// Блок теплый сет "Сакура" мобильная версия

const warmSetSakuraMinusMobile  = document.querySelector ('.warm-set-sakura-minus-mobile');
const warmSetSakuraPlusMobile  = document.querySelector ('.warm-set-sakura-plus-mobile');
const warmSetSakuraNumberMobile  = document.querySelector ('.warm-set-sakura-number-mobile');
const warmSetSakuraOrderMobile  = document.querySelector ('.warm-set-sakura-order-mobile'); 
let numberWarmSetSakuraMobile  = 0;

warmSetSakuraPlusMobile.addEventListener('click', () => {
    numberWarmSetSakuraMobile++;
    warmSetSakuraNumberMobile.innerHTML = `<p>${numberWarmSetSakuraMobile }<p>`
});

warmSetSakuraMinusMobile.addEventListener('click', () => {
    if (numberWarmSetSakuraMobile !== 0) {
        numberWarmSetSakuraMobile--;
        warmSetSakuraNumberMobile.innerHTML = `<p>${numberWarmSetSakuraMobile}<p>`
    } else {
        numberWarmSetSakuraMobile = 0;
    }
});

warmSetSakuraOrderMobile.addEventListener('click', () => {
    if (numberWarmSetSakuraMobile > 0) {
        alert(`Заказано теплый сет "Сакура", количество - ${numberWarmSetSakuraMobile}`);
        numberWarmSetSakuraMobile = 0;
        warmSetSakuraNumberMobile.innerHTML = `<p>${numberWarmSetSakuraMobile}<p>`
    } else {
        numberWarmSetSakuraMobile = 0;
    }
});

// Блок сет сашими "Самурай" мобильная версия

const setSamuraiMinusMobile = document.querySelector ('.set-samurai-minus-mobile');
const setSamuraiPlusMobile = document.querySelector ('.set-samurai-plus-mobile');
const setSamuraiNumberMobile = document.querySelector ('.set-samurai-number-mobile');
const setSamuraiOrderMobile = document.querySelector ('.set-samurai-order-mobile'); 
let numberSetSamuraiMobile = 0;

setSamuraiPlusMobile.addEventListener('click', () => {
    numberSetSamuraiMobile++;
    setSamuraiNumberMobile.innerHTML = `<p>${numberSetSamuraiMobile}<p>`
});

setSamuraiMinusMobile.addEventListener('click', () => {
    if (numberSetSamuraiMobile !== 0) {
        numberSetSamuraiMobile --;
        setSamuraiNumberMobile.innerHTML = `<p>${numberSetSamuraiMobile}<p>`
    } else {
        numberSetSamuraiMobile = 0;
    }
});

setSamuraiOrderMobile.addEventListener('click', () => {
    if (numberSetSamuraiMobile > 0) {
        alert(`Заказано сет сашими "Самурай", количество - ${numberSetSamuraiMobile}`);
        numberSetSamuraiMobile = 0;
        setSamuraiNumberMobile.innerHTML = `<p>${numberSetSamuraiMobile}<p>`
    } else {
        numberSetSamuraiMobile = 0;
    }
});