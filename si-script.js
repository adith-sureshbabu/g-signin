function onSignIn(googleUser) {
	var profile = googleUser.getBasicProfile();
	var user_name = profile.getName();
	alert("Welcome " + user_name);
	document.getElementById("g-signin").style.display = "none";
	document.getElementById("si-data").style.display = "block";
	document.getElementById("p-image").src = profile.getImageUrl();
	//document.getElementById("p-id").innerHTML = profile.getId();
	document.getElementById("u-fname").innerHTML = profile.getName();
	document.getElementById("u-email").innerHTML = profile.getEmail();

}
	
function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function () {		
		alert("You have been successfully signed out!");
		document.getElementById("g-signin").style.display="block";
		document.getElementById("si-data").style.display="none";
	});
}

//var id_token = googleUser.getAuthResponse().id_token;
//var token = gapi.auth.getToken();
//var accessToken = gapi.auth.getToken().access_token;