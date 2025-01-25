// $(document).ready(function () {
//   $('.package-card').each(function () {
//     const sliderFor = $(this).find('.slider-for');
//     const sliderNav = $(this).find('.slider-nav');

//     sliderFor.slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: false,
//       fade: true,
//       asNavFor: sliderNav,
//       lazyLoad: 'ondemand', // Lazy load images
//       speed: 500, // Smooth transitions
//     });

//     sliderNav.slick({
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       asNavFor: sliderFor,
//       dots: false,
//       centerMode: false,
//       focusOnSelect: true,
//       lazyLoad: 'ondemand', // Lazy load images
//       speed: 500, // Smooth transitions
//     });
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  const mainImage = document.querySelectorAll('.main-image img');
  const thumbnails = document.querySelectorAll('.thumbnail');

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {
      const fullImage = this.getAttribute('data-full');

      const parentCard = this.closest('.card');
      const mainImageInCard = parentCard.querySelector('.main-image img');

      mainImageInCard.classList.add('fade-out');

      setTimeout(() => {
        mainImageInCard.src = fullImage;
        mainImageInCard.parentElement.href = fullImage;
        mainImageInCard.classList.remove('fade-out');
      }, 500); 
    });
  });
});
