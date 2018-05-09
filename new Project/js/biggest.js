  var elem = document.querySelector('.parallax');

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    $('.opc').css({
        'opacity': (((height - scrollTop) / height) - .2), 
    });
});




function asdf() {
    console.log("clicked");
    alert("you now have the big gay");
}
          var open = false;

function popDown(){
    console.log("=====================")
    console.log("before = " + open);
    if (open == false){
    document.getElementById("scale").style.display = "block";
    document.getElementById("rotate").classList.remove("top-reverse");
    document.getElementById("scale").classList.remove("scale-down");
    document.getElementById("move").classList.remove("move-down");
        
    document.getElementById("rotate").classList.add("top-active");
    document.getElementById("scale").classList.add("scale-up");
    document.getElementById("move").classList.add("move-up");

    open = true;
    }
    else{
            document.getElementById("scale").style.display = "block";
    document.getElementById("rotate").classList.remove("top-active");        
    document.getElementById("scale").classList.remove("scale-up");
    document.getElementById("move").classList.remove("move-up");
        
    document.getElementById("rotate").classList.add("top-reverse");
    document.getElementById("scale").classList.add("scale-down");
    document.getElementById("move").classList.add("move-down");
    open = false;
//    setTimeout(function(){  document.getElementById("overlay").style.display = "none"; }, 3000);

    }
    console.log("after = " + open);
}



   