// ЗАДАЧА 2
// Сформировать fetch-запрос, использовать адреса https://reqres.in/api/users?page=1 и https://reqres.in/api/users?page=2
// Из полученных данный отрисовать интерфейс как на приложенной картинке.
// Кнопки внизу осуществляют переключение между страницами 1 и 2

const rootElem = document.querySelector('#root');

let id_num = 1;
const render = (data) => {
    rootElem.innerText = '';
    const cards = data.map(({first_name, avatar}) => {
        const card = document.createElement('div');
        const firstNameElem = document.createElement('p');
        const avatarElem = document.createElement('img');

        firstNameElem.innerText = first_name;
        avatarElem.setAttribute('src', avatar);
        avatarElem.alt = 'photo';

        card.classList.add('card');

        card.append(avatarElem, firstNameElem);
        return card
    });
    rootElem.append(...cards);
}

const request = (id) => {
    fetch(`https://reqres.in/api/users?page=${id}`)
    .then(resp => resp.json())
    .then(json => render(json.data))
}

request(id_num);



const triggers = document.querySelectorAll('.triggers button');

const [first_btn, second_btn] = triggers;

first_btn.addEventListener('click', () => request(1));
second_btn.addEventListener('click', () => request(2));

