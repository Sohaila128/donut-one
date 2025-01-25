//===== Back to top =====//
//Get the button
let mybutton = document.querySelector(".back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
AOS.init({
  duration: 2000,  
  once: true,      
});

  //  pure counter
  new PureCounter();

  // let lastScrollY = 0;

  // window.addEventListener("scroll", function () {
  //   const navbar = document.getElementById("navbar");
  //   const langItem = document.getElementById("lang-item");
  //   const langLink = langItem.querySelector("a");
  //   const svgIcon = langLink.querySelector("svg");
  
  //   if (window.scrollY > 50) {
  //     navbar.classList.add("navbar-light");
  //     langLink.classList.add("text-dark"); 
  //     langLink.classList.remove("text-white");  
  //     svgIcon.classList.add("svg-dark");  
  //     svgIcon.classList.remove("svg-light");  
  //   } else {
  //     navbar.classList.remove("hide-navbar", "navbar-light");
  //     langLink.classList.add("text-white"); 
  //     langLink.classList.remove("text-dark"); 
  //     svgIcon.classList.add("svg-light");  
  //     svgIcon.classList.remove("svg-dark");  
  //   }
  
  //   lastScrollY = window.scrollY; 
  // });
  
  document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector(".loader-bg")) {
      window.addEventListener("load", function () {
        const loader = document.querySelector(".loader-bg");
        loader.style.display = "flex";
  
        setTimeout(function () {
          loader.style.display = "none";
          document.body.style.visibility = "visible";
  
          AOS.init({
            once: true,
            duration: 1000,
          });
        }, 2000);
      });
    } else {
      AOS.init({
        once: true,
        duration: 1000,
      });
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const offcanvasLinks = document.querySelectorAll(".offcanvas-link");
  const offcanvas = document.getElementById("offcanvasNavbar");
  offcanvasLinks.forEach(link => {
    link.addEventListener("click", () => {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
      if (bsOffcanvas) {
        bsOffcanvas.hide(); 
      }
    });
  });
});