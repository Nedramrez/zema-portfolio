const appearMobileMenu = document.querySelector('.mobile-menu');
const disAppearMobileMenu = document.querySelector('.mobile-menu');

function mobileMenu() {
  const appearMobileDivision = document.createElement('div');
  appearMobileDivision.classList.add('mobile-menu-div');
  appearMobileDivision.setAttribute('id', 'rmv');
  appearMobileMenu.appendChild(appearMobileDivision);

  const appearMobileDiv = document.createElement('div');
  appearMobileDiv.classList.add('mobile-menu-close');
  appearMobileDivision.appendChild(appearMobileDiv);

  const appearMobileImg = document.createElement('img');
  appearMobileImg.classList.add('mobile-menu-close-icon');
  appearMobileDiv.appendChild(appearMobileImg);
  appearMobileImg.setAttribute('src', 'assets/images/close-icon.svg');
  appearMobileImg.setAttribute('onclick', 'disappearMobileMenu()');
  appearMobileImg.setAttribute('id', 'disappear');

  const appearMobileUl = document.createElement('ul');
  appearMobileUl.classList.add('mobile-list');
  appearMobileDivision.appendChild(appearMobileUl);

  const appearMobileUlLi1 = document.createElement('li');
  appearMobileUlLi1.classList.add('mobile-list-item');
  appearMobileUl.appendChild(appearMobileUlLi1);

  const appearMobileLink1 = document.createElement('a');
  appearMobileLink1.classList.add('mobile-link');
  appearMobileUlLi1.appendChild(appearMobileLink1);
  appearMobileLink1.setAttribute('href', '#Portfolio');
  appearMobileLink1.textContent = 'Portfolio';

  const appearMobileUlLi2 = document.createElement('li');
  appearMobileUlLi2.classList.add('mobile-list-item');
  appearMobileUl.appendChild(appearMobileUlLi2);

  const appearMobileLink2 = document.createElement('a');
  appearMobileLink2.classList.add('mobile-link');
  appearMobileUlLi2.appendChild(appearMobileLink2);
  appearMobileLink2.setAttribute('href', '#About');
  appearMobileLink2.textContent = 'About';

  const appearMobileUlLi3 = document.createElement('li');
  appearMobileUlLi3.classList.add('mobile-list-item');
  appearMobileUl.appendChild(appearMobileUlLi3);

  const appearMobileLink3 = document.createElement('a');
  appearMobileLink3.classList.add('mobile-link');
  appearMobileUlLi3.appendChild(appearMobileLink3);
  appearMobileLink3.setAttribute('href', '#Contact');
  appearMobileLink3.textContent = 'Contact';

  const MobileMenu = document.getElementById('id-for-js');
  MobileMenu.style.display = 'block';
}

//  Script for 'hamburger' icon

appearMobileMenu.addEventListener('click', mobileMenu);

//  Script for the 'mobile-menu-close' icon - Samuel's commit

function disappearMobileMenu() {
  const removeMobileMenu = document.getElementById('rmv');
  removeMobileMenu.remove();
}

disAppearMobileMenu.addEventListener('click', disappearMobileMenu);