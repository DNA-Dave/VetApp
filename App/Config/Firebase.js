import * as firebase from 'firebase';

// should go in a secret file
var config = {
     apiKey: "AIzaSyAJuadYRXb0eXP11ZCy9v2LYsD7xsUVS0E",
    authDomain: "vethub-22cd1.firebaseapp.com",
    databaseURL: "https://vethub-22cd1.firebaseio.com",
    projectId: "vethub-22cd1",
    storageBucket: "vethub-22cd1.appspot.com",
    messagingSenderId: "572683174466"
};
firebase.initializeApp(config);
const firebaseDb = firebase.database().ref();

// Everything needs to call this... i.e. 
// var dbRef = firebaseDb.child('something')

// To sync Data with database ... 
// dbRef.on('value', snap => {
// 	console.log(snap.val())
// })

export  {
	firebase, firebaseDb
}




