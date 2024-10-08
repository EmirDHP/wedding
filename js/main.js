// toggle background active
const slideNavigator = name => {
    let slides = document.querySelectorAll('.bg-slide');
    slides.forEach(slide => {
        slide.classList.remove('active');
        if (slide.classList.contains(name)) {
            slide.classList.add('active');
        }
    });
};

// switch background
window.addEventListener('load',() => {
    const slideBtnList = document.querySelectorAll('.slide-btn');
    slideBtnList.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            slideBtnList.forEach(el => {
                el.classList.remove('active');
            });
            this.classList.add('active');
            slideNavigator(this.getAttribute('data-target'));
        });
    });
});

// activate sections
const sectionNavigator = name => {
    let sections = document.querySelectorAll('section');
    let header = document.querySelector('header');
    sections.forEach(section => {
        section.classList.remove('section-show');
        if (section.classList.contains(name)) {
            section.classList.add('section-show');
            header.classList.add('active');
        }
    });
}

// navigation to sections
window.addEventListener('load', () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(nav => {
        nav.addEventListener('click', function (e){
            e.preventDefault();
            navList.forEach(el => {
                el.classList.remove('active');
            });
            this.classList.add('active');
            sectionNavigator(this.getAttribute('data-target'));
            screen.width < 768 && toggleMenu();
        });
    });
});

// reset header to initial base
const resetHeader = () => {
    let header = document.querySelector('header');
    header.classList.remove('active');
};


const initNavigation = () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-target') === 'about') {
            el.classList.add('active');
        }
    });
    sectionNavigator('about');
};

//toggle menu
const toggleMenu = () => {
    const nav = document.querySelector('header .nav');
    const menuIcons = document.querySelector('.menu');
    
    // Alternar clases para mostrar u ocultar el menú móvil
    nav.classList.toggle('active');
    menuIcons.classList.toggle('active');
    
    // Cambiar la visibilidad del menú principal del header
    if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden'; // Desactivar scroll cuando el menú está activo
    } else {
        document.body.style.overflow = 'auto';
    }
};
