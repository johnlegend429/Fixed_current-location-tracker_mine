navigator.geolocation.getCurrentPosition(
  function (position) {
    var latitude = parseFloat(position.coords.latitude);
    var longitude = parseFloat(position.coords.longitude);
    localStorage.setItem("latitude", latitude);
    localStorage.setItem("longitude", longitude);

    initMap(latitude, longitude);
  },
  function errorCallback(error) {
    console.log(error);
  }
);

function initMap(lat, lng) {
  var myLatLng = {
    lat,
    lng,
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(myLatLng),
    zoom: 15,
  });
  const infowindow = new google.maps.InfoWindow({
    content: "My Location",
  });

  var icon = new Object();
  if (localStorage.getItem("gender") == "male") {
    icon.url = "../CSS/Images/male.png";
    icon.scaledSize = new google.maps.Size(100, 100);
  } else {
    icon.url = "../CSS/Images/female.png";
    icon.scaledSize = new google.maps.Size(90, 100);
  }
  const marker = new google.maps.Marker({
    position: new google.maps.LatLng(myLatLng),
    map: map,
    icon: icon,
    animation: google.maps.Animation.BOUNCE,
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: true,
    });
  });
}
var savedDetails = "";
function addDetails() {
  var allDetails = JSON.parse(localStorage.getItem("allDetails"));
  allDetails.sort(function (a, b) {
    return (
      b.current_date.localeCompare(a.current_date) ||
      b.current_time.localeCompare(a.current_time)
    );
  });
  allDetails.forEach((e) => {
    savedDetails += `<div class='card savedCard'><div class='card-body'>
      <h6>latitude: ${e.latitude}</h6>
      <h6>longitude: ${e.longitude}</h6>
      <h6>Date Saved: ${e.current_date}</h6>
      <h6>Time Saved: ${e.current_time}</h6></div></div>`;
    var detailsDiv = document.getElementsByClassName("detailsDiv")[0];
    detailsDiv.innerHTML = savedDetails;
  });
}

window.initMap = initMap;
function gendervalidation() {
  var genderInput = document.getElementById("inputGender").value;
  var genderValue = genderInput.toLowerCase();

  if (genderValue == "male" || genderValue == "female") {
    document.getElementById("wrongInput").style.display = "none";
    if (genderValue == "male") {
      localStorage.setItem("gender", "male");
    } else {
      localStorage.setItem("gender", "female");
    }
    var iframe = document.getElementById("mapIframe");
    iframe.setAttribute("src", iframe.getAttribute("data-src"));
    document.getElementById("latitude").innerHTML +=
      localStorage.getItem("latitude");
    document.getElementById("longitude").innerHTML +=
      localStorage.getItem("longitude");

    $("#myModal").modal("hide");
  } else {
    document.getElementById("wrongInput").style.display = "block";
    $("#myModal").modal({ backdrop: "static", keyboard: false }, "show");
  }
}
function inputChange() {
  document.getElementById("wrongInput").style.display = "none";
}
function refresh() {
  savedDetails = "";
  addDetails();
  alert("Details Refreshed");
}
addDetails();
