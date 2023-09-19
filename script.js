function showSignupForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("search-bar").style.display = "none";
    document.getElementById("info-screen").style.display = "none";
    document.getElementById("return-arrow").style.display = "none";
}

function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("search-bar").style.display = "none";
    document.getElementById("info-screen").style.display = "none";
    document.getElementById("return-arrow").style.display = "none";
}

function showMap() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("search-bar").style.display = "none";
    document.getElementById("map").style.display = "block";
    document.getElementById("search-results").style.display = "block";
    document.getElementById("return-arrow").style.display = "block";
    document.getElementById("info-screen").style.display = "none";
}

function showSearchBar() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("search-bar").style.display = "block";
    document.getElementById("map").style.display = "none";
    document.getElementById("return-arrow").style.display = "none";
    document.getElementById("info-screen").style.display = "none";
    
}

function showScreen() {
    document.getElementById("map").style.display = "none";
    document.getElementById("info-screen").style.display = "block";
    document.getElementById("return-arrow").style.display = "block";

    
}


