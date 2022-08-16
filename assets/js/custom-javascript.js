/*!
* Kang Aan Wasi - Custom Javascript (https://aanwhs.gihub.io/js/custom-javascript.js)
* Copyright 2014-2022 Kang Aan Wasi
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/



// copyright
$(document).ready(function() {
	// Check if href is changed
	if ($("#copyright").attr("href") != "https://aanwhs.github.io") {
		window.location.href = "https://aanwhs.github.io"; // Redirect destination link
	};
	// Check if tag is hidden
	if ($("#copyright").css('display') == 'none' || $("#copyright").css("visibility") == "hidden"){
		window.location.href = "https://aanwhs.github.io"; // Redirect destination link
	}
});



// OnClickFunction
function OnClickFunction() {
	//
}
function AdOnClickFunction() {
	window.open('//luvaihoo.com/afu.php?zoneid=2861509','_blank');
	window.open('//zuphaims.com/afu.php?zoneid=3771802','_blank');
}



// change url
// $(document).ready(function(){
	// $("#Agoda").attr("href", $("#Agoda").attr("href").replace("aanwhs", "1891664"))
// });



// For Coupon Code
// <button onclick="ForGetCode()">Dapatkan Kode</button>
// <button onclick="VisitLinkCouponCode()">Visit a Link</button>
// <div id="ForGetCode" style="display: none;">For Coupon Code</div>
function ForGetCode() {
	var x = document.getElementById("ForGetCode");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
	window.open("https://shopee.co.id/m/promo-bank-spesial-BRS-BRI-1");
}
function VisitLinkCouponCode() {
	window.open("https://shopee.co.id/m/promo-bank-spesial-BRS-BRI-1");
}



// Redirect a Webpage
// <button onclick="RedirectWebpageFunction()">Replace document</button>
function RedirectWebpageFunction() {
	// location.replace("https://www.w3schools.com")
	// Simulate an HTTP redirect: window.location.replace("http://www.w3schools.com");
	// Simulate a mouse click: window.location.href = "http://www.w3schools.com";
}



// Change Text
// <p id="ChangeText"></p>
// document.getElementById("ChangeText").innerHTML = "Hello World!";



// Click To View
// <button type="button" onclick="document.getElementById('ClickToView').innerHTML = Date()">Click me to display Date and Time.</button>
// <p id="ClickToView"></p>



// Offline Detection
// Is the browser online? <button onclick="OfflineDetectionFunction()">Check here!</button>
// <p id="OfflineDetection"></p>
// var x = navigator.onLine;
// if (x === "true") {
	// document.getElementById("OfflineDetection").innerHTML = "No, this browser is offline.";
// } else {
	// document.getElementById("OfflineDetection").innerHTML = "Yes, this browser is online.";
// }