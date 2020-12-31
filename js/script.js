const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')){ //close hamburger menu
        body.classList.remove('noScroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }

    else { //open hamburger menu
        body.classList.add('noScroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
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
