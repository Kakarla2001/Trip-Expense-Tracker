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
