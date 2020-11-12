(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDsMTfE8vkgE6CsUHLtK7mqVif0xpAual4",
        authDomain: "the-cuban.firebaseapp.com",
        databaseURL: "https://the-cuban.firebaseio.com",
        projectId: "the-cuban",
        storageBucket: "the-cuban.appspot.com",
        messagingSenderId: "646336027967"
    };
    
    firebase.initializeApp(config);

    // get elements 
    const preObject = document.getElementById('object');

    // create referance 
    const dbRefObject = firebase.database().ref().child('object');

    // sync object changes 
    dbRefObject.on('value', snap => console.log(snap.val())); 
    
    dbRefObject.on('value', snap => {
        preObject.innerText = JSON.stringify(snap.val(), null, 3);
    });
}());