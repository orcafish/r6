function signUp() {
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up successfully
            var user = userCredential.user;
            alert("User signed up successfully!");
        })
        .catch((error) => {
            // Handle errors
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
}

function logIn() {
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Logged in successfully
            var user = userCredential.user;
            alert("User logged in successfully!");
        })
        .catch((error) => {
            // Handle errors
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
}
