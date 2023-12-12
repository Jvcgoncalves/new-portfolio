export async function addCarousel(){
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1, // show a main slide and a half of the others to atract to see more

    loop: false,

    spaceBetween:10,

    centeredSlides:false,

    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    effect: 'coverflow',
      coverflowEffect: {
        rotate: -15,
      },

    breakpoints: {
      // when window width is >= 320px
      1024: {
        slidesPerView: 1.5,
        spaceBetween:32,
        centeredSlides:true,  
      },
      794: {
        slidesPerView: 1.25,
        spaceBetween:24,
        centeredSlides:true,
      },
      
    }
  });
}