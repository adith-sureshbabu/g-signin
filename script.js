function onSignIn(googleUser) {
  try {
    var profile = googleUser.getBasicProfile();
    var user_name = profile.getName();
    alert("Welcome " + user_name);
    document.getElementById("g-signin").style.display = "none";
    document.getElementById("si-data").style.display = "block";
    document.getElementById("p-image").src = profile.getImageUrl();
    document.getElementById("u-fname").innerHTML = profile.getName();
    document.getElementById("u-email").innerHTML = profile.getEmail();
  } catch (err) {
    console.log(err);
  }
}

function signOut() {
  try {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2
      .signOut()
      .then(function () {
        alert("You have been successfully signed out!");
        document.getElementById("g-signin").style.display = "block";
        document.getElementById("si-data").style.display = "none";
      })
      .catch(function (err) {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
}
