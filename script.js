document.addEventListener('DOMContentLoaded', () => {
    // Initialize Swiper
    const swiper = new Swiper('.smarter-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 300,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }, 
    });

     






















    
 
        const menuItems = document.querySelectorAll('.prop-types-menu-item');
        const propertyImage = document.querySelector('.prop-types-image-section img');

        // Store image URLs
        const imageUrls = {
            residential: 'assets/images/im-01-min.png',
            commercial: 'assets/images/im-02-min.png',
            industrial: 'assets/images/im-03-min.png'
        };

        menuItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                // Add fade-out effect
                propertyImage.style.opacity = '0';

                // Change image source after slight delay for smooth transition
                setTimeout(() => {
                    const type = item.getAttribute('data-type');
                    propertyImage.src = imageUrls[type];
                    propertyImage.style.opacity = '1';
                }, 300);
            });
        }); 


    const tabsNav = document.querySelectorAll('.prop-types-menu-item');

    tabsNav.forEach((items, ind) => {
        items.addEventListener('mousemove', () => {
            tabsNav.forEach((remove) => {
                remove.classList.remove('active')
            })

            items.classList.add('active')

        })
    })

    document.querySelector('.prop-types-menu-item:first-child').classList.add("active");
}); 