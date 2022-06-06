import './style.css';
import {homePage} from './home-page.js';
import {menuPage} from './menu-page.js';
import {contactPage} from './contact-page.js';

homePage();

let switchingModules = (function() {

    const homeTab = document.querySelector('.home');
    homeTab.addEventListener('click', homePage);
    
    
    const menuTab = document.querySelector('.menu');
    menuTab.addEventListener('click', menuPage);
    
    const contactTab = document.querySelector('.contact');
    contactTab.addEventListener('click', contactPage);

})();