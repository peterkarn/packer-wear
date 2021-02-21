const navToggle = document.querySelector(".nav__toggle"),
  navWrapper = document.querySelector(".nav__wrapper"),
  navIcon = document.querySelector('.nav__icon'),
  header = document.querySelector('.site-header');

let scrollpos = window.scrollY;

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
    navIcon.classList.remove('open');
    document.body.style.overflow = "";
    document.ontouchmove = function (e) {
      return true;
    }
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
    navIcon.classList.add('open');
    document.body.style.overflow = "hidden";
    document.ontouchmove = function (e) {
      e.preventDefault;
    }
  }
});

navWrapper.addEventListener('click', () => {
  document.body.style.overflow = "";
  navWrapper.classList.remove("active");
  navIcon.classList.remove('open');
});

function add_class_on_scroll() {
  header.classList.add("scrollable");
}

function remove_class_on_scroll() {
  header.classList.remove("scrollable");
}

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;
  if (scrollpos > 400) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});

const casesSlider = new Swiper('.cases-slider', {
  direction: 'horizontal',
  speed: 800,
  loop: true,
  pagination: {
    el: '.cases-slider__pagination',
    type: 'fraction',
  },
   navigation: {
     nextEl: '.cases-slider__next',
     prevEl: '.cases-slider__prev',
   },

   breakpoints: {
     320: {
       slidesPerView: 1,
       spaceBetween: 0,
     },
     576: {
       slidesPerView: 1.2,
       spaceBetween: 20,
     },
     992: {
       slidesPerView: 1.2,
       spaceBetween: 50,
     },
   }
});

const breakpoint = window.matchMedia('(min-width:992px)');
let mySwiper;

const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    if (mySwiper !== undefined) mySwiper.destroy(true, true);
    document.querySelector('.process__list').classList.remove('swiper-wrapper');
    document.querySelector('.process__list').classList.add('process__list');
    document.querySelector('.process-slider').classList.remove('swiper-container');
    return;
  } else if (breakpoint.matches === false) {
    document.querySelector('.process__list').classList.add('swiper-wrapper');
    document.querySelector('.process__list').classList.remove('process__list');
    document.querySelector('.process-slider').classList.add('swiper-container');
    return enableSwiper();
  }
};

const enableSwiper = function () {
  mySwiper = new Swiper('.process-slider', {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 40,
  });
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();

document.addEventListener('mousemove', parallax);

function parallax(e) {
  if (window.innerWidth > 1024) {
    this.querySelectorAll('.layer').forEach(layer => {
      const speed = layer.getAttribute('data-speed');
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;
      layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
  }
}

 const phoneInput = document.querySelectorAll('input[type="tel"]'),
im = new Inputmask('+7 (999) 999-99-99');
 im.mask(phoneInput);

 let validateForms = function (selector, rules, successModal, yaGoal) {
   new window.JustValidate(selector, {
     rules: rules,
     messages: {
       name: {
         required: 'Обязательное поле'
       },
       tel: {
         required: 'Обязательное поле'
       }
     },
     submitHandler: function (form) {
       let formData = new FormData(form);

       let xhr = new XMLHttpRequest();
       xhr.onreadystatechange = function () {
         if (xhr.readyState === 4) {
           if (xhr.status === 200) {
             alert('Ваши данные успешно отправлены')
           }
         }
       }
       xhr.open('POST', 'mail.php', true)
       xhr.send(formData);
       form.reset();
     }
   });
 }

 validateForms('.form', {
   tel: {
     required: true
   },
   name: {
     required: true
   }
 }, '.thanks-popup', 'send goal');

 validateForms('.modal_form', {
   tel: {
     required: true
   },
   name: {
     required: true
   }
 }, '.thanks-popup', 'send goal');

var scroll = new SmoothScroll('a[href*="#"]');
 
const myModal = new HystModal({
  linkAttributeName: "data-hystmodal",
});

document.querySelectorAll('.form__field').forEach(element => {
  element.addEventListener('focus', () => {
    element.parentElement.querySelector('span').style.opacity = "1";
  });
  element.addEventListener('blur', () => {
    element.parentElement.querySelector('span').style.opacity = "";
  })
});