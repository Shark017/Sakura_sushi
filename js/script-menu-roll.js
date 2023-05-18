// Объявление цен на позиции меню

const rollCanadaPrice = document.querySelector ('.menu-roll-canada-price');
const rollFiladelfiaPrice = document.querySelector ('.menu-roll-filadelfia-price');
const rollCaliforniaPrice = document.querySelector ('.menu-roll-california-price');
const rollSakeMakiPrice = document.querySelector ('.menu-roll-sake-maki-price');
const rollUnagiMakiPrice = document.querySelector ('.menu-roll-unagi-maki-price');
const rollBostonPrice = document.querySelector ('.menu-roll-boston-price');
const rollCanadaPriceMobile = document.querySelector ('.menu-mobile-roll-canada-price');
const rollFiladelfiaPriceMobile = document.querySelector ('.menu-mobile-roll-filadelfia-price');
const rollCaliforniaPriceMobile = document.querySelector ('.menu-mobile-roll-california-price');
const rollSakeMakiPriceMobile = document.querySelector ('.menu-mobile-roll-sake-maki-price');
const rollUnagiMakiPriceMobile = document.querySelector ('.menu-mobile-roll-unagi-maki-price');
const rollBostonPriceMobile = document.querySelector ('.menu-mobile-roll-boston-price');

let priceRollCanada = 450;
let priceRollFiladelfia = 520;
let priceRollCalifornia = 380;
let priceRollSakeMaki = 180;
let priceRollUnagiMaki = 180;
let priceRollBoston = 430;

function priceRoll() {
    rollCanadaPrice.innerHTML = `<p>${priceRollCanada} руб.<p>`;
    rollFiladelfiaPrice.innerHTML = `<p>${priceRollFiladelfia} руб.<p>`;
    rollCaliforniaPrice.innerHTML = `<p>${priceRollCalifornia} руб.<p>`;
    rollSakeMakiPrice.innerHTML = `<p>${priceRollSakeMaki} руб.<p>`;
    rollUnagiMakiPrice.innerHTML = `<p>${priceRollUnagiMaki} руб.<p>`;
    rollBostonPrice.innerHTML = `<p>${priceRollBoston} руб.<p>`;

    rollCanadaPriceMobile .innerHTML = `<p>${priceRollCanada} руб.<p>`
    rollFiladelfiaPriceMobile .innerHTML = `<p>${priceRollFiladelfia} руб.<p>`
    rollCaliforniaPriceMobile .innerHTML = `<p>${priceRollCalifornia} руб.<p>`
    rollSakeMakiPriceMobile .innerHTML = `<p>${priceRollSakeMaki} руб.<p>`
    rollUnagiMakiPriceMobile .innerHTML = `<p>${priceRollUnagiMaki} руб.<p>`
    rollBostonPriceMobile .innerHTML = `<p>${priceRollBoston} руб.<p>`
}

priceRoll();

// Блок меню роллы "Канада"

const rollCanadaMinus = document.querySelector ('.roll-canada-minus');
const rollCanadaPlus = document.querySelector ('.roll-canada-plus');
const rollCanadaNumber = document.querySelector ('.roll-canada-number');
const rollCanadaOrder = document.querySelector ('.roll-canada-order'); 
let numberRollCanada = 0;

rollCanadaPlus.addEventListener('click', () => {
    numberRollCanada++;
    rollCanadaNumber.innerHTML = `<p>${numberRollCanada}<p>`
});

rollCanadaMinus.addEventListener('click', () => {
    if (numberRollCanada !== 0) {
        numberRollCanada--;
        rollCanadaNumber.innerHTML = `<p>${numberRollCanada}<p>`
    } else {
        numberRollCanada = 0;
    }
});

rollCanadaOrder.addEventListener('click', () => {
    if (numberRollCanada > 0) {
        alert(`Заказано роллы "Канада", количество - ${numberRollCanada}`);
        numberRollCanada = 0;
        rollCanadaNumber.innerHTML = `<p>${numberRollCanada}<p>`
    } else {
        numberRollCanada = 0;
    }
});

