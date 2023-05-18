// Объявление цен на позиции меню

const pizzaPeperroniPrice = document.querySelector ('.menu-pizza-peperroni-price');
const pizzaFourCheesePrice = document.querySelector ('.menu-pizza-four-cheese-price');
const pizzaMargaretPrice = document.querySelector ('.menu-pizza-margaret-price');
const pizzaFourSeasonsPrice = document.querySelector ('.menu-pizza-four-seasons-price');
const pizzaHamMushroomsPrice = document.querySelector ('.menu-pizza-ham-mushrooms-price');
const pizzaSakuraChickenPrice = document.querySelector ('.menu-pizza-sakura-chicken-price');
const pizzaPeperroniPriceMobile = document.querySelector ('.menu-mobile-pizza-peperroni-price');
const pizzaFourCheesePriceMobile = document.querySelector ('.menu-mobile-pizza-four-cheese-price');
const pizzaMargaretPriceMobile = document.querySelector ('.menu-mobile-pizza-margaret-price');
const pizzaFourSeasonsPriceMobile = document.querySelector ('.menu-mobile-pizza-four-seasons-price');
const pizzaHamMushroomsPriceMobile = document.querySelector ('.menu-mobile-pizza-ham-mushrooms-price');
const pizzaSakuraChickenPriceMobile = document.querySelector ('.menu-mobile-pizza-sakura-chicken-price');

let pricePizzaPeperroni = 480;
let pricePizzaFourCheese = 450;
let pricePizzaMargaret = 350;
let pricePizzaFourSeasons = 520;
let pricePizzaHamMushrooms = 480;
let pricePizzaSakuraChicken = 400;

function pricePizza() {
    pizzaPeperroniPrice.innerHTML = `<p>${pricePizzaPeperroni} руб.<p>`;
    pizzaFourCheesePrice.innerHTML = `<p>${pricePizzaFourCheese} руб.<p>`;
    pizzaMargaretPrice.innerHTML = `<p>${pricePizzaMargaret} руб.<p>`;
    pizzaFourSeasonsPrice.innerHTML = `<p>${pricePizzaFourSeasons} руб.<p>`;
    pizzaHamMushroomsPrice.innerHTML = `<p>${pricePizzaHamMushrooms} руб.<p>`;
    pizzaSakuraChickenPrice.innerHTML = `<p>${pricePizzaSakuraChicken} руб.<p>`;
    pizzaPeperroniPriceMobile.innerHTML = `<p>${pricePizzaPeperroni} руб.<p>`;
    pizzaFourCheesePriceMobile.innerHTML = `<p>${pricePizzaFourCheese} руб.<p>`;
    pizzaMargaretPriceMobile.innerHTML = `<p>${pricePizzaMargaret} руб.<p>`;
    pizzaFourSeasonsPriceMobile.innerHTML = `<p>${pricePizzaFourSeasons} руб.<p>`;
    pizzaHamMushroomsPriceMobile.innerHTML = `<p>${pricePizzaHamMushrooms} руб.<p>`;
    pizzaSakuraChickenPriceMobile.innerHTML = `<p>${pricePizzaSakuraChicken} руб.<p>`;
}

pricePizza();

// Блок меню пицца "Пеперрони"

const pizzaPeperroniMinus = document.querySelector ('.pizza-peperroni-minus');
const pizzaPeperroniPlus = document.querySelector ('.pizza-peperroni-plus');
const pizzaPeperroniNumber = document.querySelector ('.pizza-peperroni-number');
const pizzaPeperroniOrder = document.querySelector ('.pizza-peperroni-order'); 
let numberPizzaPeperroni = 0;

pizzaPeperroniPlus.addEventListener('click', () => {
    numberPizzaPeperroni++;
    pizzaPeperroniNumber.innerHTML = `<p>${numberPizzaPeperroni}<p>`
});

pizzaPeperroniMinus.addEventListener('click', () => {
    if (numberPizzaPeperroni !== 0) {
        numberPizzaPeperroni--;
        pizzaPeperroniNumber.innerHTML = `<p>${numberPizzaPeperroni}<p>`
    } else {
        numberPizzaPeperroni = 0;
    }
});

pizzaPeperroniOrder.addEventListener('click', () => {
    if (numberPizzaPeperroni > 0) {
        alert(`Заказано пицца "Пеперрони", количество - ${numberPizzaPeperroni}`);
        numberPizzaPeperroni = 0;
        pizzaPeperroniNumber.innerHTML = `<p>${numberPizzaPeperroni}<p>`
    } else {
        numberPizzaPeperroni = 0;
    }
});

