import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDVynd_S6rk-zyBzWBT80meZ3sRmMt2ADo",
    authDomain: "inventory-mng-sys.firebaseapp.com",
    databaseURL: "https://inventory-mng-sys.firebaseio.com",
    projectId: "inventory-mng-sys",
    storageBucket: "inventory-mng-sys.appspot.com",
    messagingSenderId: "1042697341158",
    appId: "1:1042697341158:web:427e14aad2dba0f02c9327"
};
firebase.initializeApp(firebaseConfig);
export default firebase

    //KARLI API
    // apiKey: "AIzaSyD5KyqAjvvE-PbTJBzad2p9dNMRk_N3y2g",
    // authDomain: "qr-inventory-a8944.firebaseapp.com",
    // databaseURL: "https://qr-inventory-a8944.firebaseio.com",
    // projectId: "qr-inventory-a8944",
    // storageBucket: "qr-inventory-a8944.appspot.com",
    // messagingSenderId: "746612325177",
    // appId: "1:746612325177:web:fe8855e894b40ae3b106e8",
    // measurementId: "G-VTFWK0NKPD"