// Блок меню роллы "Филадельфия"

const rollFiladelfiaMinus = document.querySelector ('.roll-filadelfia-minus');
const rollFiladelfiaPlus = document.querySelector ('.roll-filadelfia-plus');
const rollFiladelfiaNumber = document.querySelector ('.roll-filadelfia-number');
const rollFiladelfiaOrder = document.querySelector ('.roll-filadelfia-order'); 
let numberRollFiladelfia = 0;

rollFiladelfiaPlus.addEventListener('click', () => {
    numberRollFiladelfia++;
    rollFiladelfiaNumber.innerHTML = `<p>${numberRollFiladelfia}<p>`
});

rollFiladelfiaMinus.addEventListener('click', () => {
    if (numberRollFiladelfia !== 0) {
        numberRollFiladelfia--;
        rollFiladelfiaNumber.innerHTML = `<p>${numberRollFiladelfia}<p>`
    } else {
        numberRollFiladelfia = 0;
    }
});

rollFiladelfiaOrder.addEventListener('click', () => {
    if (numberRollFiladelfia > 0) {
        alert(`Заказано роллы "Филадельфия", количество - ${numberRollFiladelfia}`);
        numberRollFiladelfia = 0;
        rollFiladelfiaNumber.innerHTML = `<p>${numberRollFiladelfia}<p>`
    } else {
        numberRollFiladelfia = 0;
    }
});

// Блок меню роллы "Калифорния"

const rollCaliforniaMinus = document.querySelector ('.roll-california-minus');
const rollCaliforniaPlus = document.querySelector ('.roll-california-plus');
const rollCaliforniaNumber = document.querySelector ('.roll-california-number');
const rollCaliforniaOrder = document.querySelector ('.roll-california-order'); 
let numberRollCalifornia = 0;

rollCaliforniaPlus.addEventListener('click', () => {
    numberRollCalifornia++;
    rollCaliforniaNumber.innerHTML = `<p>${numberRollCalifornia}<p>`
});

rollCaliforniaMinus.addEventListener('click', () => {
    if (numberRollCalifornia !== 0) {
        numberRollCalifornia--;
        rollCaliforniaNumber.innerHTML = `<p>${numberRollCalifornia}<p>`
    } else {
        numberRollCalifornia = 0;
    }
});

rollCaliforniaOrder.addEventListener('click', () => {
    if (numberRollCalifornia > 0) {
        alert(`Заказано роллы "Калифорния", количество - ${numberRollCalifornia}`);
        numberRollCalifornia = 0;
        rollCaliforniaNumber.innerHTML = `<p>${numberRollCalifornia}<p>`
    } else {
        numberRollCalifornia = 0;
    }
});

// Блок меню роллы "Сяке маки"

const rollSakeMakiMinus = document.querySelector ('.roll-sake-maki-minus');
const rollSakeMakiPlus = document.querySelector ('.roll-sake-maki-plus');
const rollSakeMakiNumber = document.querySelector ('.roll-sake-maki-number');
const rollSakeMakiOrder = document.querySelector ('.roll-sake-maki-order'); 
let numberRollSakeMaki = 0;

rollSakeMakiPlus.addEventListener('click', () => {
    numberRollSakeMaki++;
    rollSakeMakiNumber.innerHTML = `<p>${numberRollSakeMaki}<p>`
});

rollSakeMakiMinus.addEventListener('click', () => {
    if (numberRollSakeMaki !== 0) {
        numberRollSakeMaki--;
        rollSakeMakiNumber.innerHTML = `<p>${numberRollSakeMaki}<p>`
    } else {
        numberRollSakeMaki = 0;
    }
});

rollSakeMakiOrder.addEventListener('click', () => {
    if (numberRollSakeMaki > 0) {
        alert(`Заказано роллы "Сяке маки", количество - ${numberRollSakeMaki}`);
        numberRollSakeMaki = 0;
        rollSakeMakiNumber.innerHTML = `<p>${numberRollSakeMaki}<p>`
    } else {
        numberRollSakeMaki = 0;
    }
});

