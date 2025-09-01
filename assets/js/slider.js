var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: "#slider-previous",
        prevEl: "#slider-next",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1290: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});



/* Header Menu */
  
document.getElementById('mobileMenuButton').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobileMenu');
    var menuOpenIcon = document.getElementById('menuOpenIcon');
    var menuCloseIcon = document.getElementById('menuCloseIcon');

    // Toggle mobile menu visibility
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        menuOpenIcon.classList.add('hidden');
        menuCloseIcon.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
        menuOpenIcon.classList.remove('hidden');
        menuCloseIcon.classList.add('hidden');
    }
});




function togglePricing() {
    const isChecked = document.querySelector('input[type="checkbox"]').checked;
    const price1 = document.getElementById("price1");
    const price2 = document.getElementById("price2");
    const price3 = document.getElementById("price3");

    if (isChecked) {
        // Show yearly values
        price1.innerHTML = "$99 <span class='font-medium text-lg leading-8'>/year</span>";
        price2.innerHTML = "$120 <span class='font-medium text-lg leading-8'>/year</span>";
        price3.innerHTML = "$150 <span class='font-medium text-lg leading-8'>/year</span>";
    } else {
        // Show monthly values
        price1.innerHTML = "$0 <span class='font-medium text-lg leading-8'>/month</span>";
        price2.innerHTML = "$12 <span class='font-medium text-lg leading-8'>/month</span>";
        price3.innerHTML = "$33 <span class='font-medium text-lg leading-8'>/month</span>";
    }
    
}



//Timeline//

// Solid line element
const solidLine = document.querySelector('.solid-line');
const timeline = document.querySelector('.relative');
const lastItem = document.querySelector('#last-item');

// Calculate timeline fill on scroll
window.addEventListener('scroll', () => {
    const timelineRect = timeline.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    // Calculate scroll position within the timeline
    const scrollPosition = Math.min(
        viewportHeight - timelineRect.top,
        timelineRect.height
    );

    // Adjust solid line height based on scroll position
    if (scrollPosition > 100) {
        solidLine.style.height = `${scrollPosition}px`;
    }
});
