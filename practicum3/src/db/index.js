import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyAuUTbYgDTfkOFY7PyiKseMGapyuGTSIFE',
  authDomain: 'admin-123456.firebaseapp.com',
  databaseURL: 'https://admin-123456.firebaseio.com',
  projectId: 'admin-123456',
  storageBucket: 'admin-123456.appspot.com',
  messagingSenderId: '48964863959',
  appId: '1:48964863959:web:36846cb293cc8ba56aed92'
}

const firebaseapp = firebase.initializeApp(config)

export default firebaseapp.firestore()
