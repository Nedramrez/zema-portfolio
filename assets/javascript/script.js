const appearMobileMenu = document.querySelector('.mobile-menu');
const disAppearMobileMenu = document.querySelector('.mobile-menu');
const disAppearMobileMenuPortfolio = document.querySelector('.mobile-menu');
const disAppearMobileMenuAbout = document.querySelector('.mobile-menu');
const disAppearMobileMenuContact = document.querySelector('.mobile-menu');
const body = document.querySelector('body');

function mobileMenu() {
  const navMenuDelProp = document.getElementById('nav-menu');
  navMenuDelProp.style.display = 'none';
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
  appearMobileLink1.setAttribute('href', '#portfolio');
  appearMobileLink1.textContent = 'Portfolio';
  appearMobileLink1.setAttribute('onclick', 'disappearMobileMenuPortfolio()');

  const appearMobileUlLi2 = document.createElement('li');
  appearMobileUlLi2.classList.add('mobile-list-item');
  appearMobileUl.appendChild(appearMobileUlLi2);

  const appearMobileLink2 = document.createElement('a');
  appearMobileLink2.classList.add('mobile-link');
  appearMobileUlLi2.appendChild(appearMobileLink2);
  appearMobileLink2.setAttribute('href', '#about-me');
  appearMobileLink2.textContent = 'About';
  appearMobileLink1.setAttribute('onclick', 'disappearMobileMenuAbout()');

  const appearMobileUlLi3 = document.createElement('li');
  appearMobileUlLi3.classList.add('mobile-list-item');
  appearMobileUl.appendChild(appearMobileUlLi3);

  const appearMobileLink3 = document.createElement('a');
  appearMobileLink3.classList.add('mobile-link');
  appearMobileUlLi3.appendChild(appearMobileLink3);
  appearMobileLink3.setAttribute('href', '#contact');
  appearMobileLink3.textContent = 'Contact';
  appearMobileLink1.setAttribute('onclick', 'disappearMobileMenuContact()');
  const MobileMenu = document.getElementById('id-for-js');
  MobileMenu.style.display = 'block';
  body.classList.add('body-noScroll');
}

appearMobileMenu.addEventListener('click', mobileMenu);

//  Script for the 'mobile-menu-close' icon - Samuel's commit

function disappearMobileMenu() {
  const removeMobileMenu = document.getElementById('rmv');
  removeMobileMenu.remove();
  const navMenuDelProp = document.getElementById('nav-menu');
  navMenuDelProp.style.display = 'flex';

  body.classList.remove('body-noScroll');
}

function disappearMobileMenuPortfolio() {
  disappearMobileMenu();
  window.open('../#portfolio', '_self');
}

function disappearMobileMenuAbout() {
  disappearMobileMenu();
  window.open('../#about-me', '_self');
}

function disappearMobileMenuContact() {
  disappearMobileMenu();
  window.open('../#contact', '_self');
}

disAppearMobileMenu.addEventListener('click', disappearMobileMenu);
disAppearMobileMenuPortfolio.addEventListener('click', disappearMobileMenuPortfolio);
disAppearMobileMenuAbout.addEventListener('click', disappearMobileMenuAbout);
disAppearMobileMenuContact.addEventListener('click', disappearMobileMenuContact);

// Dynamic part of website

const works = [
  {
    title: 'Tonic',
    image: 'assets/images/tonic.svg',
    imageD: 'assets/images/d-snapshot-3.svg',
    see: 'https://nedramrez.github.io/portfolio',
    repo: 'https://github.com/nedramrez/portfolio',
    order: 0,
    orderInside1: 'order-1',
    orderInside2: 'order-2',
  },
  {
    title: 'Multi-post stories',
    image: 'assets/images/snapshoot-portfolio.svg',
    imageD: 'assets/images/d-snapshot-2.svg',
    see: 'https://nedramrez.github.io/portfolio',
    repo: 'https://github.com/nedramrez/portfolio',
    order: 1,
    orderInside1: 'order-2',
    orderInside2: 'order-1',
  },
  {
    title: 'Tonic',
    image: 'assets/images/snapshot-card-3.svg',
    imageD: 'assets/images/d-snapshot-1.svg',
    see: 'https://nedramrez.github.io/portfolio',
    repo: 'https://github.com/nedramrez/portfolio',
    order: 2,
    orderInside1: 'order-1',
    orderInside2: 'order-2',
  },
  {
    title: 'Multi-post stories',
    image: 'assets/images/snapshot-card-4.svg',
    imageD: 'assets/images/snapshot-card-4.svg',
    see: 'https://nedramrez.github.io/portfolio',
    repo: 'https://github.com/nedramrez/portfolio',
    order: 3,
    orderInside1: 'order-2',
    orderInside2: 'order-1',
  },
];