// Блок меню пицца "Четыре сыра"

const pizzaFourCheeseMinus = document.querySelector ('.pizza-four-cheese-minus');
const pizzaFourCheesePlus = document.querySelector ('.pizza-four-cheese-plus');
const pizzaFourCheeseNumber = document.querySelector ('.pizza-four-cheese-number');
const pizzaFourCheeseOrder = document.querySelector ('.pizza-four-cheese-order'); 
let numberPizzaFourCheese = 0;

pizzaFourCheesePlus.addEventListener('click', () => {
    numberPizzaFourCheese++;
    pizzaFourCheeseNumber.innerHTML = `<p>${numberPizzaFourCheese}<p>`
});

pizzaFourCheeseMinus.addEventListener('click', () => {
    if (numberPizzaFourCheese !== 0) {
        numberPizzaFourCheese--;
        pizzaFourCheeseNumber.innerHTML = `<p>${numberPizzaFourCheese}<p>`
    } else {
        numberPizzaFourCheese = 0;
    }
});

pizzaFourCheeseOrder.addEventListener('click', () => {
    if (numberPizzaFourCheese > 0) {
        alert(`Заказано пицца "Четыре сыра", количество - ${numberPizzaFourCheese}`);
        numberPizzaFourCheese = 0;
        pizzaFourCheeseNumber.innerHTML = `<p>${numberPizzaFourCheese}<p>`
    } else {
        numberPizzaFourCheese = 0;
    }
});

// Блок меню пицца "Маргарита"

const pizzaMargaretMinus = document.querySelector ('.pizza-margaret-minus');
const pizzaMargaretPlus = document.querySelector ('.pizza-margaret-plus');
const pizzaMargaretNumber = document.querySelector ('.pizza-margaret-number');
const pizzaMargaretOrder = document.querySelector ('.pizza-margaret-order'); 
let numberPizzaMargaret = 0;

pizzaMargaretPlus.addEventListener('click', () => {
    numberPizzaMargaret++;
    pizzaMargaretNumber.innerHTML = `<p>${numberPizzaMargaret}<p>`
});

pizzaMargaretMinus.addEventListener('click', () => {
    if (numberPizzaMargaret !== 0) {
        numberPizzaMargaret--;
        pizzaMargaretNumber.innerHTML = `<p>${numberPizzaMargaret}<p>`
    } else {
        numberPizzaMargaret = 0;
    }
});

pizzaMargaretOrder.addEventListener('click', () => {
    if (numberPizzaMargaret > 0) {
        alert(`Заказано пицца "Маргарита", количество - ${numberPizzaMargaret}`);
        numberPizzaMargaret = 0;
        pizzaMargaretNumber.innerHTML = `<p>${numberPizzaMargaret}<p>`
    } else {
        numberPizzaMargaret = 0;
    }
});

// Блок меню пицца "Четыре сезона"

const pizzaFourSeasonsMinus = document.querySelector ('.pizza-four-seasons-minus');
const pizzaFourSeasonsPlus = document.querySelector ('.pizza-four-seasons-plus');
const pizzaFourSeasonsNumber = document.querySelector ('.pizza-four-seasons-number');
const pizzaFourSeasonsOrder = document.querySelector ('.pizza-four-seasons-order'); 
let numberPizzaFourSeasons = 0;

pizzaFourSeasonsPlus.addEventListener('click', () => {
    numberPizzaFourSeasons++;
    pizzaFourSeasonsNumber.innerHTML = `<p>${numberPizzaFourSeasons}<p>`
});

pizzaFourSeasonsMinus.addEventListener('click', () => {
    if (numberPizzaFourSeasons !== 0) {
        numberPizzaFourSeasons--;
        pizzaFourSeasonsNumber.innerHTML = `<p>${numberPizzaFourSeasons}<p>`
    } else {
        numberPizzaFourSeasons = 0;
    }
});

pizzaFourSeasonsOrder.addEventListener('click', () => {
    if (numberPizzaFourSeasons > 0) {
        alert(`Заказано пицца "Четыре сезона", количество - ${numberPizzaFourSeasons}`);
        numberPizzaFourSeasons = 0;
        pizzaFourSeasonsNumber.innerHTML = `<p>${numberPizzaFourSeasons}<p>`
    } else {
        numberPizzaFourSeasons = 0;
    }
});

// Блок меню пицца "Ветчина и грибы"

