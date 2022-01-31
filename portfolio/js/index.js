import i18Obj from "./translate.js";

const menuButton = document.querySelector(".adapt-menu-button")
const menuLink = document.querySelector(".adapt-menu-navigation")
const navLinks = document.querySelectorAll(".adapt-menu-link")

const langSwitchBtn = document.querySelectorAll(".switch-lang__text")
const langEn = document.querySelector(".english")
const langRu = document.querySelector(".russian")


const themeBtn = document.querySelector(".switch-theme")
const themeSwitchImg = document.querySelector(".switch-theme__icon")

const translateData = document.querySelectorAll("[data-i18n]")

const portfolioBtnContainer = document.querySelector(".portfolio-button-container")
const portfolioBtn = document.querySelectorAll(".portfolio-button")
const portfolioImages = document.querySelectorAll(".portfolio-container__image")

const iconLogo = document.querySelector(".logo")
const socialInst = document.querySelector(".instagram")
const socialFb = document.querySelector(".facebook")
const socialTw = document.querySelector(".twitter")
const socialPin = document.querySelector(".pinterest")

let lang = 'EN'
let theme = 'dark'

window.addEventListener('load', getLocaleStorage);
window.addEventListener('beforeunload', setLocaleStorage);
window.addEventListener('scroll', closeMenuOnScroll);
menuButton.addEventListener('click', openMenu);
langEn.addEventListener('click', () => getTranslate('EN'));
langRu.addEventListener('click', () => getTranslate('RU'));
themeBtn.addEventListener('click', () => {
  if(themeSwitchImg.src.includes("sun")) {
    theme = 'dark'
    switchTheme(theme)
  } else if (themeSwitchImg.src.includes("moon")) {
    theme = 'light'
    switchTheme(theme)
  }
});
navLinks.forEach((element) => element.addEventListener('click', closeMenu));
portfolioBtnContainer.addEventListener("click", changePortfolio);

preloadImages()

// Burger-menu
function openMenu() {
  menuButton.classList.toggle('adapt-menu-button_open')
  menuLink.classList.toggle('adapt-menu-navigation_open')
}

function closeMenu(event) {
  if (event.target.classList.contains('adapt-menu-link')) {
    menuButton.classList.remove('adapt-menu-button_open')
    menuLink.classList.remove('adapt-menu-navigation_open')
  }
}

function closeMenuOnScroll() {
  menuButton.classList.remove('adapt-menu-button_open')
  menuLink.classList.remove('adapt-menu-navigation_open')
}

//Language
function getTranslate() {
  langSwitchBtn.forEach(element => {
    element.classList.remove('lang_active')
  })
  if (arguments[0] === 'EN') {
    lang = 'EN'
    langEn.classList.add('lang_active')
  } else if (arguments[0] === 'RU') {
    lang = 'RU'
    langRu.classList.add('lang_active')
  }
  translateData.forEach(element => {
    if (element.placeholder) {
      element.placeholder = i18Obj[arguments[0]][element.dataset.i18n]
    }
    element.textContent = ""
    element.textContent = i18Obj[arguments[0]][element.dataset.i18n]
  })
}

