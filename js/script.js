function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function(){
    $(".button-more").click(function(){
        $(".section-description").addClass("fly");
        $("html").animate(
            {
              scrollTop: $(".section-description").offset().top
            },
            1000 //speed
          );      
    });
});



$(window).scroll(function () {
    const scrollTop = $(window).scrollTop();

    if (scrollTop == 400) {
        $(".section-description").addClass("fly");
        console.log('check');
    }

    if (scrollTop == 1400) {
        $(".ourworks-image").addClass("animate");
        console.log('check');
    }
});

