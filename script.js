document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Parallax effect for phone mockups
    const phoneCenter = document.querySelector('.phone-center');
    const phoneLeft = document.querySelector('.phone-left');
    const phoneRight = document.querySelector('.phone-right');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        if (phoneCenter && phoneLeft && phoneRight) {
            phoneCenter.style.transform = `translate(-50%, calc(-50% + ${scrollPosition * 0.02}px))`;
            phoneLeft.style.transform = `translate(calc(-50% - 220px), calc(-50% + ${scrollPosition * 0.01}px)) scale(0.9)`;
            phoneRight.style.transform = `translate(calc(-50% + 220px), calc(-50% + ${scrollPosition * 0.03}px)) scale(0.9)`;
        }
    });
    
    // Interactive hover for phones on mobile
    const phones = document.querySelectorAll('.phone');
    
    if (window.innerWidth <= 768) {
        phones.forEach(phone => {
            phone.addEventListener('touchstart', function() {
                phones.forEach(p => p.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
});