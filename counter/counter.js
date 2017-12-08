//Установить дату окончания акции
var countDownDate = new Date("Jan 31, 2018 00:00:00").getTime();

//Апдейт оставшегося времени каждую секунду
var x = setInterval(function() {

  //Текущая дата и время
  var now = new Date().getTime();

  //Сколько до окончания акции
  var distance = countDownDate - now;

  //Вычисление дней, часов, минут и секунд
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //Вывести результат
  document.querySelector(".counter__days").innerHTML = days + " дней";
  document.querySelector(".counter__time").innerHTML = hours + " : "
  + minutes + " : " + seconds;

  //Если акция закончилась, вывести текст
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".counter__days").innerHTML = "Акция закончилась";
    document.querySelector(".counter__time").innerHTML = "00 : 00 : 00";
  }
}, 1000);