// Блок меню роллы "Унаги маки"

const rollUnagiMakiMinus = document.querySelector ('.roll-unagi-maki-minus');
const rollUnagiMakiPlus = document.querySelector ('.roll-unagi-maki-plus');
const rollUnagiMakiNumber = document.querySelector ('.roll-unagi-maki-number');
const rollUnagiMakiOrder = document.querySelector ('.roll-unagi-maki-order'); 
let numberRollUnagiMaki = 0;

rollUnagiMakiPlus.addEventListener('click', () => {
    numberRollUnagiMaki++;
    rollUnagiMakiNumber.innerHTML = `<p>${numberRollUnagiMaki}<p>`
});

rollUnagiMakiMinus.addEventListener('click', () => {
    if (numberRollUnagiMaki !== 0) {
        numberRollUnagiMaki--;
        rollUnagiMakiNumber.innerHTML = `<p>${numberRollUnagiMaki}<p>`
    } else {
        numberRollUnagiMaki = 0;
    }
});

rollUnagiMakiOrder.addEventListener('click', () => {
    if (numberRollUnagiMaki > 0) {
        alert(`Заказано роллы "Унаги маки", количество - ${numberRollUnagiMaki}`);
        numberRollUnagiMaki = 0;
        rollUnagiMakiNumber.innerHTML = `<p>${numberRollUnagiMaki}<p>`
    } else {
        numberRollUnagiMaki = 0;
    }
});

// Блок меню роллы "Бостон"

const rollBostonMinus = document.querySelector ('.roll-boston-minus');
const rollBostonPlus = document.querySelector ('.roll-boston-plus');
const rollBostonNumber = document.querySelector ('.roll-boston-number');
const rollBostonOrder = document.querySelector ('.roll-boston-order'); 
let numberRollBoston = 0;

rollBostonPlus.addEventListener('click', () => {
    numberRollBoston++;
    rollBostonNumber.innerHTML = `<p>${numberRollBoston}<p>`
});

rollBostonMinus.addEventListener('click', () => {
    if (numberRollBoston !== 0) {
        numberRollBoston--;
        rollBostonNumber.innerHTML = `<p>${numberRollBoston}<p>`
    } else {
        numberRollBoston = 0;
    }
});

rollBostonOrder.addEventListener('click', () => {
    if (numberRollBoston > 0) {
        alert(`Заказано роллы "Бостон", количество - ${numberRollBoston}`);
        numberRollBoston = 0;
        rollBostonNumber.innerHTML = `<p>${numberRollBoston}<p>`
    } else {
        numberRollBoston = 0;
    }
});

// Блок меню роллы "Канада" мобильная версия

const rollCanadaMinusMobile = document.querySelector ('.roll-canada-minus-mobile');
const rollCanadaPlusMobile = document.querySelector ('.roll-canada-plus-mobile');
const rollCanadaNumberMobile = document.querySelector ('.roll-canada-number-mobile');
const rollCanadaOrderMobile = document.querySelector ('.roll-canada-order-mobile'); 
let numberRollCanadaMobile = 0;

rollCanadaPlusMobile.addEventListener('click', () => {
    numberRollCanadaMobile++;
    rollCanadaNumberMobile.innerHTML = `<p>${numberRollCanadaMobile}<p>`
});

rollCanadaMinusMobile.addEventListener('click', () => {
    if (numberRollCanadaMobile !== 0) {
        numberRollCanadaMobile--;
        rollCanadaNumberMobile.innerHTML = `<p>${numberRollCanadaMobile}<p>`
    } else {
        numberRollCanadaMobile = 0;
    }
});

rollCanadaOrderMobile.addEventListener('click', () => {
    if (numberRollCanadaMobile > 0) {
        alert(`Заказано роллы "Канада", количество - ${numberRollCanadaMobile}`);
        numberRollCanadaMobile = 0;
        rollCanadaNumberMobile.innerHTML = `<p>${numberRollCanadaMobile}<p>`
    } else {
        numberRollCanadaMobile = 0;
    }
});

