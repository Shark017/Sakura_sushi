// Объявление цен на позиции меню

const sushiSakePrice = document.querySelector ('.menu-sushi-sake-price');
const sushiMaguroPrice = document.querySelector ('.menu-sushi-maguro-price');
const sushiAbiPrice = document.querySelector ('.menu-sushi-abi-price');
const sushiUnagiPrice = document.querySelector ('.menu-sushi-unagi-price');
const sushiKunseiPrice = document.querySelector ('.menu-sushi-kunsei-price');
const sushiTaiPrice = document.querySelector ('.menu-sushi-tai-price');
const sushiSakePriceMobile = document.querySelector ('.menu-mobile-sushi-sake-price');
const sushiMaguroPriceMobile = document.querySelector ('.menu-mobile-sushi-maguro-price');
const sushiAbiPriceMobile = document.querySelector ('.menu-mobile-sushi-abi-price');
const sushiUnagiPriceMobile = document.querySelector ('.menu-mobile-sushi-unagi-price');
const sushiKunseiPriceMobile = document.querySelector ('.menu-mobile-sushi-kunsei-price');
const sushiTaiPriceMobile = document.querySelector ('.menu-mobile-sushi-tai-price');

let priceSushiSake = 130;
let priceSushiMaguro = 130;
let priceSushiAbi = 130;
let priceSushiUnagi = 130;
let priceSushiKunsei = 130;
let priceSushiTai = 130;

function priceSushi() {
    sushiSakePrice.innerHTML = `<p>${priceSushiSake} руб.<p>`;
    sushiMaguroPrice.innerHTML = `<p>${priceSushiMaguro} руб.<p>`;
    sushiAbiPrice.innerHTML = `<p>${priceSushiAbi} руб.<p>`;
    sushiUnagiPrice.innerHTML = `<p>${priceSushiUnagi} руб.<p>`;
    sushiKunseiPrice.innerHTML = `<p>${priceSushiKunsei} руб.<p>`;
    sushiTaiPrice.innerHTML = `<p>${priceSushiTai} руб.<p>`;
    sushiSakePriceMobile.innerHTML = `<p>${priceSushiSake} руб.<p>`;
    sushiMaguroPriceMobile.innerHTML = `<p>${priceSushiMaguro} руб.<p>`;
    sushiAbiPriceMobile.innerHTML = `<p>${priceSushiAbi} руб.<p>`;
    sushiUnagiPriceMobile.innerHTML = `<p>${priceSushiUnagi} руб.<p>`;
    sushiKunseiPriceMobile.innerHTML = `<p>${priceSushiKunsei} руб.<p>`;
    sushiTaiPriceMobile.innerHTML = `<p>${priceSushiTai} руб.<p>`;
}

priceSushi();

// Блок меню суши "Сяке"

const sushiSakeMinus = document.querySelector ('.sushi-sake-minus');
const sushiSakePlus = document.querySelector ('.sushi-sake-plus');
const sushiSakeNumber = document.querySelector ('.sushi-sake-number');
const sushiSakeOrder = document.querySelector ('.sushi-sake-order'); 
let numberSushiSake = 0;

sushiSakePlus.addEventListener('click', () => {
    numberSushiSake++;
    sushiSakeNumber.innerHTML = `<p>${numberSushiSake}<p>`
});

sushiSakeMinus.addEventListener('click', () => {
    if (numberSushiSake !== 0) {
        numberSushiSake--;
        sushiSakeNumber.innerHTML = `<p>${numberSushiSake}<p>`
    } else {
        numberSushiSake = 0;
    }
});

sushiSakeOrder.addEventListener('click', () => {
    if (numberSushiSake > 0) {
        alert(`Заказано суши "Сяке", количество - ${numberSushiSake}`);
        numberSushiSake = 0;
        sushiSakeNumber.innerHTML = `<p>${numberSushiSake}<p>`
    } else {
        numberSushiSake = 0;
    }
});

// Блок меню суши "Магуро"

const sushiMaguroMinus = document.querySelector ('.sushi-maguro-minus');
const sushiMaguroPlus = document.querySelector ('.sushi-maguro-plus');
const sushiMaguroNumber = document.querySelector ('.sushi-maguro-number');
const sushiMaguroOrder = document.querySelector ('.sushi-maguro-order'); 
let numberShushiMaguro = 0;

sushiMaguroPlus.addEventListener('click', () => {
    numberShushiMaguro++;
    sushiMaguroNumber.innerHTML = `<p>${numberShushiMaguro}<p>`
});

sushiMaguroMinus.addEventListener('click', () => {
    if (numberShushiMaguro !== 0) {
        numberShushiMaguro--;
        sushiMaguroNumber.innerHTML = `<p>${numberShushiMaguro}<p>`
    } else {
        numberShushiMaguro= 0;
    }
});

