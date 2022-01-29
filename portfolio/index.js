const menuButton = document.querySelector(".adapt-menu-button")
const menuLink = document.querySelector(".adapt-menu-navigation")
const navLinks = document.querySelectorAll(".adapt-menu-link")
const portfolioBtnContainer = document.querySelector(".portfolio-button-container")
const portfolioBtn = document.querySelectorAll(".portfolio-button")

menuButton.addEventListener("click", openMenu);
navLinks.forEach((element) => element.addEventListener('click', closeMenu));
window.addEventListener('scroll', closeMenuOnScroll)

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

// Portfolio
function changeImage(event) {
  if(event.target.classList.contains('portfolio-button')) {

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