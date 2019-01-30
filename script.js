
(() => {
    const elem = document.getElementById('textArea');

    function UpperCase() {
        elem.value = elem.value.toUpperCase();
    }
    function LowerCase() {
        elem.value = elem.value.toLowerCase();
    }
    function SentenceCase() {
        elem.value = elem.value.charAt(0).toUpperCase() + elem.value.slice(1);
    }
    function TitleCase() {
        elem.value = elem.value.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
    function CamelCase() {
        elem.value = elem.value.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
        elem.value = elem.value.replace(/ +/g, "");
    }
    function ClearTextarea() {
        elem.value = "";

    }
    document.querySelector(".btn1").addEventListener("click", UpperCase);
    document.querySelector(".btn2").addEventListener("click", LowerCase);
    document.querySelector(".btn3").addEventListener("click", SentenceCase);
    document.querySelector(".btn4").addEventListener("click", TitleCase);
    document.querySelector(".btn5").addEventListener("click", CamelCase);
    document.querySelector(".btn6").addEventListener("click", ClearTextarea);


})();