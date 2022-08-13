const target = document.querySelectorAll('[data-anime]');


function animeScroll () {
    const windowTop= window.pageYOffset;
    target.forEach(function(e){
        if((windowTop) > 400){
            e.classList.add('animate');
            e.classList.remove('animateoff');
            e.classList.remove('hidden');
        }
        else{
            e.classList.add('animateoff');
            e.classList.remove('animate');   
        }
    })
}

animeScroll ();

window.addEventListener('scroll', function(){
    animeScroll();
})