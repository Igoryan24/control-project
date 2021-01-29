//mobile menu

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".menu");

mobileMenu.addEventListener("click",function() {
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu");
    }

})

//TABS

let tabItems = document.querySelectorAll(".tab-title-item");
let tabContent = document.querySelectorAll(".tab-content");
let tabsWrap = document.querySelector(".tab-title-items");

function hideTabsContent() {
    tabContent.forEach(tab => {
        tab.classList.add("hide");
        tab.classList.remove("show")
    })

    tabItems.forEach(item => {
        item.classList.remove("active");
    })
}

function showTabsContent(i = 0) {
    tabContent[i].classList.add("show");
    tabContent[i].classList.remove("hide");
    tabItems[i].classList.add("active");
}

hideTabsContent()
showTabsContent()

tabsWrap.addEventListener("click", function(e) {
    let target = e.target;

    if(target.classList.contains("tab-title-item")) {
        tabItems.forEach((item, i) => {
            if(target == item) {
                hideTabsContent();
                showTabsContent(i);
            }
        })
    }
});

// Slider 
$(".slider-block").slick({
  asNavFor: '.slider-block-2',
    /*dots:true,*/
    autoplay:true,
    autoplaySpeed: 5000,
    arrows: true,
    /*speed: 1000,*/
    /*cssEase: 'ease-in',*/
  
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    /*centerMode:true,
    centerPadding: '25px',
    /*infinite: false,
    edgeFriction: '0.5',*/
    /*pauseOnDotsHover: true,
    /*vertical: true,
    rows: 2,
    slidesToShow: 3,
    slidesToScroll: 3,*/
    zIndex: 5,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        }
    }]
});
$(".slider-block-2").slick({
  asNavFor: '.slider-block',
  focusOnSelect: true,
  dots:true,
  /*autoplaySpeed: 2000,*/
  /*speed: 1000,*/
  centerMode: true,
  centerPadding: '40px',
  slidesToShow: 7,
  /*slidesToScroll: 3,*/
  arrows: false,
  zIndex: 5,
  responsive: [
      {
        breakpoint: 960,
        settings: {
          
          /*slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: true,
          centerPadding: '40px',
          /*infinite: true,
          dots: true*/
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        }
      }
    ]
});







