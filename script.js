
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

    function countLetter() {
        document.getElementById('count-letter').innerHTML = elem.value.length;
    }

    function countWord() {
        var length = elem.value.split(/[^\s]+/).length - 1;
        document.getElementById('count-word').innerHTML = length;
    }

    function mouseOver() {
        document.querySelector(".count-connected-first").style.backgroundColor =  "#58ACE3";
        document.querySelector(".count-connected-second").style.backgroundColor =  "#FFC930";
      }
      
    function mouseOut() {
        document.querySelector(".count-connected-first").style.backgroundColor =  "#FFC930";
        document.querySelector(".count-connected-second").style.backgroundColor =  "#58ACE3";
      }
    document.querySelector(".btn1").addEventListener("click", UpperCase);
    document.querySelector(".btn2").addEventListener("click", LowerCase);
    document.querySelector(".btn3").addEventListener("click", SentenceCase);
    document.querySelector(".btn4").addEventListener("click", TitleCase);
    document.querySelector(".btn5").addEventListener("click", CamelCase);
    document.querySelector(".btn6").addEventListener("click", ClearTextarea);
    elem.addEventListener("input", countLetter);
    elem.addEventListener("input", countWord);
    document.querySelector(".count-connected-first").addEventListener("mouseover", mouseOver);
    document.querySelector(".count-connected-first").addEventListener("mouseout", mouseOut);
    document.querySelector(".count-connected-second").addEventListener("mouseover", mouseOver);
    document.querySelector(".count-connected-second").addEventListener("mouseout", mouseOut);

})();