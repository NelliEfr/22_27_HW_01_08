const rootElem = document.querySelector('#root');

const goods = document.createElement('div');
const itemElem = document.createElement('p');
const nameElem = document.createElement('p');
const priceElem = document.createElement('p');
const emailElem = document.createElement('a');
const imgElem = document.createElement('img');

itemElem.innerText = 'Item number: 123334';
nameElem.innerText = 'Name: MacBook Air';
priceElem.innerText = 'Price: 2000$';
emailElem.innerText = 'laptop_world@gmail.com';

goods.classList.add('goods');
imgElem.classList.add('photo');

emailElem.setAttribute('href', 'mailto:laptop_world@gmail.com');
imgElem.setAttribute('src', 'air.jpg');
imgElem.setAttribute('alt', 'photo');

rootElem.append(goods);
goods.append(itemElem, nameElem, priceElem, emailElem, imgElem);