const pizzaHamMushroomsMinus = document.querySelector ('.pizza-ham-mushrooms-minus');
const pizzaHamMushroomsPlus = document.querySelector ('.pizza-ham-mushrooms-plus');
const pizzaHamMushroomsNumber = document.querySelector ('.pizza-ham-mushrooms-number');
const pizzaHamMushroomsOrder = document.querySelector ('.pizza-ham-mushrooms-order'); 
let numberPizzaHamMushrooms = 0;

pizzaHamMushroomsPlus.addEventListener('click', () => {
    numberPizzaHamMushrooms++;
    pizzaHamMushroomsNumber.innerHTML = `<p>${numberPizzaHamMushrooms}<p>`
});

pizzaHamMushroomsMinus.addEventListener('click', () => {
    if (numberPizzaHamMushrooms !== 0) {
        numberPizzaHamMushrooms--;
        pizzaHamMushroomsNumber.innerHTML = `<p>${numberPizzaHamMushrooms}<p>`
    } else {
        numberPizzaHamMushrooms = 0;
    }
});

pizzaHamMushroomsOrder.addEventListener('click', () => {
    if (numberPizzaHamMushrooms > 0) {
        alert(`Заказано пицца "Ветчина и грибы", количество - ${numberPizzaHamMushrooms}`);
        numberPizzaHamMushrooms = 0;
        pizzaHamMushroomsNumber.innerHTML = `<p>${numberPizzaHamMushrooms}<p>`
    } else {
        numberPizzaHamMushrooms = 0;
    }
});

// Блок меню пицца "Сакура с цыпленком"

const pizzaSakuraChickenMinus = document.querySelector ('.pizza-sakura-chicken-minus');
const pizzaSakuraChickenPlus = document.querySelector ('.pizza-sakura-chicken-plus');
const pizzaSakuraChickenNumber = document.querySelector ('.pizza-sakura-chicken-number');
const pizzaSakuraChickenOrder = document.querySelector ('.pizza-sakura-chicken-order'); 
let numberPizzaSakuraChicken = 0;

pizzaSakuraChickenPlus.addEventListener('click', () => {
    numberPizzaSakuraChicken++;
    pizzaSakuraChickenNumber.innerHTML = `<p>${numberPizzaSakuraChicken}<p>`
});

pizzaSakuraChickenMinus.addEventListener('click', () => {
    if (numberPizzaSakuraChicken !== 0) {
        numberPizzaSakuraChicken--;
        pizzaSakuraChickenNumber.innerHTML = `<p>${numberPizzaSakuraChicken}<p>`
    } else {
        numberPizzaSakuraChicken = 0;
    }
});

pizzaSakuraChickenOrder.addEventListener('click', () => {
    if (numberPizzaSakuraChicken > 0) {
        alert(`Заказано пицца "Сакура с цыпленком", количество - ${numberPizzaSakuraChicken}`);
        numberPizzaSakuraChicken = 0;
        pizzaSakuraChickenNumber.innerHTML = `<p>${numberPizzaSakuraChicken}<p>`
    } else {
        numberPizzaSakuraChicken = 0;
    }
});

// Блок меню пицца "Пеперрони" мобильная версия

const pizzaPeperroniMinusMobile = document.querySelector ('.pizza-peperroni-minus-mobile');
const pizzaPeperroniPlusMobile = document.querySelector ('.pizza-peperroni-plus-mobile');
const pizzaPeperroniNumberMobile = document.querySelector ('.pizza-peperroni-number-mobile');
const pizzaPeperroniOrderMobile = document.querySelector ('.pizza-peperroni-order-mobile'); 
let numberPizzaPeperroniMobile = 0;

pizzaPeperroniPlusMobile.addEventListener('click', () => {
    numberPizzaPeperroniMobile++;
    pizzaPeperroniNumberMobile.innerHTML = `<p>${numberPizzaPeperroniMobile}<p>`
});

pizzaPeperroniMinusMobile.addEventListener('click', () => {
    if (numberPizzaPeperroniMobile !== 0) {
        numberPizzaPeperroniMobile--;
        pizzaPeperroniNumberMobile.innerHTML = `<p>${numberPizzaPeperroniMobile}<p>`
    } else {
        numberPizzaPeperroniMobile = 0;
    }
});

