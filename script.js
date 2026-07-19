const aboutBtn = document.getElementById('about');
const hiddenDiv = document.getElementById('aboutdiv');
const projbtn = document.getElementById('proj');
const h = document.querySelector('.hdiv h1');
const p = document.querySelector('.hdiv p');
const home = document.getElementById('home');

aboutBtn.addEventListener('click', () => {
  hiddenDiv.classList.toggle('open');
});

projbtn.addEventListener('click', () => {
  h.innerHTML = "Projects";
  p.innerHTML = "this le projects and im a goy goy goy<br>im a goy<br> OY VEY!";
});

home.addEventListener('click', () => {
  h.innerHTML = "Home";
  p.innerHTML = "this is the home, placeholder";
});