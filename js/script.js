function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function(){
    $(".button-more").click(function(){
        $("html").animate(
            {
              scrollTop: $("#description").offset().top
            },
            1000 //speed
          );      
    });
});

