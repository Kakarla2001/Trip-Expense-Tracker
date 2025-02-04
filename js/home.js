document.addEventListener("DOMContentLoaded", loadTrips);
function addTrip() {
    console.log("add trip");
    const tripName = document.getElementById("newTripName").value.trim();
    console.log(tripName);
    if (tripName === "") return alert("Enter a valid trip name!");

    let trips = JSON.parse(localStorage.getItem("trips")) || [];

    if (trips.includes(tripName)) return alert("Trip already exists!");


    trips.push(tripName);
    localStorage.setItem("trips", JSON.stringify(trips));

    loadTrips();





}


function loadTrips() {
    console.log("load trip called");
    let trips = JSON.parse(localStorage.getItem("trips")) || [];
    let tripList = document.getElementById("tripList");
    tripList.innerHTML = "";
    
    trips.forEach(trip => {
        let li = document.createElement("li");//<li></li>
        let a = document.createElement("a");//<a></a>
        a.href = `trip.html?trip=${encodeURIComponent(trip)}`;//<a href ="trip.html?trip="></a>
        a.textContent = trip;//<a href ="trip.html?trip=">trip1</a>
        a.classList.add("trip-link");//<a class="trip-link "href ="trip.html?trip=">trip1</a>
        li.appendChild(a);//<li><a class="trip-link "href ="trip.html?trip=">trip1</a></li>
        tripList.appendChild(li);
    });

}