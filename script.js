const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");
function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', ()=>{
    if(screenY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darktheme', 'dark:shadow-white/20');
        navLinks.classList.remove('bg-white','shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
    }
    else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darktheme', 'dark:shadow-white/20');
        navLinks.classList.add('bg-white','shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
    }
})

if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
    document.documentElement.classList.add('dark')
}
else{
    document.documentElement.classList.remove('dark')
}

function toggleTheme(){
    document.documentElement.classList.toggle('dark');

    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    }
    else{
        localStorage.theme = 'light';
    }
}

const cards = document.querySelectorAll('.glow-card');
cards.forEach((card) => {
    const glow = card.querySelector('.glow-spot');

      card.addEventListener('mouseenter', () => {
        glow.style.opacity = '1';
      });

      card.addEventListener('mouseleave', () => {
        glow.style.opacity = '0';
      });

      card.addEventListener('mousemove', (e) => {
        const bounds = card.getBoundingClientRect();
        const x = e.clientX - bounds.left - 120;
        const y = e.clientY - bounds.top - 120;
        glow.style.left = `${x}px`;
        glow.style.top = `${y}px`;
      });
    });


    window.addEventListener("DOMContentLoaded", () => {
            const container = document.querySelector(".infinite-scroll");
            const template = document.querySelector("#skills-set");
            container.append(template.content.cloneNode(true));
            container.append(template.content.cloneNode(true)); // duplicated for loop
          });