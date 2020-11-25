const slide = document.querySelector('.slide');
const images = document.querySelectorAll('.slide img'); 

// let firstClone = document.getElementById('#firstClone');
// let lastClone  = document.getElementById('#lastClone');

// buttons 
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// counter 

let counter = 1; 
const size = images[0].clientWidth; 

slide.style.transform = 'translateX(' + (-size * counter) + 'px)';



// Button listeners 

nextBtn.addEventListener('click', ()=> {
   if(counter >= images.length -1) return; 
 slide.style.transition = "transform 0.6s ease-in-out"; 
 counter++; 
 slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', ()=> {
    if(counter <= 0) return; 
    slide.style.transition = "transform 0.6s ease-in-out"; 
    counter--; 
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
   });

slide.addEventListener('transitionend', ()=> {
    if(images[counter].id === ('lastClone')){
        slide.style.transition = "none"; 
        counter = images.length -2 ; 
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(images[counter].id === ('firstClone')){
        slide.style.transition = "none"; 
        counter = images.length - counter; 
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});