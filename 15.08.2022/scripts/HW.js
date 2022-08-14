const formElem = document.querySelector(".form");

let workersArr = [];

const cardRender = () => {
    const cardsContainer = document.querySelector(".cardsContainer");
    cardsContainer.innerText = "";

    workersArr.forEach(({lastName, firstName, age, rate, days, email, photo, progress}) => {
        const card = document.createElement("div");
        const nameElem = document.createElement("p");
        const ageElem = document.createElement("p");
        const sarayElem = document.createElement("p");
        const emailElem = document.createElement("a");
        const photoElem = document.createElement("img");
        const progressContainer = document.createElement("div");
        const progressLine = document.createElement("div");
        const progressValue = document.createElement("p");

        nameElem.innerText = `Name: ${lastName} ${firstName}`;
        ageElem.innerText = `Age: ${age}`;
        sarayElem.innerText = `Saray: ${rate * days}`;
        emailElem.innerText = email;
        photoElem.innerText = photo;
        progressValue.innerText = progress + "%";

        emailElem.setAttribute("href", `mailto:${email}`);
        photoElem.setAttribute("src", photo);
        photoElem.setAttribute("alt", "photo");

        card.classList.add("card");
        photoElem.classList.add("photo");
        progressContainer.classList.add("progressContainer");
        progressLine.classList.add("progressLine");
        progressValue.classList.add("progressValue");

        progressLine.style.width = progress + "%";

        progressContainer.append(progressLine, progressValue);
        card.append(nameElem, ageElem, sarayElem, emailElem, photoElem, progressContainer);
        cardsContainer.append(card);
    })
};

formElem.addEventListener("submit", (event) => {
    event.preventDefault();

    const {lastName, firstName, age, rate, days, email, photo, progress} = event.target;

    workersArr.push({
        lastName: lastName.value,
        firstName: firstName.value,
        age: age.value,
        rate: rate.value,
        days: days.value,
        email: email.value,
        photo: photo.value,
        progress: progress.value,
    })

    lastName.value = "";
    firstName.value = "";
    age.value = "";
    rate.value = "";
    days.value = "";
    email.value = "";
    photo.value = "";
    progress.value = "";

    cardRender();
})