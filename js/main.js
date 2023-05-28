$(document).ready(function () {
 $('.burger').click(function (e) { 
    e.preventDefault();
    $(".burger").toggleClass('active')
    $('.nav').toggleClass('active')
 });   
});

// $ означает функция
// функция всегда вызывается с помощью круглых скобок ()
// все что мы вызываем через точку - это метод
// метод- это готовое решение
// метод может содержать внутри себя функцию