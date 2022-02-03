import i18Obj from "./translate.js";
import {
  videoContainer,
  videoPlayer,
  controlBack,
  controlForward,
  controlMute,
  controlPlay,
  controlProgress,
  controlVolume,
  ready,
  isPlaying,
  toBack,
  progressControl,
  toForward,
  isMuted,
  volumeControl
} from "./player.js";
//Sidebar
const menuButton = document.querySelector(".adapt-menu-button")
const menuLink = document.querySelector(".adapt-menu-navigation")
const navLinks = document.querySelectorAll(".adapt-menu-link")
//Select language
const langSwitchBtn = document.querySelectorAll(".switch-lang__text")
const langEn = document.querySelector(".english")
const langRu = document.querySelector(".russian")
const translateData = document.querySelectorAll("[data-i18n]")
//Select theme
const themeBtn = document.querySelector(".switch-theme")
const themeSwitchImg = document.querySelector(".switch-theme__icon")

const iconLogo = document.querySelector(".logo")
const socialInst = document.querySelector(".instagram")
const socialFb = document.querySelector(".facebook")
const socialTw = document.querySelector(".twitter")
const socialPin = document.querySelector(".pinterest")
//Portfolio
const portfolioBtnContainer = document.querySelector(".portfolio-button-container")
const portfolioBtn = document.querySelectorAll(".portfolio-button")
const portfolioImages = document.querySelectorAll(".portfolio-container__image")
//Variables
let lang = 'EN'
let theme = 'dark'

//Event listeners
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
// Video
videoPlayer.addEventListener("error", () => controlPlay.style.background = "url(\"./assets/svg/play.svg\") no-repeat center center");
videoPlayer.addEventListener("ended", () => controlPlay.style.background = "url(\"./assets/svg/play.svg\") no-repeat center center");
videoPlayer.addEventListener("canplaythrough", ready);
controlPlay.addEventListener("click", isPlaying);
controlBack.addEventListener("click", toBack);
controlProgress.addEventListener("input", progressControl);
controlForward.addEventListener("click", toForward);
controlMute.addEventListener("click", isMuted);
controlVolume.addEventListener("input", volumeControl);

preloadImages()

//Sidebar
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

//Select language
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

//Select theme
function switchTheme() {
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

//Portfolio
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

console.log("1. Смена изображений в секции portfolio [+25]\n" +
  "  [x] при кликах по кнопкам Winter, Spring, Summer, Autumn в секции portfolio отображаются изображения из папки с соответствующим названием +20\n" +
  "  [x] кнопка, по которой кликнули, становится активной т.е. выделяется стилем. Другие кнопки при этом будут неактивными +5\n" +
  "2. Перевод страницы на два языка [+25]\n" +
  "  [x] при клике по надписи ru англоязычная страница переводится на русский язык +10\n" +
  "  [x] при клике по надписи en русскоязычная страница переводится на английский язык +10\n" +
  "  [x] надписи en или ru, соответствующие текущему языку страницы, становятся активными т.е. выделяются стилем +5\n" +
  "3. Переключение светлой и тёмной темы [+25]\n" +
  "  На страницу добавлен переключатель при клике по которому:\n" +
  "  [x] тёмная тема приложения сменяется светлой +10\n" +
  "  [x] светлая тема приложения сменяется тёмной +10\n" +
  "  [x] после смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) +5\n" +
  "4. Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы [+5]\n" +
  "5. Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике [+5]\n" +
  "Итого: [+85]")