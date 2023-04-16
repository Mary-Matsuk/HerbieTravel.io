// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    sectionId = current.getAttribute("id");

    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}



var swiper = new Swiper(".partners", {
      // slidesPerView: 3,
      // centeredSlides: true,


      spaceBetween: 30,
          loop: true,
      grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },


     breakpoints: {
            768: {
            slidesPerView: 2,
            // spaceBetweenSlides: 30
        },
             992: {
            slidesPerView: 3,
            // spaceBetweenSlides: 40
        },
          1600: {
            slidesPerView: 4,
            // spaceBetweenSlides: 40
        }
    }
    });


// ############################

    var swiper = new Swiper(".mySwiperCity", {
      watchSlidesProgress: true,
        direction: "horizontal",
      slidesPerView: 1,
         keyboard: {
        enabled: true,
      },
         scrollbar: {
        el: ".swiper-scrollbar",
      },
          breakpoints: {
            768: {
            slidesPerView: 2,
            // spaceBetweenSlides: 30
        },
             992: {
            slidesPerView: 3,
            // spaceBetweenSlides: 40
        },
               1600: {
            slidesPerView: 4,
            // spaceBetweenSlides: 40
        }
    }
    });


