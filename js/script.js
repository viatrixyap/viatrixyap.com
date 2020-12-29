const btnHamburger = document.querySelector('#btnHamburger');

btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(btnHamburger.classList.contains('open')){
        btnHamburger.classList.remove('open');
    }

    else {
        btnHamburger.classList.add('open');
    }
});


/*$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if(scroll > 0){
        headerScroll.classList.add('active');
    }
    else {
        headerScroll.classList.remove('active');
    }
});*/

/*$(window).scroll(function(){
    if ($(window).scrollTop() >= 30) {
       $('header').addClass('shadow-header');
    }
    else {
       $('header').removeClass('shadow-header');
    }
});*/

      window.addEventListener('scroll',(e)=>{
        const header = document.querySelector('.header');
        if(window.pageYOffset>0){
          header.classList.add("active");
        }else{
          header.classList.remove("active");
        }
      });
    