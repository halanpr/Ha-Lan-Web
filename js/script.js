(function ($) {
  "use strict";

  // init Chocolat light box
  var initChocolat = function () {
    Chocolat(document.querySelectorAll(".image-link"), {
      imageSize: "contain",
      loop: true,
    });
  };

  $(document).ready(function () {
    initChocolat();

    /* Video */
    var $videoSrc;
    $(".play-btn").click(function () {
      $videoSrc = $(this).data("src");
    });

    $("#myModal").on("shown.bs.modal", function (e) {
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });

    $("#myModal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", $videoSrc);
    });

    var swiper = new Swiper(".slider", {
      effect: "fade",
      pagination: {
        el: ".slider-pagination",
        clickable: true,
      },
    });

    var swiper = new Swiper(".testimonial-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".testimonial-pagination",
        clickable: true,
      },
    });

    var swiper = new Swiper(".services-swiper", {
      slidesPerView: 5,
      spaceBetween: 120,
      freeMode: true,
      pagination: {
        el: ".services-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        572: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
      },
    });

    // product single page
    var thumb_slider = new Swiper(".product-thumbnail-slider", {
      autoplay: true,
      loop: true,
      spaceBetween: 8,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    var large_slider = new Swiper(".product-large-slider", {
      autoplay: true,
      loop: true,
      spaceBetween: 10,
      effect: "fade",
      thumbs: {
        swiper: thumb_slider,
      },
    });

    window.addEventListener("load", (event) => {
      //isotope
      $(".isotope-container").isotope({
        // options
        itemSelector: ".item",
        layoutMode: "masonry",
      });

      // Initialize Isotope
      var $container = $(".isotope-container").isotope({
        // options
        itemSelector: ".item",
        layoutMode: "masonry",
      });

      $(document).ready(function () {
        //active button
        $(".filter-button").click(function () {
          $(".filter-button").removeClass("active");
          $(this).addClass("active");
        });
      });

      // Filter items on button click
      $(".filter-button").click(function () {
        var filterValue = $(this).attr("data-filter");
        if (filterValue === "*") {
          // Show all items
          $container.isotope({ filter: "*" });
        } else {
          // Show filtered items
          $container.isotope({ filter: filterValue });
        }
      });
    });
  }); // End of a document
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("#bdNavbar .nav-link");
  const offcanvasElement = document.querySelector("#bdNavbar");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const target = link.getAttribute("href");

      if (target && target !== "#") {
        const offcanvasInstance =
          bootstrap.Offcanvas.getInstance(offcanvasElement);

        if (offcanvasInstance) {
          offcanvasInstance.hide();
          setTimeout(() => {
            document.querySelector(target).scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 300);
        } else {
          document.querySelector(target).scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });
});

(function () {
  emailjs.init("yZxVMI5u1l2rQWqGz");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const emailCustomer = document.getElementById("emailCustomer").value;
    const inputService = document.getElementById("inputService").value;

    if (!fullName || !phoneNumber || !inputService) {
      if (!fullName) {
        document.getElementById("fullNameError").classList.remove("d-none");
      } else {
        document.getElementById("fullNameError").classList.add("d-none");
      }

      if (!phoneNumber) {
        document.getElementById("phoneNumberError").classList.remove("d-none");
      } else {
        document.getElementById("phoneNumberError").classList.add("d-none");
      }

      if (!inputService) {
        document.getElementById("serviceError").classList.remove("d-none");
      } else {
        document.getElementById("serviceError").classList.add("d-none");
      }

      return;
    }

    const templateParams = {
      from_name: fullName,
      phone_number: phoneNumber,
      email: emailCustomer,
      service: inputService,
      to_name: "Hà Lan",
    };

    emailjs.send("service_21pg3pp", "template_h38yy9s", templateParams)
    .then(
      function (response) {
        document.getElementById("successForm").classList.remove("d-none");
        document.getElementById("contact-form").reset();
      },
      function (error) {
        document.getElementById("failForm").classList.remove("d-none");
        console.error(error);
      }
    );
  });

