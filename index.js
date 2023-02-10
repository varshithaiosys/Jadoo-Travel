$('.main-cta a.fancy').fancybox({
  caption : function( instance, item ) {
    return $(this).parent().find('.btn-text').html();
  }
});


/*------ header languagswitcher ------*/

$(document).ready(function(){
  $(".header li.lists-drp").click(function(){
    $(".header li.lists-drp ul.dpn").toggleClass("show");
  });
});



/*------ header language switcher ----*/

/*--- fixed header starts here ----- */


$(window).scroll(function(){
  if ($(this).scrollTop() > 0) {
     $('.header').addClass('fixed');
  } else {
     $('.header').removeClass('fixed');
  }
});


/*------ fixed Header ends Here----*/


/*------- mobile responsive  starts from here --*/

function onClickMenu(){
  document.getElementById("menu").classList.toggle("icon");
  document.getElementById("nav").classList.toggle("change");
}





/*-------*/