var enter = document.getElementsByName("enter")[0];
var editor = document.getElementsByName("editor")[0];
var reg = document.getElementsByName("reg")[0];
var wynik = document.getElementById("wynik");
enter.addEventListener("click", function (e) {
    var expression = new RegExp(reg.value);
    var text = editor.value;
    wynik.textContent = expression.test(text)
        ? "/" + reg.value + "/ jest poprawne!"
        : "/" + reg.value + "/ jest niepoprawne!";
});