sushiMaguroOrder.addEventListener('click', () => {
    if (numberShushiMaguro > 0) {
        alert(`Заказано суши "Магуро", количество - ${numberShushiMaguro}`);
        numberShushiMaguro = 0;
        sushiMaguroNumber.innerHTML = `<p>${numberShushiMaguro}<p>`
    } else {
        numberShushiMaguro = 0;
    }
});

// Блок меню суши "Эби"

const sushiAbiMinus = document.querySelector ('.sushi-abi-minus');
const sushiAbiPlus = document.querySelector ('.sushi-abi-plus');
const sushiAbiNumber = document.querySelector ('.sushi-abi-number');
const sushiAbiOrder = document.querySelector ('.sushi-abi-order'); 
let numberShushiAbi = 0;

sushiAbiPlus.addEventListener('click', () => {
    numberShushiAbi++;
    sushiAbiNumber.innerHTML = `<p>${numberShushiAbi}<p>`
});

sushiAbiMinus.addEventListener('click', () => {
    if (numberShushiAbi !== 0) {
        numberShushiAbi--;
        sushiAbiNumber.innerHTML = `<p>${numberShushiAbi}<p>`
    } else {
        numberShushiAbi = 0;
    }
});

sushiAbiOrder.addEventListener('click', () => {
    if (numberShushiAbi > 0) {
        alert(`Заказано суши "Эби", количество - ${numberShushiAbi}`);
        numberShushiAbi = 0;
        sushiAbiNumber.innerHTML = `<p>${numberShushiAbi}<p>`
    } else {
        numberShushiAbi = 0;
    }
});

// Блок меню суши "Унаги"

const sushiUnagiMinus = document.querySelector ('.sushi-unagi-minus');
const sushiUnagiPlus = document.querySelector ('.sushi-unagi-plus');
const sushiUnagiNumber = document.querySelector ('.sushi-unagi-number');
const sushiUnagiOrder = document.querySelector ('.sushi-unagi-order'); 
let numberShushiUnagi = 0;

sushiUnagiPlus.addEventListener('click', () => {
    numberShushiUnagi++;
    sushiUnagiNumber.innerHTML = `<p>${numberShushiUnagi }<p>`
});

sushiUnagiMinus.addEventListener('click', () => {
    if (numberShushiUnagi  !== 0) {
        numberShushiUnagi--;
        sushiUnagiNumber.innerHTML = `<p>${numberShushiUnagi }<p>`
    } else {
        numberShushiUnagi  = 0;
    }
});

sushiUnagiOrder.addEventListener('click', () => {
    if (numberShushiUnagi > 0) {
        alert(`Заказано суши "Унаги", количество - ${numberShushiUnagi}`);
        numberShushiUnagi = 0;
        sushiUnagiNumber.innerHTML = `<p>${numberShushiUnagi }<p>`
    } else {
        numberShushiUnagi = 0;
    }
});

// Блок меню суши "Кунсей"

const sushiKunseiMinus = document.querySelector ('.sushi-kunsei-minus');
const sushiKunseiPlus = document.querySelector ('.sushi-kunsei-plus');
const sushiKunseiNumber = document.querySelector ('.sushi-kunsei-number');
const sushiKunseiOrder = document.querySelector ('.sushi-kunsei-order'); 
let numberShushiKunsei = 0;

sushiKunseiPlus.addEventListener('click', () => {
    numberShushiKunsei++;
    sushiKunseiNumber.innerHTML = `<p>${numberShushiKunsei}<p>`
});

sushiKunseiMinus.addEventListener('click', () => {
    if (numberShushiKunsei !== 0) {
        numberShushiKunsei--;
        sushiKunseiNumber.innerHTML = `<p>${numberShushiKunsei}<p>`
    } else {
        numberShushiKunsei = 0;
    }
});

sushiKunseiOrder.addEventListener('click', () => {
    if (numberShushiKunsei > 0) {
        alert(`Заказано суши "Кунсей", количество - ${numberShushiKunsei}`);
        numberShushiKunsei = 0;
        sushiKunseiNumber.innerHTML = `<p>${numberShushiKunsei}<p>`
    } else {
        numberShushiKunsei = 0;
    }
});


// Блок меню суши "Тай" 

const sushiTaiMinus = document.querySelector ('.sushi-tai-minus');
const sushiTaiPlus = document.querySelector ('.sushi-tai-plus');
const sushiTaiNumber = document.querySelector ('.sushi-tai-number');
const sushiTaiOrder = document.querySelector ('.sushi-tai-order'); 
let numberShushiTai = 0;

sushiTaiPlus.addEventListener('click', () => {
    numberShushiTai++;
    sushiTaiNumber.innerHTML = `<p>${numberShushiTai}<p>`
});

