import firebase from 'firebase/app'
import 'firebase/store' 
import { constant } from 'lodash'

const firebaseConfig = {
    apiKey: "AIzaSyAM9nEJaG6bEFqKU3NZ0hsHhnNzU0b1Kq8",
    authDomain: "crud-6d29c.firebaseapp.com",
    projectId: "crud-6d29c",
    storageBucket: "crud-6d29c.appspot.com",
    messagingSenderId: "793183403264",
    appId: "1:793183403264:web:5852cc096b26bb58a2c7e5"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)
  