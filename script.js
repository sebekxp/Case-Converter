
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
    function SnakeCase() {
        elem.value = elem.value.replace(/\s/g, '_');
    }
    
    function ClearTextarea() {
        elem.value = "";
        document.querySelector('.btn6').classList.add("animation");
        setTimeout(() => document.querySelector('.btn6').classList.remove("animation"), 500);
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

    function changeTimeBtn(btn){
        document.getElementById(btn).style.transform = "translateX(-130px)"
    }
    function mouseOverBtn(btn){
        document.getElementById(btn).style.transform = "translateX(0)"
    }
    function mouseOutBtn(btn){
        document.getElementById(btn).style.transform = "translateX(-130px)"
    }

    /* Change case */
    document.querySelector(".btn1").addEventListener("click", UpperCase);
    document.querySelector(".btn2").addEventListener("click", LowerCase);
    document.querySelector(".btn3").addEventListener("click", SentenceCase);
    document.querySelector(".btn4").addEventListener("click", TitleCase);
    document.querySelector(".btn5").addEventListener("click", CamelCase);
    document.querySelector(".btn7").addEventListener("click", SnakeCase);
    document.querySelector(".btn6").addEventListener("click", ClearTextarea);
   
    /* Counting letter word listener */
    elem.addEventListener("input", countLetter);
    elem.addEventListener("input", countWord);
    
    /* Change color in counting button */
    document.querySelector(".count-connected-first").addEventListener("mouseover", mouseOver);
    document.querySelector(".count-connected-first").addEventListener("mouseout", mouseOut);
    document.querySelector(".count-connected-second").addEventListener("mouseover", mouseOver);
    document.querySelector(".count-connected-second").addEventListener("mouseout", mouseOut);
    
    /* Hoover button effect*/
    document.querySelector("#btn1").addEventListener("mouseout", () => mouseOutBtn("btn1"));
    document.querySelector("#btn2").addEventListener("mouseover", () => mouseOverBtn("btn2"));
    document.querySelector("#btn2").addEventListener("mouseout", () => mouseOutBtn("btn2"));
    document.querySelector("#btn3").addEventListener("mouseover", () => mouseOverBtn("btn3"));
    document.querySelector("#btn3").addEventListener("mouseout", () => mouseOutBtn("btn3"));
    document.querySelector("#btn4").addEventListener("mouseover", () => mouseOverBtn("btn4"));
    document.querySelector("#btn4").addEventListener("mouseout", () => mouseOutBtn("btn4"));
    document.querySelector("#btn5").addEventListener("mouseover", () => mouseOverBtn("btn5"));
    document.querySelector("#btn5").addEventListener("mouseout", () => mouseOutBtn("btn5"));
    document.querySelector("#btn6").addEventListener("mouseover", () => mouseOverBtn("btn6"));
    document.querySelector("#btn6").addEventListener("mouseout", () => mouseOutBtn("btn6"));
    document.querySelector("#btn7").addEventListener("mouseover", () => mouseOverBtn("btn7"));
    document.querySelector("#btn7").addEventListener("mouseout", () => mouseOutBtn("btn7"));
    
    /* Performing the function after some time */
    setTimeout(() => changeTimeBtn("btn1"), 500);
    setTimeout(() => changeTimeBtn("btn2"), 600);
    setTimeout(() => changeTimeBtn("btn3"), 700);
    setTimeout(() => changeTimeBtn("btn4"), 800);
    setTimeout(() => changeTimeBtn("btn5"), 900);
    setTimeout(() => changeTimeBtn("btn7"), 1000);
    setTimeout(() => changeTimeBtn("btn6"), 1100);

    var arrLang = {
        'pl' : {
            'heading' : 'Konwertuj dowolny tekst',
            'countLetter' : 'Liczba znaków: ',
            'countWord' : 'Liczba słów: ',
            'placeholder' : 'Wpisz lub wklej twój tekst tutaj...'
        },
        'en' : {
            'heading' : 'Convert any text',
            'countLetter' : 'Character count: ',
            'countWord' : 'Word count: ',
            'placeholder' : 'Type or paste your text here...'
        }
    };

    $(function(){
        $('.translate').click(function(){
           var lang =$(this).attr('id');
            
            $('.lang').each(function(){
             $(this).text(arrLang[lang][$(this).attr('key')])   
            });
            $('.langtextarea').attr('placeholder', arrLang[lang]['placeholder']);
        });
    });

})();