sushiTaiMinus.addEventListener('click', () => {
    if (numberShushiTai !== 0) {
        numberShushiTai--;
        sushiTaiNumber.innerHTML = `<p>${numberShushiTai}<p>`
    } else {
        numberShushiTai = 0;
    }
});

sushiTaiOrder.addEventListener('click', () => {
    if (numberShushiTai > 0) {
        alert(`Заказано суши "Тай", количество - ${numberShushiTai}`);
        numberShushiTai = 0;
        sushiTaiNumber.innerHTML = `<p>${numberShushiTai}<p>`
    } else {
        numberShushiTai = 0;
    }
});

// Блок меню суши "Сяке" мобильная версия

const sushiSakeMinusMobile = document.querySelector ('.sushi-sake-minus-mobile');
const sushiSakePlusMobile = document.querySelector ('.sushi-sake-plus-mobile');
const sushiSakeNumberMobile = document.querySelector ('.sushi-sake-number-mobile');
const sushiSakeOrderMobile = document.querySelector ('.sushi-sake-order-mobile'); 
let numberSushiSakeMobile = 0;

sushiSakePlusMobile.addEventListener('click', () => {
    numberSushiSakeMobile++;
    sushiSakeNumberMobile.innerHTML = `<p>${numberSushiSakeMobile}<p>`
});

sushiSakeMinusMobile.addEventListener('click', () => {
    if (numberSushiSakeMobile !== 0) {
        numberSushiSakeMobile--;
        sushiSakeNumberMobile.innerHTML = `<p>${numberSushiSakeMobile}<p>`
    } else {
        numberSushiSakeMobile = 0;
    }
});

sushiSakeOrderMobile.addEventListener('click', () => {
    if (numberSushiSakeMobile > 0) {
        alert(`Заказано суши "Сяке", количество - ${numberSushiSakeMobile}`);
        numberSushiSakeMobile = 0;
        sushiSakeNumberMobile.innerHTML = `<p>${numberSushiSakeMobile}<p>`
    } else {
        numberSushiSakeMobile = 0;
    }
});

// Блок меню суши "Магуро" мобильная версия

const sushiMaguroMinusMobile = document.querySelector ('.sushi-maguro-minus-mobile');
const sushiMaguroPlusMobile = document.querySelector ('.sushi-maguro-plus-mobile');
const sushiMaguroNumberMobile = document.querySelector ('.sushi-maguro-number-mobile');
const sushiMaguroOrderMobile = document.querySelector ('.sushi-maguro-order-mobile'); 
let numberShushiMaguroMobile = 0;

sushiMaguroPlusMobile.addEventListener('click', () => {
    numberShushiMaguroMobile++;
    sushiMaguroNumberMobile.innerHTML = `<p>${numberShushiMaguroMobile}<p>`
});

sushiMaguroMinusMobile.addEventListener('click', () => {
    if (numberShushiMaguroMobile !== 0) {
        numberShushiMaguroMobile--;
        sushiMaguroNumberMobile.innerHTML = `<p>${numberShushiMaguroMobile}<p>`
    } else {
        numberShushiMaguroMobile= 0;
    }
});

sushiMaguroOrderMobile.addEventListener('click', () => {
    if (numberShushiMaguroMobile > 0) {
        alert(`Заказано суши "Магуро", количество - ${numberShushiMaguroMobile}`);
        numberShushiMaguroMobile = 0;
        sushiMaguroNumberMobile.innerHTML = `<p>${numberShushiMaguroMobile}<p>`
    } else {
        numberShushiMaguroMobile = 0;
    }
});

// Блок меню суши "Эби" мобильная версия

const sushiAbiMinusMobile = document.querySelector ('.sushi-abi-minus-mobile');
const sushiAbiPlusMobile = document.querySelector ('.sushi-abi-plus-mobile');
const sushiAbiNumberMobile = document.querySelector ('.sushi-abi-number-mobile');
const sushiAbiOrderMobile = document.querySelector ('.sushi-abi-order-mobile'); 
let numberShushiAbiMobile = 0;

sushiAbiPlusMobile.addEventListener('click', () => {
    numberShushiAbiMobile++;
    sushiAbiNumberMobile.innerHTML = `<p>${numberShushiAbiMobile}<p>`
});

sushiAbiMinusMobile.addEventListener('click', () => {
    if (numberShushiAbiMobile !== 0) {
        numberShushiAbiMobile--;
        sushiAbiNumberMobile.innerHTML = `<p>${numberShushiAbiMobile}<p>`
    } else {
        numberShushiAbiMobile = 0;
    }
});