// Блок меню роллы "Филадельфия" мобильная версия

const rollFiladelfiaMinusMobile = document.querySelector ('.roll-filadelfia-minus-mobile');
const rollFiladelfiaPlusMobile = document.querySelector ('.roll-filadelfia-plus-mobile');
const rollFiladelfiaNumberMobile = document.querySelector ('.roll-filadelfia-number-mobile');
const rollFiladelfiaOrderMobile = document.querySelector ('.roll-filadelfia-order-mobile'); 
let numberRollFiladelfiaMobile = 0;

rollFiladelfiaPlusMobile.addEventListener('click', () => {
    numberRollFiladelfiaMobile++;
    rollFiladelfiaNumberMobile.innerHTML = `<p>${numberRollFiladelfiaMobile}<p>`
});

rollFiladelfiaMinusMobile.addEventListener('click', () => {
    if (numberRollFiladelfiaMobile !== 0) {
        numberRollFiladelfiaMobile--;
        rollFiladelfiaNumberMobile.innerHTML = `<p>${numberRollFiladelfiaMobile}<p>`
    } else {
        numberRollFiladelfiaMobile = 0;
    }
});

rollFiladelfiaOrderMobile.addEventListener('click', () => {
    if (numberRollFiladelfiaMobile > 0) {
        alert(`Заказано роллы "Филадельфия", количество - ${numberRollFiladelfiaMobile}`);
        numberRollFiladelfiaMobile = 0;
        rollFiladelfiaNumberMobile.innerHTML = `<p>${numberRollFiladelfiaMobile}<p>`
    } else {
        numberRollFiladelfiaMobile = 0;
    }
});

// Блок меню роллы "Калифорния" мобильная версия

const rollCaliforniaMinusMobile = document.querySelector ('.roll-california-minus-mobile');
const rollCaliforniaPlusMobile = document.querySelector ('.roll-california-plus-mobile');
const rollCaliforniaNumberMobile = document.querySelector ('.roll-california-number-mobile');
const rollCaliforniaOrderMobile = document.querySelector ('.roll-california-order-mobile'); 
let numberRollCaliforniaMobile = 0;

rollCaliforniaPlusMobile.addEventListener('click', () => {
    numberRollCaliforniaMobile++;
    rollCaliforniaNumberMobile.innerHTML = `<p>${numberRollCaliforniaMobile}<p>`
});

rollCaliforniaMinusMobile.addEventListener('click', () => {
    if (numberRollCaliforniaMobile !== 0) {
        numberRollCaliforniaMobile--;
        rollCaliforniaNumberMobile.innerHTML = `<p>${numberRollCaliforniaMobile}<p>`
    } else {
        numberRollCaliforniaMobile = 0;
    }
});

rollCaliforniaOrderMobile.addEventListener('click', () => {
    if (numberRollCaliforniaMobile > 0) {
        alert(`Заказано роллы "Калифорния", количество - ${numberRollCaliforniaMobile}`);
        numberRollCaliforniaMobile = 0;
        rollCaliforniaNumberMobile.innerHTML = `<p>${numberRollCaliforniaMobile}<p>`
    } else {
        numberRollCaliforniaMobile = 0;
    }
});

// Блок меню роллы "Сяке маки" мобильная версия

const rollSakeMakiMinusMobile = document.querySelector ('.roll-sake-maki-minus-mobile');
const rollSakeMakiPlusMobile = document.querySelector ('.roll-sake-maki-plus-mobile');
const rollSakeMakiNumberMobile = document.querySelector ('.roll-sake-maki-number-mobile');
const rollSakeMakiOrderMobile = document.querySelector ('.roll-sake-maki-order-mobile'); 
let numberRollSakeMakiMobile = 0;

