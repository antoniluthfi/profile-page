// show menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}

showMenu('nav-toggle', 'nav-menu');

// select menu on click
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    // active link
    navLink.forEach((n) => n.classList.remove('active'));
    this.classList.add('active');

    // remove menu
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

// select menu on scroll
const sections = document.querySelectorAll('section');
const navigations = document.querySelectorAll('#nav-menu ul li a');

window.addEventListener('scroll', () => {
    let current = 'home';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if((pageYOffset + 100) > sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navigations.forEach((navigation) => {
        navigation.classList.remove('active');
        if(navigation.dataset.section == current) {
            navigation.classList.add('active');
        }
    });
});

// skills data
const skills = [
    {
        "icon": "bxl-html5",
        "name": "HTML5",
        "percentage": "95%"
    },
    {
        "icon": "bxl-css3",
        "name": "CSS3",
        "percentage": "80%"
    },
    {
        "icon": "bxl-bootstrap",
        "name": "Bootstrap",
        "percentage": "90%"
    },
    {
        "icon": "bxs-file-css",
        "name": "Materialize",
        "percentage": "90%"
    },
    {
        "icon": "bxl-javascript",
        "name": "JavaScript",
        "percentage": "70%"
    },
    {
        "icon": "bxl-jquery",
        "name": "jQuery",
        "percentage": "70%"
    },
    {
        "icon": "bxl-github",
        "name": "Git",
        "percentage": "90%"
    },
    {
        "icon": "bxl-nodejs",
        "name": "Node JS",
        "percentage": "70%"
    },
    {
        "icon": "bxl-react",
        "name": "React JS",
        "percentage": "65%"
    },
    {
        "icon": "bxl-react",
        "name": "React Native",
        "percentage": "40%"
    },
    {
        "icon": "bxl-firebase",
        "name": "Firebase",
        "percentage": "50%"
    },
    {
        "icon": "bx-code",
        "name": "PHP",
        "percentage": "70%"
    },
    {
        "icon": "bx-code",
        "name": "Laravel",
        "percentage": "70%"
    },
    {
        "icon": "bx-data",
        "name": "MySql",
        "percentage": "65%"
    },
    {
        "icon": "bx-data",
        "name": "Mongo DB",
        "percentage": "50%"
    },
];

let skillsHTML = '';
skills.forEach((skill) => {
    skillsHTML += `
        <div class="skills__data">
            <div class="skills__names">
                <i class="bx ${skill.icon} skills__icon"></i>
                <span class="skills__name">${skill.name}</span>
            </div>
            <div>
                <span class="skills_percentage">${skill.percentage}</span>
            </div>
            <div class="skills__bar" style="width: ${skill.percentage};"></div>
        </div>
    `;
});

document.getElementById('skills-list').innerHTML = skillsHTML;

// work
let workHTML = '';
for (let i = 1; i <= 6; i++) {
    workHTML += `
        <div class="work__img">
            <img src="assets/images/work${i}.jpg" alt="">
        </div>
    `;
}

document.getElementById('work-content').innerHTML = workHTML;

console.log(document.getElementsByClassName('home__title-color')[0].innerText);

// scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

// scroll home
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

// scroll about
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

// scroll skills
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

// scroll skills
sr.reveal('.work__img',{interval: 200}); 

// scroll contact
sr.reveal('.contact__input',{interval: 200}); 