//Theme
function switchTheme() {
  console.log(arguments)
  if (theme === 'dark') {
    themeSwitchImg.setAttribute('src', "./assets/svg/moon.svg")
    document.documentElement.style.setProperty('--body-color', '#fff')
    document.documentElement.style.setProperty('--text-color', '#000')
    document.documentElement.style.setProperty('--text-gold-black', '#000')
    document.documentElement.style.setProperty('--hover-color', '#000')
    document.documentElement.style.setProperty('--lang-active', '#fff')
    document.documentElement.style.setProperty('--bg-placeholder', 'rgba(255, 255, 255, 0.5)')
    document.documentElement.style.setProperty('--bg-hero', 'url("../assets/img/bg-hero-light.jpg")')
    document.documentElement.style.setProperty('--bg-hero-tablet', 'url("../assets/img/bg-hero-tablet-light.jpg")')
    document.documentElement.style.setProperty('--bg-contact', 'url("../assets/img/bg-contacts-light.jpg")')
    document.documentElement.style.setProperty('--bg-sidebar', '#fff')
    document.documentElement.style.setProperty('--bg-sidebar-btn', '#000')
    document.documentElement.style.setProperty('--bg-btn-bordered', '#BDAE82')
    document.documentElement.style.setProperty('--bg-btn-colored', '#fff')
    document.documentElement.style.setProperty('--text-btn-active', '#BDAE82')
    iconLogo.src = './assets/svg/logo-black.svg'
    socialInst.src = './assets/svg/inst-black.svg'
    socialFb.src = './assets/svg/fb-black.svg'
    socialTw.src = './assets/svg/tw-black.svg'
    socialPin.src = './assets/svg/pin-black.svg'
  } else if (theme === 'light') {
    themeSwitchImg.setAttribute('src', "./assets/svg/sun.svg")
    document.documentElement.style.setProperty('--body-color', '#000')
    document.documentElement.style.setProperty('--text-color', '#fff')
    document.documentElement.style.setProperty('--text-gold-black', '#BDAE82')
    document.documentElement.style.setProperty('--hover-color', '#fff')
    document.documentElement.style.setProperty('--lang-active', '#BDAE82')
    document.documentElement.style.setProperty('--bg-placeholder', 'rgba(0, 0, 0, 0.5)')
    document.documentElement.style.setProperty('--bg-hero', 'url("../assets/img/bg-hero.jpg")')
    document.documentElement.style.setProperty('--bg-hero-tablet', 'url("../assets/img/bg-hero-tablet.jpg")')
    document.documentElement.style.setProperty('--bg-contact', 'url("../assets/img/bg-contacts.jpg")')
    document.documentElement.style.setProperty('--bg-sidebar', '#000')
    document.documentElement.style.setProperty('--bg-sidebar-btn', '#fff')
    document.documentElement.style.setProperty('--bg-btn-bordered', '#000')
    document.documentElement.style.setProperty('--bg-btn-colored', '#BDAE82')
    document.documentElement.style.setProperty('--text-btn-active', '#fff')
    iconLogo.src = './assets/svg/logo.svg'
    socialInst.src = './assets/svg/inst.svg'
    socialFb.src = './assets/svg/fb.svg'
    socialTw.src = './assets/svg/tw.svg'
    socialPin.src = './assets/svg/pin.svg'
  }
}

// Portfolio
function changePortfolio(event) {
  changeClassActive(event)
  changeImage(event)
}

function changeClassActive(event) {
  if (event.target.classList.contains('portfolio-button')) {
    portfolioBtn.forEach((element) => {
      element.classList.remove('button-bordered_active')
    })
    event.target.classList.add('button-bordered_active')
  }
}

function changeImage(event) {
  if (event.target.classList.contains('portfolio-button')) {
    portfolioImages.forEach((element, index) => {
      element.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`
    })
  }
}

function preloadImages() {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  seasons.forEach(element => {
    const img = new Image();
    for (let i = 1; i <= 6; i++) {
      img.src = `./assets/img/${element}/${i}.jpg`
    }
    img.src = './assets/img/bg-hero-light.jpg'
    img.src = './assets/img/bg-contacts-light.jpg'
  })
}

//LocaleStorage
//Language
function setLocaleStorage() {
  localStorage.setItem('lang', lang);
  localStorage.setItem('theme', theme);
}

function getLocaleStorage() {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang')
    getTranslate(lang)
  }
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
    switchTheme(theme)
  }
}

console.log("1.Вёрстка соответствует макету. Ширина экрана 768px +48\n" +
  "блок <header> +6\n" +
  "- секция hero +6\n" +
  "- секция skills +6\n" +
  "- секция portfolio +6\n" +
  "- секция video +6\n" +
  "- секция price +6\n" +
  "- секция contacts +6\n" +
  "- блок <footer>\n" +
  "2.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +15\n" +
  "- нет полосы прокрутки при ширине страницы от 1440рх до 768рх +5\n" +
  "- нет полосы прокрутки при ширине страницы от 768рх до 480рх +5\n" +
  "- нет полосы прокрутки при ширине страницы от 480рх до 320рх +5\n" +
  "3.На ширине экрана 768рх и меньше реализовано адаптивное меню +22\n" +
  "- при ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка +2\n" +
  "- при нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик +4\n" +
  "- высота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана +4\n" +
  "- при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку +4\n" +
  "- бургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений +2\n" +
  "- ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2\n" +
  "- при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку +4\n" +
  "[ Итого: 85 баллов ]")