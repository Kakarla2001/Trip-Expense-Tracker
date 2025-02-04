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
