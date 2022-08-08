// В файле html в тэге body есть один элемент div с классом root.
// Используя JS (DOM), создать карточку товара, которая должна включать в себя следующие данные: Артикул, наименование, цена, фотография товара, почта (почта должна быть кликабельна, перебрасывает на приложение для работы с почтовыми адресами). Данные можно взять произвольные.
//Применить стили к карточке: width, background-color, border, border-radius, padding, margin.

const rootElem = document.querySelector(".root")

const card = document.createElement("div");
const articleElem = document.createElement("p");
const nameElem = document.createElement("h3");
const priseElem = document.createElement("h5");
const photoElem = document.createElement("img");
const emailElem = document.createElement("a");

card.classList.add ("cardConteiner")
articleElem.classList.add("articleNum");
nameElem.classList.add("name");
priseElem.classList.add("price");
photoElem.classList.add("photo");
emailElem.classList.add("email");

articleElem.innerText = "Article: 112233";
nameElem.innerText = "Lemon";
priseElem.innerText = "1.25€"
emailElem.innerText = "написать автору"

photoElem.setAttribute ("src", "https://img1.freepng.ru/20180317/vae/kisspng-juice-lemonade-fruit-vector-lemon-fruit-5aace065a59161.6622080115212790776782.jpg");
photoElem.setAttribute ("alt", "Lemon")
emailElem.setAttribute("href", "mailto:alex-lampard@mail.ru")

card.append(articleElem, nameElem, photoElem, priseElem, emailElem);
rootElem.append(card)