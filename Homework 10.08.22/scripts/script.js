// Создать форму, с восемью инпутами (имя, фамилия, возраст, ставка, дни, email, ссылка на фото, прогресс)
// При отправке формы собрать данные из инпутов и записать их в пустой массив workers в виде объекта (в формате ключ-значение).
// Используя данные из массива workers, сформировать под формой карточку со следующей информацией:
// Name: ИМЯ ФАМИЛИЯ
// Age: ВОЗРАСТ
// Salary: СТАВКА * ДНИ
// EMAIL (*кликабельный)
// ФОТО (*отображается фото)
// ЛИНИЯ ПРОГРЕССА (*контейнер прогресса наполнен в соответствии со значением, переданным в инпут)
// Каждый раз после отправки формы очищать инпуты
// Карточке и форме добавить стили на выбор

const formElem = document.querySelector('.form');

let workers = [];

const cardsRender = () => {
const cardsContainer = document.querySelector('.cards-container');
cardsContainer.innerText = '';

workers.forEach(({first_name, last_name, age, rate, days, email, photo, progress}) => {
    const card = document.createElement('div');
    const nameElem = document.createElement('p');
    const ageElem = document.createElement('p');
    const salaryElem = document.createElement('p');
    const emailElem = document.createElement('a');
    const photoElem = document.createElement('img');
    const progressContainer = document.createElement('div');
    const progressLine = document.createElement('div');
    const progressValue = document.createElement('p');
    
    nameElem.innerText = `Name: ${first_name} ${last_name}`;
    ageElem.innerText = `Age: ${age}`;
    salaryElem.innerText = `Salary: ${rate * days}`;
    emailElem.innerText = email;
    progressValue.innerText = progress + '%';
    
    emailElem.setAttribute('href', `mailto:${email}`);
    photoElem.setAttribute('src', photo);
    photoElem.setAttribute('alt', 'photo');
    
    card.classList.add('card');
    progressLine.classList.add('progress-line');
    progressContainer.classList.add('progress-container');
    progressValue.classList.add('progress-value');

    progressLine.style.width = progress + '%';

    card.append(nameElem, ageElem, salaryElem, emailElem, photoElem, progressContainer);
    cardsContainer.append(card);
    progressContainer.append(progressLine, progressValue);
    })
};

formElem.addEventListener('submit', (event) => {

    event.preventDefault();

    const {first_name, last_name, age, rate, days, email, photo, progress} = event.target;

workers.push({
    first_name: first_name.value, 
    last_name: last_name.value,
    age: age.value,
    rate: rate.value,
    days: days.value,
    email: email.value,
    photo: photo.value,
    progress: progress.value,
    });

    first_name.value = '';
    last_name.value = '';
    age.value = '';
    rate.value = '';
    days.value = '';
    email.value = '';
    photo.value = '';
    progress.value = '';

    cardsRender();
    console.log(workers);
});