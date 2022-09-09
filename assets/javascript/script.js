const appearMobileMenu = document.querySelector('.mobile-menu');
const disAppearMobileMenu = document.querySelector('.mobile-menu');
const disAppearMobileMenuPortfolio = document.querySelector('.mobile-menu');
const disAppearMobileMenuAbout = document.querySelector('.mobile-menu');
const disAppearMobileMenuContact = document.querySelector('.mobile-menu');

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
  appearMobileLink1.setAttribute('onclick', 'disappearMobileMenuPortfolio()');

  const appearMobileUlLi2 = document.createElement('li');
  appearMobileUlLi2.classList.add('mobile-list-item');
  appearMobileUl.appendChild(appearMobileUlLi2);

  const appearMobileLink2 = document.createElement('a');
  appearMobileLink2.classList.add('mobile-link');
  appearMobileUlLi2.appendChild(appearMobileLink2);
  appearMobileLink2.setAttribute('href', '#About');
  appearMobileLink2.textContent = 'About';
  appearMobileLink1.setAttribute('onclick', 'disappearMobileMenuAbout()');

  const appearMobileUlLi3 = document.createElement('li');
  appearMobileUlLi3.classList.add('mobile-list-item');
  appearMobileUl.appendChild(appearMobileUlLi3);

  const appearMobileLink3 = document.createElement('a');
  appearMobileLink3.classList.add('mobile-link');
  appearMobileUlLi3.appendChild(appearMobileLink3);
  appearMobileLink3.setAttribute('href', '#Contact');
  appearMobileLink3.textContent = 'Contact';
  appearMobileLink1.setAttribute('onclick', 'disappearMobileMenuContact()');

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

function disappearMobileMenuPortfolio() {
  disappearMobileMenu();
  window.open('../#contact', '_self');
}

function disappearMobileMenuAbout() {
  disappearMobileMenu();
  window.open('../#about', '_self');
}

function disappearMobileMenuContact() {
  disappearMobileMenu();
  window.open('../#portfolio', '_self');
}

disAppearMobileMenu.addEventListener('click', disappearMobileMenu);
disAppearMobileMenuPortfolio.addEventListener('click', disappearMobileMenuPortfolio);
disAppearMobileMenuAbout.addEventListener('click', disappearMobileMenuAbout);
disAppearMobileMenuContact.addEventListener('click', disappearMobileMenuContact);

// Dynamic part of website

const works = [
  {
    title: 'Tonic',
    image: 'assets/images/d-snapshot-3.svg',
    see: 'https://nedramrez.github.io/portfolio',
    repo: 'https://github.com/nedramrez/portfolio',
    order: 'order-0',
  },
  {
    title: 'Multi-post stories',
    image: 'assets/images/snapshoot-portfolio.svg',
    see: 'https://nedramrez.github.io/portfolio',
    repo: 'https://github.com/nedramrez/portfolio',
    order: 'order-1',
  },
  {
    title: 'Tonic',
    image: 'assets/images/snapshot-card-3.svg',
    see: 'https://nedramrez.github.io/portfolio',
    repo: 'https://github.com/nedramrez/portfolio',
    order: 'order-2',
  },
  {
    title: 'Multi-post stories',
    image: 'assets/images/snapshot-card-4.svg',
    see: 'https://nedramrez.github.io/portfolio',
    repo: 'https://github.com/nedramrez/portfolio',
    order: 'order-3',
  },
];

const details = {
  client: 'CANOPY',
  role: 'Back End Dev',
  counter: 'assets/images/counter.svg',
  year: '2015',
  description: 'This represents my expertise in Backend development.',
};

const tags = {
  html: 'html',
  css: 'css',
  javascript: 'javascript',
};

works.forEach(work => { // eslint-disable-line
  const portfolio = document.querySelector('#portfolio');
  const article = document.createElement('article');
  article.classList.add(work.order);
  portfolio.appendChild(article);
  const snapshot = document.createElement('img');
  article.appendChild(snapshot);
  snapshot.classList.add('project-img');
  snapshot.setAttribute('src', work.image);
  const prDetails = document.createElement('div');
  article.appendChild(prDetails);
  prDetails.classList.add('pr-details');
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
  button.setAttribute('onclick', 'detailsPp()');
  prDetails.appendChild(button);
});

const detailsPp = function (detail) {
  const x = document.getElementById('pp-details');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
};
