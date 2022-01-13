const menuButton = document.querySelector(".adapt-menu-button")
const menuLink = document.querySelector(".adapt-menu-navigation")
const navLinks = document.querySelectorAll(".navigation-link")

menuButton.addEventListener("click", openMenu);
navLinks.forEach((element) => element.addEventListener('click', closeMenu));

function openMenu() {
  menuButton.classList.toggle('adapt-menu-button_open')
  menuLink.classList.toggle('adapt-menu-navigation_open')
}

function closeMenu(event) {
  if (event.target.classList.contains('navigation-link')) {
    menuButton.classList.remove('adapt-menu-button_open')
    menuLink.classList.remove('adapt-menu-navigation_open')
  }
}

console.log("Вёрстка валидная +10\n" +
  "Вёрстка семантическая +20\n" +
  "В коде странице присутствуют следующие элементы (указано минимальное количество, может быть больше):\n" +
  "- <header>, <main>, <footer> +2\n" +
  "- шесть элементов <section> (по количеству секций) +2\n" +
  "- только один заголовок <h1> +2\n" +
  "- пять заголовков <h2> (количество секций минус одна, у которой заголовок <h1>) +2\n" +
  "- один элемент <nav> (панель навигации) +2\n" +
  "- два списка ul > li > a (панель навигации, ссылки на соцсети) +2\n" +
  "- десять кнопок <button> +2\n" +
  "- два инпута: <input type=\"email\"> и <input type=\"tel\"> +2\n" +
  "- один элемент <textarea> +2\n" +
  "- три атрибута placeholder +2\n" +
  "Вёрстка соответствует макету +48:\n" +
  "- блок <header> +6\n" +
  "- секция hero +6\n" +
  "- секция skills +6\n" +
  "- секция portfolio +6\n" +
  "- секция video +6\n" +
  "- секция price +6\n" +
  "- секция contacts +6\n" +
  "- блок <footer> +6\n" +
  "Требования к css + 12:\n" +
  "- для построения сетки используются флексы или гриды +2\n" +
  "- при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\n" +
  "- фоновый цвет тянется на всю ширину страницы +2\n" +
  "- иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2\n" +
  "- изображения добавлены в формате .jpg +2\n" +
  "- есть favicon +2\n" +
  "Интерактивность, реализуемая через css +20:\n" +
  "- плавная прокрутка по якорям +5\n" +
  "- ссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5\n" +
  "- интерактивность включает в себя не только изменение внешнего вида курсора +5\n" +
  "- обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5\n" +
  "[ Итого: 110 баллов ]")