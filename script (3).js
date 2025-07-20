//Создаем переменную , в которую положим кнопку сменить тему
let button1 = document.getElementById("theme");
let body = document.body;//Получаем доступ к тегу body для изменения стилей, цвета и т.д.
//Создаем обработчик событий для кнопки
//При нажатии на кнопку будет срабатывать функция, которая будет менять стили нашего body со светлого на темный и обратно
button1.addEventListener("click",() => {
  body.classList.toggle('light');
  body.classList.toggle('dark');
});
































  









