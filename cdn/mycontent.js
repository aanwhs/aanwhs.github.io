$(document).ready(function() {
	// Check if href is changed
	if ($("#mycontent").attr("href") != "https://www.example.com") {
		window.location.href = "https://aanwhs.blogspot.com"; // Redirect destination link
	};
	// Check if tag is hidden
	if ($("#mycontent").css('display') == 'none' || $("#mycontent").css("visibility") == "hidden"){
		window.location.href = "https://aanwhs.blogspot.com"; // Redirect destination link
	}
});
