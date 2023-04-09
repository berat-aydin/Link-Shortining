window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("backtotop").style.display = "block";
    }

     else {
        document.getElementById("backtotop").style.display = "none";
    }

}