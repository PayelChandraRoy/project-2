const swiper =new Swiper('.slider-wrapper', {
    loop:true,
    grabCursor:true,
     clickable: true,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
       dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        0:{
            slidesPerview:1
        },
        768:{
            slidesPerview:2
        },
        1024:{
            slidesPerview:3
        },
    }
  
   
  });