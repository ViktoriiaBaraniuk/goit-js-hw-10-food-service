import menu from './menu.json';
import itemsTemplate from './template/menu-cards.hbs';
import './styles.css';

const Theme = {
   LIGHT: 'light-theme',
   DARK: 'dark-theme',
 };

const dishesRef = document.querySelector('.js-menu');

const markup = itemsTemplate(menu);
dishesRef.insertAdjacentHTML('beforeend', markup);

const themeSwitch = document.querySelector('#theme-switch-toggle');
themeSwitch.addEventListener('change', onThemeSwitcher);

function onThemeSwitcher (event) {
 if (event.target.checked) {
    document.body.classList.add(Theme.DARK);

    localStorage.setItem('theme', Theme.DARK); 

    

 } else {
    
      document.body.classList.remove(Theme.DARK);
      document.body.classList.add(Theme.LIGHT);

      localStorage.setItem('theme', Theme.LIGHT);
    };
};

function checkedThemeSwitcher() {
  const savedCheckboxPosition = localStorage.getItem('theme');
  
   if (savedCheckboxPosition === Theme.DARK) {
      themeSwitch.checked = true;
      document.body.classList.add(Theme.DARK);
   };
}

checkedThemeSwitcher();
    
