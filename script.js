
// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyB1P2CTKVlJCHg4eD9gChOMMArU3labEwc",
	authDomain: "pcklck-1aa5c.firebaseapp.com",
	databaseURL: "https://pcklck-1aa5c-default-rtdb.firebaseio.com",
	projectId: "pcklck-1aa5c",
	storageBucket: "pcklck-1aa5c.appspot.com",
	messagingSenderId: "465342878161",
	appId: "1:465342878161:web:cbb0d80280c95ced3cd0f0",
	measurementId: "G-CXP50BPCL4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
$(document).ready(function(){
	var database = firebase.database();
	var Led1Status;
	var Led2Status;
	var Led3Status;
	var Led4Status;
	database.ref().on("value", function(snapshot){
		Led1Status = snapshot.val().Led1Status;
		Led2Status = snapshot.val().Led2Status;
		Led3Status = snapshot.val().Led3Status;
		Led4Status = snapshot.val().Led4Status;
		if(Led1Status == "1"){
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
			document.getElementById("unactp").style.display = "none";
			document.getElementById("actp").style.display = "block";
		} else {
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
			document.getElementById("unactp").style.display = "block";
			document.getElementById("actp").style.display = "none";
		}
		if(Led2Status == "1"){
			document.getElementById("unact1").style.display = "none";
			document.getElementById("act1").style.display = "block";
			document.getElementById("unactp1").style.display = "none";
			document.getElementById("actp1").style.display = "block";
		} else {
			document.getElementById("unact1").style.display = "block";
			document.getElementById("act1").style.display = "none";
			document.getElementById("unactp1").style.display = "block";
			document.getElementById("actp1").style.display = "none";
		}
		if(Led3Status == "1"){
			document.getElementById("unact2").style.display = "none";
			document.getElementById("act2").style.display = "block";
			document.getElementById("unactp2").style.display = "none";
			document.getElementById("actp2").style.display = "block";
		} else {
			document.getElementById("unact2").style.display = "block";
			document.getElementById("act2").style.display = "none";
			document.getElementById("unactp2").style.display = "block";
			document.getElementById("actp2").style.display = "none";
		}
		
	});

	$(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref("Led1Status");
		if(Led1Status == "1"){
			firebaseRef.set("0");
			Led1Status = "0";
		} else {
			firebaseRef.set("1");
			Led1Status = "1";
		}
	})
	$(".toggle-btn1").click(function(){
		var firebaseRef = firebase.database().ref("Led2Status");
		if(Led2Status == "1"){
			firebaseRef.set("0");
			Led2Status = "0";
		} else {
			firebaseRef.set("1");
			Led2Status = "1";
		}
	})
	$(".toggle-btn2").click(function(){
		var firebaseRef = firebase.database().ref("Led3Status");
		if(Led3Status == "1"){
			firebaseRef.set("0");
			Led3Status = "0";
		} else {
			firebaseRef.set("1");
			Led3Status = "1";
		}
	})
	$(".toggle-btn3").click(function(){
		var firebaseRef = firebase.database().ref("Led4Status");
		if(Led4Status == "1"){
			firebaseRef.set("0");
			Led4Status = "0";
		} else {
			firebaseRef.set("1");
			Led4Status = "1";
		}
	})
	 // Initialize Firebase
	 firebase.initializeApp(firebaseConfig);
		 
	 // Get a reference to the Firebase Storage
	 var storage = firebase.storage();
 
	 function fetchAndDisplayImage() {
		 // Reference to the image file in Storage
		 var imageRef = storage.ref().child('/data/photo.jpg'); // Replace with the correct path to your image
 
		 // Fetch the image file
		 imageRef.getDownloadURL().then(function(url) {
			 // Display the image in the 'photo' element
			 document.getElementById('photo').src = url;
		 }).catch(function(error) {
			 console.error("Error fetching image from Storage:", error);
		 });
	 }

	 // Call fetchAndDisplayImage function when the page finishes loading
	 window.onload = function() {
		 fetchAndDisplayImage();
	 };
	 
});