rollSakeMakiPlusMobile.addEventListener('click', () => {
    numberRollSakeMakiMobile++;
    rollSakeMakiNumberMobile.innerHTML = `<p>${numberRollSakeMakiMobile}<p>`
});

rollSakeMakiMinusMobile.addEventListener('click', () => {
    if (numberRollSakeMakiMobile !== 0) {
        numberRollSakeMakiMobile--;
        rollSakeMakiNumberMobile.innerHTML = `<p>${numberRollSakeMakiMobile}<p>`
    } else {
        numberRollSakeMakiMobile = 0;
    }
});

rollSakeMakiOrderMobile.addEventListener('click', () => {
    if (numberRollSakeMakiMobile > 0) {
        alert(`Заказано роллы "Сяке маки", количество - ${numberRollSakeMakiMobile}`);
        numberRollSakeMakiMobile = 0;
        rollSakeMakiNumberMobile.innerHTML = `<p>${numberRollSakeMakiMobile}<p>`
    } else {
        numberRollSakeMakiMobile = 0;
    }
});

// Блок меню роллы "Унаги маки" мобильная версия

const rollUnagiMakiMinusMobile = document.querySelector ('.roll-unagi-maki-minus-mobile');
const rollUnagiMakiPlusMobile = document.querySelector ('.roll-unagi-maki-plus-mobile');
const rollUnagiMakiNumberMobile = document.querySelector ('.roll-unagi-maki-number-mobile');
const rollUnagiMakiOrderMobile = document.querySelector ('.roll-unagi-maki-order-mobile'); 
let numberRollUnagiMakiMobile = 0;

rollUnagiMakiPlusMobile.addEventListener('click', () => {
    numberRollUnagiMakiMobile++;
    rollUnagiMakiNumberMobile.innerHTML = `<p>${numberRollUnagiMakiMobile}<p>`
});

rollUnagiMakiMinusMobile.addEventListener('click', () => {
    if (numberRollUnagiMakiMobile !== 0) {
        numberRollUnagiMakiMobile--;
        rollUnagiMakiNumberMobile.innerHTML = `<p>${numberRollUnagiMakiMobile}<p>`
    } else {
        numberRollUnagiMakiMobile = 0;
    }
});

rollUnagiMakiOrderMobile.addEventListener('click', () => {
    if (numberRollUnagiMakiMobile > 0) {
        alert(`Заказано роллы "Унаги маки", количество - ${numberRollUnagiMakiMobile}`);
        numberRollUnagiMakiMobile = 0;
        rollUnagiMakiNumberMobile.innerHTML = `<p>${numberRollUnagiMakiMobile}<p>`
    } else {
        numberRollUnagiMakiMobile = 0;
    }
});

// Блок меню роллы "Бостон" мобильная версия

const rollBostonMinusMobile = document.querySelector ('.roll-boston-minus-mobile');
const rollBostonPlusMobile = document.querySelector ('.roll-boston-plus-mobile');
const rollBostonNumberMobile = document.querySelector ('.roll-boston-number-mobile');
const rollBostonOrderMobile = document.querySelector ('.roll-boston-order-mobile'); 
let numberRollBostonMobile = 0;

rollBostonPlusMobile.addEventListener('click', () => {
    numberRollBostonMobile++;
    rollBostonNumberMobile.innerHTML = `<p>${numberRollBostonMobile}<p>`
});

rollBostonMinusMobile.addEventListener('click', () => {
    if (numberRollBostonMobile !== 0) {
        numberRollBostonMobile--;
        rollBostonNumberMobile.innerHTML = `<p>${numberRollBostonMobile}<p>`
    } else {
        numberRollBostonMobile = 0;
    }
});

rollBostonOrderMobile.addEventListener('click', () => {
    if (numberRollBostonMobile > 0) {
        alert(`Заказано роллы "Бостон", количество - ${numberRollBostonMobile}`);
        numberRollBostonMobile = 0;
        rollBostonNumberMobile.innerHTML = `<p>${numberRollBostonMobile}<p>`
    } else {
        numberRollBostonMobile = 0;
    }
});