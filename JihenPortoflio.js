// Dark Mode Toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Skill Bars Animation
const skillFills = document.querySelectorAll('.skill-fill');
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.width = entry.target.dataset.width;
        }
    });
},{threshold:0.5});
skillFills.forEach(skill=>observer.observe(skill));

// Active Nav Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll',()=>{
    let current = '';
    sections.forEach(section=>{
        const sectionTop = section.offsetTop - 80;
        if(pageYOffset >= sectionTop){
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link=>{
        link.classList.remove('active');
        if(link.getAttribute('href') === '#'+current){
            link.classList.add('active');
        }
    });
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 500 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => {
    window.scrollTo({top:0, behavior:'smooth'});
});
