const acessibilityoptions = document.querySelector("#acessibility-options");
const acessibilitybtn = document.querySelector("#acessibility-btn");
const target = document.querySelectorAll('[data-anime]');


/* Nav Name and acessibility button show/hide Function */
function animeScroll() {
  const windowTop = window.pageYOffset;
  target.forEach(function (e) {
    if ((windowTop) > 400) {
      e.classList.add('animate');
      e.classList.remove('animateoff');
      e.classList.remove('hidden');
    }
    else {
      e.classList.add('animateoff');
      e.classList.remove('animate');
    }
  })
}

animeScroll();

window.addEventListener('scroll', function () {
  animeScroll();
})



/*acessibility localStorage*/
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
}


/* Acessibility Function*/

function AcessibilityOptionsShow() {
  acessibilityoptions.classList.remove("display-none");
  acessibilitybtn.classList.add("display-none");
}


function LightTheme() {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem('theme', 'light');
  acessibilitybtn.classList.remove("display-none");
  acessibilityoptions.classList.add("display-none");
}

function DarkTheme() {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem('theme', 'dark')
  acessibilitybtn.classList.remove("display-none");
  acessibilityoptions.classList.add("display-none");
}

function ColorBlindTheme() {
  document.documentElement.setAttribute("data-theme", "colorblind");
  localStorage.setItem('theme', 'colorblind');
  acessibilitybtn.classList.remove("display-none");
  acessibilityoptions.classList.add("display-none");
}

function EpilepsyTheme() {
  document.documentElement.setAttribute("data-theme", "epilepsy");
  localStorage.setItem('theme', 'epilepsy');
  acessibilitybtn.classList.remove("display-none");
  acessibilityoptions.classList.add("display-none");
}
