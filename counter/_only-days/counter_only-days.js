//Установить дату окончания акции
var countDownDate = new Date("Jan 15, 2018 00:00:00").getTime();
var countersList = document.querySelectorAll(".counter_only-days");
//Апдейт оставшегося времени каждую секунду
var x = setInterval(function() {

  //Текущая дата и время
  var now = new Date().getTime();

  //Сколько до окончания акции
  var distance = countDownDate - now;

  //Вычисление дней
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 
  //Вывести результат

  if (days < 10) {
    for (var item of countersList){
      item.innerHTML = "0" + days;
    }
  } else {
    for (var item of countersList){
      item.innerHTML = days;
    }
  }
  

  //Если акция закончилась, вывести текст
  if (distance < 0) {
    clearInterval(x);
    for (var item of countersList){
      item.innerHTML = "00";
    }
  }
}, 1000);