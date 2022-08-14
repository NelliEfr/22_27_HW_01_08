const workers = [
    {
      id: 1,
      first_name: "Olga",
      last_name: "Petrova",
      age: 18,
      rate: 100,
      days: 15,
      photo: "https://reqres.in/img/faces/12-image.jpg",
      progress: 50
    },
    {
      id: 2,
      first_name: "Petr",
      last_name: "Ivanov",
      age: 46,
      rate: 70,
      days: 22,
      photo: "https://reqres.in/img/faces/4-image.jpg",
      progress: 10
    },
    {
      id: 3,
      first_name: "Oleg",
      last_name: "Orlov",
      age: 32,
      rate: 34,
      days: 10,
      photo: "https://reqres.in/img/faces/10-image.jpg",
      progress: 75
    },
    {
      id: 4,
      first_name: "Irina",
      last_name: "Medvedeva",
      age: 22,
      rate: 85,
      days: 17,
      photo: "https://reqres.in/img/faces/2-image.jpg",
      progress: 30
    },
  ];

  const root_elem = document.querySelector(".root");

  workers.forEach(({id, first_name, last_name, age, rate, days, photo, progress}) => {
    const card = document.createElement("div");
    const id_elem = document.createElement("p");
    const first_name_elem = document.createElement("p");
    const last_name_elem = document.createElement("p");
    const age_elem = document.createElement("p");
    const saray_elem = document.createElement("p");
    const photo_elem = document.createElement("img")
    const progress_elem = document.createElement("p");

    const saray = rate * days;

    id_elem.innerText = `ID: ${id}`;
    first_name_elem.innerText = `First name: ${first_name}`;
    last_name_elem.innerText = `Last name: ${last_name}`;
    age_elem.innerText = `Age: ${age}`;
    saray_elem.innerText = `Saray: ${saray}`;
    progress_elem.innerText = `Progress: ${progress}`;

    photo_elem.setAttribute("src", photo);
    photo_elem.setAttribute("alt", "photo");

    card.classList.add("card");
    photo_elem.classList.add("photo");

    card.append(id_elem, first_name_elem, last_name_elem, age_elem, saray_elem, photo_elem, progress_elem);
    root_elem.append(card);
  });