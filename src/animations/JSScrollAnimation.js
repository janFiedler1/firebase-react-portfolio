function parallax() {
    var s = document.getElementById("floater");
  var yPos = 0 - window.pageYOffset/5;  
  s.style.top = 50 + yPos + "%"; }

window.addEventListener("scroll", function(){
    parallax(); 
});

//window.addEventListener("scroll", scrollHandler);

//const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
//const endOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight;