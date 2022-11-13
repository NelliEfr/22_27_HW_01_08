// В файле html в тэге body есть один элемент div с классом root.
// Используя JS (DOM), создать карточку товара, которая должна включать в себя следующие данные: Артикул, наименование, цена, фотография товара, почта (почта должна быть кликабельна, перебрасывает на приложение для работы с почтовыми адресами). Данные можно взять произвольные.
//Применить стили к карточке: width, background-color, border, border-radius, padding, margin.
const root = document.querySelector('.root')
const article = document.createElement('p');
const articleName = document.createElement('p');
const price = document.createElement('p');
const photo = document.createElement('img');
const mail = document.createElement('a');

article.innerText='Headphones';
articleName.innerText='Beyerdynamic';
price.innerText='280 $';
photo.setAttribute('src', 'https://d33p2k2w4zpozf.cloudfront.net/media/catalog/product/cache/4832662449f27945c40903385bb67a42/d/t/dt770pro-250ohm_perspective_v1.jpg');
photo.setAttribute('alt', 'Beyerdynamic DT770PRO');
mail.innerText = 'mihailfrunze1@gmail.com';
mail.setAttribute('href', 'mailto:mihailfrunze1@gmail.com');

root.append(article, articleName, price, photo, mail);

