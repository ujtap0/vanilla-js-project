const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//Dark or Light Images
function imageMode(color){
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

//Dark Mode Styles
function darkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  //toggleIcon.children => [span.toogle-text, i.fas fa-sun]
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  imageMode('dark');
}

function lightMode(){
  nav.style.backgroundColor = 'rgb(255 255 255/ 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  imageMode('light');
}


function switchTheme(event){
  console.log(event.target)
  //event.target.checked => true/false
  if(event.target.checked){
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme','dark')
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    lightMode();
    localStorage.setItem('theme','light')
  }
}

// (function (){
//   const currentTheme = localStorage.getItem('theme')
//   if(currentTheme === 'light'){
//     document.documentElement.setAttribute('data-theme', 'light')
//     lightMode()
//   } else if (currentTheme === 'dark'){
//     document.documentElement.setAttribute('data-theme', 'dark');
//     darkMode()
//   }
// })()

const currentTheme = localStorage.getItem('theme');

if( currentTheme ){
  document.documentElement.setAttribute('data-theme', currentTheme);
  if(currentTheme ==='dark'){
    toggleSwitch.checked = true;
    darkMode();
  } else {
    toggleSwitch.checked = false;
    lightMode();
  }
}


// onChange vs onClick
// onChange: 체크 상태가 변경될 때 이벤트가 일어난다.
toggleSwitch.addEventListener('change', switchTheme);