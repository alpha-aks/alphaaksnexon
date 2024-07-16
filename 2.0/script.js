const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  
  function page4Animation() {
    var elemC = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-image");
  
    elemC.addEventListener("mouseenter", function () {
      fixed.style.display = "block";
    });
  
    elemC.addEventListener("mouseleave", function () {
      fixed.style.display = "none";
    });
  
    var elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
      e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`;
      });
    });
  }
  
  function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100,
    });
  }
  
  function loaderAnimation() {
    var loader = document.querySelector("#loader");
    setTimeout(function () {
      loader.style.top = "-100%";
    }, 4000);
  }
  
  swiperAnimation();
  page4Animation();
  loaderAnimation();
  
  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");
    const form = document.getElementById("form");
  
    // Show modal on page load
    modal.style.display = "flex";
  
    // Close modal when close button is clicked
    closeButton.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    // Close modal when clicking outside of it
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  
    // Form submission
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
  
      try {
        const response = await fetch("/form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, phone }),
        });
  
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
  
        console.log("Form submitted successfully.");
        modal.style.display = "none";
      } catch (error) {
        console.error("Error submitting form:", error);
      }
  
      var loader = document.querySelector("#loader");
      setTimeout(function () {
        loader.style.top = "-100%";
      }, 3000);
    });
  });
  