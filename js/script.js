document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const tripName = params.get("trip");

    if (!tripName) {
        alert("Trip not found!");
        window.location.href = "index.html";
    }

    document.getElementById("tripTitle").textContent = tripName;

    loadPersons(tripName);
    loadExpenses(tripName);
});
function goBack() {
    window.location.href = "index.html";
}
function addPerson() {
    const tripName = new URLSearchParams(window.location.search).get("trip");
    const name = document.getElementById("personName").value.trim();
    if (name === "") return alert("Enter a valid name!");

    let persons = JSON.parse(localStorage.getItem(`persons_${tripName}`)) || [];
    if (persons.includes(name)) return alert("Person already exists!");

    persons.push(name);
    localStorage.setItem(`persons_${tripName}`, JSON.stringify(persons));

    loadPersons(tripName);
}
function loadPersons(tripName) {
    let persons = JSON.parse(localStorage.getItem(`persons_${tripName}`)) || [];
    let personList = document.getElementById("personList");
    let payerSelect = document.getElementById("payerSelect");
    let forSelectContainer = document.getElementById("forSelectContainer");

    personList.innerHTML = "";
    payerSelect.innerHTML = "";
    forSelectContainer.innerHTML = "";

    // Update Person List
    personList.innerHTML = persons.map(p => `<li>${p}</li>`).join("");

    // Update Payer Dropdown
    persons.forEach(person => {
        let option = new Option(person, person);
        payerSelect.add(option);
    });

    // Update "For" checkboxes
    persons.forEach(person => {
        let checkboxDiv = document.createElement("div");
        checkboxDiv.classList.add("checkbox-container");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = person;
        checkbox.id = `checkbox-${person}`;

        let label = document.createElement("label");
        label.htmlFor = `checkbox-${person}`;
        label.textContent = person;

        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);
        forSelectContainer.appendChild(checkboxDiv);
    });
}
function clearSelections() {
    document.querySelectorAll("#forSelectContainer input[type=checkbox]").forEach(checkbox => {
        checkbox.checked = false;
    });
}
