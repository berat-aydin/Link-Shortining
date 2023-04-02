window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("backtotop").style.display = "block";
    }

     else {
        document.getElementById("backtotop").style.display = "none";
    }
    
}

window.onload = function() {
    var backtotop = document.getElementById("backtotop");
    backtotop.style.bottom = "9rem";
    backtotop.style.display = "none";
}