const details = {
  client: 'CANOPY',
  role: 'Back End Dev',
  counter: 'assets/images/counter.svg',
  year: '2015',
  description: 'This represents my expertise in Backend development.',
  ppDscrptnD: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non eum ex magni perspiciatis, praesentium quidem nemo officiis quas et quae esse voluptatum, minima asperiores perferendis repellat sint quaerat expedita quia!  Sunt assumenda mollitia perspiciatis accusantium illum sapiente soluta praesentium dolor ipsum debitis fugiat, doloribus blanditiis quo ut repellendus corrupti, nobis rem voluptas! Quod aut atque officiis hic esse cumque ad!',
  ppDscrptnM: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
};

const tags = {
  html: 'html',
  css: 'css',
  javascript: 'javascript',
};

works.forEach((work) => {
  const portfolio = document.querySelector('#portfolio');
  const article = document.createElement('article');
  article.setAttribute('class', `order-${work.order}`);
  article.setAttribute('id', 'project');
  portfolio.appendChild(article);
  const snapshot = document.createElement('img');
  article.appendChild(snapshot);
  snapshot.classList.add('mobile');
  snapshot.setAttribute('src', work.image);
  const desktop = document.createElement('img');
  article.appendChild(desktop);
  desktop.setAttribute('src', work.imageD);
  desktop.setAttribute('class', `project-img desktop ${work.orderInside2}`);
  const prDetails = document.createElement('div');
  article.appendChild(prDetails);
  prDetails.classList.add('pr-details');
  prDetails.setAttribute('class', `pr-details ${work.orderInside1}`);
  const title = document.createElement('h3');
  prDetails.appendChild(title);
  title.innerText = work.title;
  const listDetails = document.createElement('ul');
  prDetails.appendChild(listDetails);
  const lineDetail1 = document.createElement('li');
  listDetails.appendChild(lineDetail1);
  const client = document.createElement('h5');
  client.innerText = details.client;
  lineDetail1.appendChild(client);
  const lineDetail2 = document.createElement('li');
  listDetails.appendChild(lineDetail2);
  const counter = document.createElement('img');
  counter.setAttribute('src', details.counter);
  counter.setAttribute('class', 'counter');
  counter.setAttribute('alt', 'counter');
  lineDetail2.appendChild(counter);
  const lineDetail3 = document.createElement('li');
  listDetails.appendChild(lineDetail3);
  const role = document.createElement('h6');
  role.innerText = details.role;
  lineDetail3.appendChild(role);
  const lineDetail4 = document.createElement('li');
  listDetails.appendChild(lineDetail4);
  const counter2 = document.createElement('img');
  counter2.setAttribute('src', details.counter);
  counter.setAttribute('class', 'counter');
  counter.setAttribute('alt', 'counter');
  lineDetail4.appendChild(counter2);
  const lineDetail5 = document.createElement('li');
  listDetails.appendChild(lineDetail5);
  const year = document.createElement('h6');
  year.innerText = details.year;
  lineDetail5.appendChild(year);
  const description = document.createElement('p');
  description.innerText = details.description;
  prDetails.appendChild(description);
  const tagsList = document.createElement('ul');
  tagsList.classList.add('tags');
  prDetails.appendChild(tagsList);
  const lineTag1 = document.createElement('li');
  lineTag1.innerText = tags.html;
  tagsList.appendChild(lineTag1);
  const lineTag2 = document.createElement('li');
  lineTag2.innerText = tags.css;
  tagsList.appendChild(lineTag2);
  const lineTag3 = document.createElement('li');
  lineTag3.innerText = tags.javascript;
  tagsList.appendChild(lineTag3);
  const button = document.createElement('button');
  button.innerText = 'See Project';
  button.setAttribute('id', `id-${work.order}`);
  button.setAttribute('onclick', `appearPopup${work.order}`);
  prDetails.appendChild(button);
});

