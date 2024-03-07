import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_ID",
  measurementId: "MEASUREMENT_ID",
};

initializeApp(firebaseConfig);
const db = getFirestore();

const colref = collection(db, "current-location-tracker");

const addlocation = document.querySelector(".sendLocation");
addlocation.addEventListener("click", (e) => {
  e.preventDefault();
  var date = new Date();
  var current_date =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  var date = new Date();
  var current_time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  addDoc(colref, {
    latitude: localStorage.getItem("latitude"),
    longitude: localStorage.getItem("longitude"),
    current_date: current_date,
    current_time: current_time,
  }).then((e) => {
    alert("Your location details has been saved");
    getDocsDetails();
  });
});
function getDocsDetails() {
  getDocs(colref)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        var details = {
          id: doc.id,
          latitude: doc.data().longitude,
          longitude: doc.data().latitude,
          current_date: doc.data().current_date,
          current_time: doc.data().current_time,
        };

        var existingDetails = JSON.parse(localStorage.getItem("allDetails"));
        if (existingDetails == null) existingDetails = [];

        localStorage.setItem("details", JSON.stringify(details));
        var filteredDetails = existingDetails.filter((value) => {
          return value.id != details.id;
        });
        localStorage.setItem("allDetails", JSON.stringify(filteredDetails));
        filteredDetails.push(details);
        localStorage.setItem("allDetails", JSON.stringify(filteredDetails));
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
getDocsDetails();