pizzaPeperroniOrderMobile.addEventListener('click', () => {
    if (numberPizzaPeperroniMobile > 0) {
        alert(`Заказано пицца "Пеперрони", количество - ${numberPizzaPeperroniMobile}`);
        numberPizzaPeperroniMobile = 0;
        pizzaPeperroniNumberMobile.innerHTML = `<p>${numberPizzaPeperroniMobile}<p>`
    } else {
        numberPizzaPeperroniMobile = 0;
    }
});

// Блок меню пицца "Четыре сыра" мобильная версия

const pizzaFourCheeseMinusMobile = document.querySelector ('.pizza-four-cheese-minus-mobile');
const pizzaFourCheesePlusMobile = document.querySelector ('.pizza-four-cheese-plus-mobile');
const pizzaFourCheeseNumberMobile = document.querySelector ('.pizza-four-cheese-number-mobile');
const pizzaFourCheeseOrderMobile = document.querySelector ('.pizza-four-cheese-order-mobile'); 
let numberPizzaFourCheeseMobile = 0;

pizzaFourCheesePlusMobile.addEventListener('click', () => {
    numberPizzaFourCheeseMobile++;
    pizzaFourCheeseNumberMobile.innerHTML = `<p>${numberPizzaFourCheeseMobile}<p>`
});

pizzaFourCheeseMinusMobile.addEventListener('click', () => {
    if (numberPizzaFourCheeseMobile !== 0) {
        numberPizzaFourCheeseMobile--;
        pizzaFourCheeseNumberMobile.innerHTML = `<p>${numberPizzaFourCheeseMobile}<p>`
    } else {
        numberPizzaFourCheeseMobile = 0;
    }
});

pizzaFourCheeseOrderMobile.addEventListener('click', () => {
    if (numberPizzaFourCheeseMobile > 0) {
        alert(`Заказано пицца "Четыре сыра", количество - ${numberPizzaFourCheeseMobile}`);
        numberPizzaFourCheeseMobile = 0;
        pizzaFourCheeseNumberMobile.innerHTML = `<p>${numberPizzaFourCheeseMobile}<p>`
    } else {
        numberPizzaFourCheeseMobile = 0;
    }
});

// Блок меню пицца "Маргарита" мобильная версия

const pizzaMargaretMinusMobile = document.querySelector ('.pizza-margaret-minus-mobile');
const pizzaMargaretPlusMobile = document.querySelector ('.pizza-margaret-plus-mobile');
const pizzaMargaretNumberMobile = document.querySelector ('.pizza-margaret-number-mobile');
const pizzaMargaretOrderMobile = document.querySelector ('.pizza-margaret-order-mobile'); 
let numberPizzaMargaretMobile = 0;

pizzaMargaretPlusMobile.addEventListener('click', () => {
    numberPizzaMargaretMobile++;
    pizzaMargaretNumberMobile.innerHTML = `<p>${numberPizzaMargaretMobile}<p>`
});

pizzaMargaretMinusMobile.addEventListener('click', () => {
    if (numberPizzaMargaretMobile !== 0) {
        numberPizzaMargaretMobile--;
        pizzaMargaretNumberMobile.innerHTML = `<p>${numberPizzaMargaretMobile}<p>`
    } else {
        numberPizzaMargaretMobile = 0;
    }
});

pizzaMargaretOrderMobile.addEventListener('click', () => {
    if (numberPizzaMargaretMobile > 0) {
        alert(`Заказано пицца "Маргарита", количество - ${numberPizzaMargaretMobile}`);
        numberPizzaMargaretMobile = 0;
        pizzaMargaretNumberMobile.innerHTML = `<p>${numberPizzaMargaretMobile}<p>`
    } else {
        numberPizzaMargaretMobile = 0;
    }
});

// Блок меню пицца "Четыре сезона" мобильная версия

const pizzaFourSeasonsMinusMobile = document.querySelector ('.pizza-four-seasons-minus-mobile');
const pizzaFourSeasonsPlusMobile = document.querySelector ('.pizza-four-seasons-plus-mobile');
const pizzaFourSeasonsNumberMobile = document.querySelector ('.pizza-four-seasons-number-mobile');
const pizzaFourSeasonsOrderMobile = document.querySelector ('.pizza-four-seasons-order-mobile'); 
let numberPizzaFourSeasonsMobile = 0;

pizzaFourSeasonsPlusMobile.addEventListener('click', () => {
    numberPizzaFourSeasonsMobile++;
    pizzaFourSeasonsNumberMobile.innerHTML = `<p>${numberPizzaFourSeasonsMobile}<p>`
});