sushiAbiOrderMobile.addEventListener('click', () => {
    if (numberShushiAbiMobile > 0) {
        alert(`Заказано суши "Эби", количество - ${numberShushiAbiMobile}`);
        numberShushiAbiMobile = 0;
        sushiAbiNumberMobile.innerHTML = `<p>${numberShushiAbiMobile}<p>`
    } else {
        numberShushiAbiMobile = 0;
    }
});

// Блок меню суши "Унаги" мобильная версия

const sushiUnagiMinusMobile = document.querySelector ('.sushi-unagi-minus-mobile');
const sushiUnagiPlusMobile = document.querySelector ('.sushi-unagi-plus-mobile');
const sushiUnagiNumberMobile = document.querySelector ('.sushi-unagi-number-mobile');
const sushiUnagiOrderMobile = document.querySelector ('.sushi-unagi-order-mobile'); 
let numberShushiUnagiMobile = 0;

sushiUnagiPlusMobile.addEventListener('click', () => {
    numberShushiUnagiMobile++;
    sushiUnagiNumberMobile.innerHTML = `<p>${numberShushiUnagiMobile}<p>`
});

sushiUnagiMinusMobile.addEventListener('click', () => {
    if (numberShushiUnagiMobile !== 0) {
        numberShushiUnagiMobile--;
        sushiUnagiNumberMobile.innerHTML = `<p>${numberShushiUnagiMobile}<p>`
    } else {
        numberShushiUnagiMobile = 0;
    }
});

sushiUnagiOrderMobile.addEventListener('click', () => {
    if (numberShushiUnagiMobile > 0) {
        alert(`Заказано суши "Унаги", количество - ${numberShushiUnagiMobile}`);
        numberShushiUnagiMobile = 0;
        sushiUnagiNumberMobile.innerHTML = `<p>${numberShushiUnagiMobile}<p>`
    } else {
        numberShushiUnagiMobile = 0;
    }
});

// Блок меню суши "Кунсей" мобильная версия

const sushiKunseiMinusMobile = document.querySelector ('.sushi-kunsei-minus-mobile');
const sushiKunseiPlusMobile = document.querySelector ('.sushi-kunsei-plus-mobile');
const sushiKunseiNumberMobile = document.querySelector ('.sushi-kunsei-number-mobile');
const sushiKunseiOrderMobile = document.querySelector ('.sushi-kunsei-order-mobile'); 
let numberShushiKunseiMobile = 0;

sushiKunseiPlusMobile.addEventListener('click', () => {
    numberShushiKunseiMobile++;
    sushiKunseiNumberMobile.innerHTML = `<p>${numberShushiKunseiMobile}<p>`
});

sushiKunseiMinusMobile.addEventListener('click', () => {
    if (numberShushiKunseiMobile !== 0) {
        numberShushiKunseiMobile--;
        sushiKunseiNumberMobile.innerHTML = `<p>${numberShushiKunseiMobile}<p>`
    } else {
        numberShushiKunseiMobile = 0;
    }
});

sushiKunseiOrderMobile.addEventListener('click', () => {
    if (numberShushiKunseiMobile > 0) {
        alert(`Заказано суши "Кунсей", количество - ${numberShushiKunseiMobile}`);
        numberShushiKunseiMobile = 0;
        sushiKunseiNumberMobile.innerHTML = `<p>${numberShushiKunseiMobile}<p>`
    } else {
        numberShushiKunseiMobile = 0;
    }
});


// Блок меню суши "Тай" мобильная версия 

const sushiTaiMinusMobile = document.querySelector ('.sushi-tai-minus-mobile');
const sushiTaiPlusMobile = document.querySelector ('.sushi-tai-plus-mobile');
const sushiTaiNumberMobile = document.querySelector ('.sushi-tai-number-mobile');
const sushiTaiOrderMobile = document.querySelector ('.sushi-tai-order-mobile'); 
let numberShushiTaiMobile = 0;

sushiTaiPlusMobile.addEventListener('click', () => {
    numberShushiTaiMobile++;
    sushiTaiNumberMobile.innerHTML = `<p>${numberShushiTaiMobile}<p>`
});

sushiTaiMinusMobile.addEventListener('click', () => {
    if (numberShushiTaiMobile !== 0) {
        numberShushiTaiMobile--;
        sushiTaiNumberMobile.innerHTML = `<p>${numberShushiTaiMobile}<p>`
    } else {
        numberShushiTaiMobile = 0;
    }
});

sushiTaiOrderMobile.addEventListener('click', () => {
    if (numberShushiTaiMobile > 0) {
        alert(`Заказано суши "Тай", количество - ${numberShushiTaiMobile}`);
        numberShushiTaiMobile = 0;
        sushiTaiNumberMobile.innerHTML = `<p>${numberShushiTaiMobile}<p>`
    } else {
        numberShushiTaiMobile = 0;
    }
});