import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: 'AIzaSyD7j9I5PYTb6w-g-NQUvGRJjuLqa35UkBY',
  authDomain: 'tarefas-1215a.firebaseapp.com',
  projectId: 'tarefas-1215a',
  storageBucket: 'tarefas-1215a.appspot.com',
  messagingSenderId: '147420386407',
  appId: '1:147420386407:web:0e1ad5630a3301795630c2',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