pizzaFourSeasonsMinusMobile.addEventListener('click', () => {
    if (numberPizzaFourSeasonsMobile !== 0) {
        numberPizzaFourSeasonsMobile--;
        pizzaFourSeasonsNumberMobile.innerHTML = `<p>${numberPizzaFourSeasonsMobile}<p>`
    } else {
        numberPizzaFourSeasonsMobile = 0;
    }
});

pizzaFourSeasonsOrderMobile.addEventListener('click', () => {
    if (numberPizzaFourSeasonsMobile > 0) {
        alert(`Заказано пицца "Четыре сезона", количество - ${numberPizzaFourSeasonsMobile}`);
        numberPizzaFourSeasonsMobile = 0;
        pizzaFourSeasonsNumberMobile.innerHTML = `<p>${numberPizzaFourSeasonsMobile}<p>`
    } else {
        numberPizzaFourSeasonsMobile = 0;
    }
});

// Блок меню пицца "Ветчина и грибы" мобильная версия

const pizzaHamMushroomsMinusMobile = document.querySelector ('.pizza-ham-mushrooms-minus-mobile');
const pizzaHamMushroomsPlusMobile = document.querySelector ('.pizza-ham-mushrooms-plus-mobile');
const pizzaHamMushroomsNumberMobile = document.querySelector ('.pizza-ham-mushrooms-number-mobile');
const pizzaHamMushroomsOrderMobile = document.querySelector ('.pizza-ham-mushrooms-order-mobile'); 
let numberPizzaHamMushroomsMobile = 0;

pizzaHamMushroomsPlusMobile.addEventListener('click', () => {
    numberPizzaHamMushroomsMobile++;
    pizzaHamMushroomsNumberMobile.innerHTML = `<p>${numberPizzaHamMushroomsMobile}<p>`
});

pizzaHamMushroomsMinusMobile.addEventListener('click', () => {
    if (numberPizzaHamMushroomsMobile !== 0) {
        numberPizzaHamMushroomsMobile--;
        pizzaHamMushroomsNumberMobile.innerHTML = `<p>${numberPizzaHamMushroomsMobile}<p>`
    } else {
        numberPizzaHamMushroomsMobile = 0;
    }
});

pizzaHamMushroomsOrderMobile.addEventListener('click', () => {
    if (numberPizzaHamMushroomsMobile > 0) {
        alert(`Заказано пицца "Ветчина и грибы", количество - ${numberPizzaHamMushroomsMobile}`);
        numberPizzaHamMushroomsMobile = 0;
        pizzaHamMushroomsNumberMobile.innerHTML = `<p>${numberPizzaHamMushroomsMobile}<p>`
    } else {
        numberPizzaHamMushroomsMobile = 0;
    }
});

// Блок меню пицца "Сакура с цыпленком" мобильная версия

const pizzaSakuraChickenMinusMobile = document.querySelector ('.pizza-sakura-chicken-minus-mobile');
const pizzaSakuraChickenPlusMobile = document.querySelector ('.pizza-sakura-chicken-plus-mobile');
const pizzaSakuraChickenNumberMobile = document.querySelector ('.pizza-sakura-chicken-number-mobile');
const pizzaSakuraChickenOrderMobile = document.querySelector ('.pizza-sakura-chicken-order-mobile'); 
let numberPizzaSakuraChickenMobile = 0;

pizzaSakuraChickenPlusMobile.addEventListener('click', () => {
    numberPizzaSakuraChickenMobile++;
    pizzaSakuraChickenNumberMobile.innerHTML = `<p>${numberPizzaSakuraChickenMobile}<p>`
});

pizzaSakuraChickenMinusMobile.addEventListener('click', () => {
    if (numberPizzaSakuraChickenMobile !== 0) {
        numberPizzaSakuraChickenMobile--;
        pizzaSakuraChickenNumberMobile.innerHTML = `<p>${numberPizzaSakuraChickenMobile}<p>`
    } else {
        numberPizzaSakuraChickenMobile = 0;
    }
});

pizzaSakuraChickenOrderMobile.addEventListener('click', () => {
    if (numberPizzaSakuraChickenMobile > 0) {
        alert(`Заказано пицца "Сакура с цыпленком", количество - ${numberPizzaSakuraChickenMobile}`);
        numberPizzaSakuraChickenMobile = 0;
        pizzaSakuraChickenNumberMobile.innerHTML = `<p>${numberPizzaSakuraChickenMobile}<p>`
    } else {
        numberPizzaSakuraChickenMobile = 0;
    }
});