works.forEach((ppWork) => {
  const ppWindow = document.querySelector('#popup-window');
  ppWindow.setAttribute('class', 'pp-details');
  const ppContainer = document.createElement('div');
  ppContainer.setAttribute('class', `order-${ppWork.order} pp-container`);
  ppContainer.setAttribute('id', `pp-${ppWork.order}`);
  ppWindow.appendChild(ppContainer);
  const ppTopBlock = document.createElement('div');
  ppTopBlock.classList.add('pp-top-block');
  ppContainer.appendChild(ppTopBlock);
  const ppHdng = document.createElement('h2');
  ppHdng.classList.add('pp-hdng');
  ppHdng.innerText = `${ppWork.title}`;
  ppTopBlock.appendChild(ppHdng);
  const ppClose = document.createElement('div');
  ppClose.classList.add('pp-close');
  const ppCloseIcon = document.createElement('img');
  ppCloseIcon.classList.add('pp-close-icon');
  ppCloseIcon.setAttribute('src', 'assets/images/icon-close.svg');
  ppCloseIcon.setAttribute('onclick', 'disappearPopup()');
  ppCloseIcon.setAttribute('id', 'pp-close-icon');
  ppClose.appendChild(ppCloseIcon);
  ppTopBlock.appendChild(ppClose);
  const listDetails = document.createElement('ul');
  listDetails.classList.add('pp-ul');
  ppContainer.appendChild(listDetails);
  const lineDetail1 = document.createElement('li');
  listDetails.appendChild(lineDetail1);
  const client = document.createElement('h5');
  client.innerText = details.client;
  lineDetail1.appendChild(client);
  const lineDetail2 = document.createElement('li');
  listDetails.appendChild(lineDetail2);
  const counter = document.createElement('img');
  counter.setAttribute('src', details.counter);
  counter.setAttribute('class', 'counter');
  counter.setAttribute('alt', 'counter');
  lineDetail2.appendChild(counter);
  const lineDetail3 = document.createElement('li');
  listDetails.appendChild(lineDetail3);
  const role = document.createElement('h6');
  role.innerText = details.role;
  lineDetail3.appendChild(role);
  const lineDetail4 = document.createElement('li');
  listDetails.appendChild(lineDetail4);
  const counter2 = document.createElement('img');
  counter2.setAttribute('src', details.counter);
  counter.setAttribute('class', 'counter');
  counter.setAttribute('alt', 'counter');
  lineDetail4.appendChild(counter2);
  const lineDetail5 = document.createElement('li');
  listDetails.appendChild(lineDetail5);
  const year = document.createElement('h6');
  year.innerText = details.year;
  lineDetail5.appendChild(year);
  const snapshot = document.createElement('img');
  ppContainer.appendChild(snapshot);
  snapshot.classList.add('pp-img', 'mobile');
  snapshot.setAttribute('src', `${ppWork.image}`);
  const desktop = document.createElement('img');
  ppContainer.appendChild(desktop);
  desktop.setAttribute('src', ppWork.imageD);
  desktop.setAttribute('class', 'pp-img desktop');
  const ppBtmBlock = document.createElement('div');
  ppBtmBlock.classList.add('pp-btm-block');
  ppContainer.appendChild(ppBtmBlock);
  const ppDscrptnD = document.createElement('p');
  ppDscrptnD.innerText = details.ppDscrptnD;
  ppDscrptnD.classList.add('pp-dscrptn', 'desktop');
  ppBtmBlock.appendChild(ppDscrptnD);
  const ppDscrptnM = document.createElement('p');
  ppDscrptnM.innerText = details.ppDscrptnM;
  ppDscrptnM.classList.add('pp-dscrptn', 'mobile');
  ppBtmBlock.appendChild(ppDscrptnM);
  const ppBtmBlockDiv = document.createElement('div');
  ppBtmBlockDiv.classList.add('pp-btm-right');
  ppBtmBlock.appendChild(ppBtmBlockDiv);
  const tagsList = document.createElement('ul');
  tagsList.classList.add('pp-tags');
  ppBtmBlockDiv.appendChild(tagsList);
  const lineTag1 = document.createElement('li');
  lineTag1.innerText = tags.html;
  tagsList.appendChild(lineTag1);
  const lineTag2 = document.createElement('li');
  lineTag2.innerText = tags.css;
  tagsList.appendChild(lineTag2);
  const lineTag3 = document.createElement('li');
  lineTag3.innerText = tags.javascript;
  tagsList.appendChild(lineTag3);
  const ppBtn = document.createElement('div');
  ppBtn.classList.add('pp-btns');
  ppBtmBlockDiv.appendChild(ppBtn);
  const button = document.createElement('button');
  button.innerText = 'See Live';
  button.setAttribute('class', `pp-btn btn-${ppWork.order}`);
  button.setAttribute('id', 'see-project');
  const ppBtnImg1 = document.createElement('img');
  ppBtnImg1.setAttribute('src', 'assets/images/blue-export.svg');
  ppBtn.appendChild(button);
  button.appendChild(ppBtnImg1);
  ppBtnImg1.classList.add('pp-btn-image');
  const button2 = document.createElement('button');
  button2.innerText = 'See Source';
  button2.setAttribute('class', `pp-btn btn-${ppWork.order}`);
  button2.setAttribute('id', 'see-project');
  const ppBtnImg2 = document.createElement('img');
  ppBtnImg2.setAttribute('src', 'assets/images/blue-github.svg');
  ppBtnImg2.classList.add('pp-btn-image');
  ppBtn.appendChild(button2);
  button2.appendChild(ppBtnImg2);
});

