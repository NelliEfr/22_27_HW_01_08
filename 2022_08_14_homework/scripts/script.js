let form = document.querySelector('.form');

let workers = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let root = document.querySelector('.root');

    root.innerText = '';

    let card = document.createElement('div');
    let firstNameElem = document.createElement('p');
    let lastNameElem = document.createElement('p');
    let ageElem = document.createElement('p');
    let salaryElem = document.createElement('p');
    let emailElem = document.createElement('a');
    let photElem = document.createElement('img');
    let progressElem = document.createElement('p');
    let progressBarElem = document.createElement('div');
    let progressFrameElem = document.createElement('div');

    let firstName = event.target.first_name.value;
    let lastName = event.target.last_name.value;
    let age = event.target.age.value;
    let rate = event.target.rate.value;
    let days = event.target.days.value;
    let email = event.target.email.value;
    let photo = event.target.photo.value;
    let progress = event.target.progress.value;

    firstNameElem.innerText = `First name: ${firstName}`;
    lastNameElem.innerText = `Last name: ${lastName}`;
    ageElem.innerText = `Age: ${age}`;
    salaryElem.innerText = `Salary: ${rate * days}`;
    emailElem.innerText = email;
    emailElem.setAttribute('href', `mailto:${email}`);
    photElem.setAttribute('src', photo);
    progressElem.innerText = `${progress}%`;
    progressBarElem.style.width = progress + '%';

    card.classList.add('card');
    progressFrameElem.classList.add('progress_frame');
    progressBarElem.classList.add('progress_bar');

    progressBarElem.append(progressElem);
    progressFrameElem.append(progressBarElem);
    card.append(firstNameElem, lastNameElem, ageElem, salaryElem, email, photElem, progressFrameElem);

    root.append(card);

    workers.push({
        Name: `${firstName} ${lastName}`,
        Age: age,
        Salary: rate * days,
        Email: email,
        Photo: photo,
        Progress: progress 
    });

    event.target.first_name.value = '';
    event.target.last_name.value = '';
    event.target.age.value = '';
    event.target.rate.value = '';
    event.target.days.value = '';
    event.target.email.value = '';
    event.target.photo.value = '';
    event.target.progress.value = '';
    console.log(workers);
});
