window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("backtotop").style.display = "block";
    }
     else {
        document.getElementById("backtotop").style.display = "none";
    }
    
}

const mainSubmit = document.getElementById("main_submit");
const mainLink = document.getElementById("main_link");

mainSubmit.addEventListener("click", function(event) {
    event.preventDefault();
    mainLink.style.display = "block";
});