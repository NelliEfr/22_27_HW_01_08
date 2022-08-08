// Создать форму, с четырьмя инпутами (имя, возраст, ставка, дни)
// При отправке формы собрать данные из инпутов
// Сформировать под формой карточку с тремя параграфами:

const rootElem = document.querySelector('#root');
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    rootElem.innerText = '';
    let nameElem = event.target.full_name.value;
    let ageElem = event.target.age.value;
    let rateElem = event.target.rate.value;
    let daysElem = event.target.days.value;
    let wageElem = rateElem * daysElem;

    let card = document.createElement('p');
    card.innerText = `Name: ${nameElem} Age: ${ageElem} Wage: ${wageElem}`;

    card.classList.add('card');
    event.target.full_name.value = '';
    event.target.age.value = '';
    event.target.rate.value = '';
    event.target.days.value = '';
    rootElem.append(card);
});

