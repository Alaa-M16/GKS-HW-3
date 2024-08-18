const people = document.getElementById('people');
const persons = new XMLHttpRequest();
persons.open("GET", "persons.json");
persons.setRequestHeader("Content-type", "application/json");
persons.send()
persons.onload = () => {
    const data = JSON.parse(persons.response);
    data.forEach(person => {
        const card = document.createElement('div');
        card.classList.add('person_card');
        card.innerHTML = `
         <h2>${person.name}</h2>
         <img src="${person.photo}" alt="${person.name}" class="person_photo">
         <p>Age: ${person.age}</p>
       `;
        people.appendChild(card);
    });
};


const request = new XMLHttpRequest()
request.open('GET', 'data.json')
request.setRequestHeader("Content-type", 'application/json')
request.send()
request.onload = () => {
    const data = JSON.parse(request.response)
    data.forEach(info => {
        console.log(info)
    })
}