const appearPopUp0 = document.getElementById('id-0');
const appearPopUp1 = document.getElementById('id-1');
const appearPopUp2 = document.getElementById('id-2');
const appearPopUp3 = document.getElementById('id-3');
const disAppearPopUp = document.getElementById('pp-close-icon');

function appearPopup0() {
  const x = document.getElementById('pp-0');
  x.style.display = 'block';
  const y = document.getElementById('popup-window');
  y.style.display = 'flex';
}

function appearPopup1() {
  const x = document.getElementById('pp-1');
  x.style.display = 'block';
  const y = document.getElementById('popup-window');
  y.style.display = 'flex';
}

function appearPopup2() {
  const x = document.getElementById('pp-2');
  x.style.display = 'block';
  const y = document.getElementById('popup-window');
  y.style.display = 'flex';
}

function appearPopup3() {
  const x = document.getElementById('pp-3');
  x.style.display = 'block';
  const y = document.getElementById('popup-window');
  y.style.display = 'flex';
}

function disappearPopup() {
  const y = document.getElementById('popup-window');
  y.style.display = 'none';
  const x = document.getElementById('pp-0');
  const z = document.getElementById('pp-1');
  const w = document.getElementById('pp-2');
  const v = document.getElementById('pp-3');
  x.style.display = 'none';
  z.style.display = 'none';
  w.style.display = 'none';
  v.style.display = 'none';
}

appearPopUp0.addEventListener('click', appearPopup0);
appearPopUp1.addEventListener('click', appearPopup1);
appearPopUp2.addEventListener('click', appearPopup2);
appearPopUp3.addEventListener('click', appearPopup3);
disAppearPopUp.addEventListener('click', disappearPopup);

/* The Email Validation */
document.querySelector('.submit').addEventListener('click', (event) => {
  const email = document.getElementById('mail').value;
  const lowcaseError = document.querySelector('.lowcase-error');
  const isLowerCase = (str) => str === str.toLowerCase();
  if (!isLowerCase(email)) {
    event.preventDefault();
    lowcaseError.innerHTML = 'Please use lowercase letters and proper mail pattern';

    // Hide error after 5 seconds.
    setTimeout(() => {
      lowcaseError.innerHTML = '';
    }, 5000);

  }
});