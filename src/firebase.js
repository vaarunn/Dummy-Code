// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCMbXZlArMb1bsUUeGfdianzCN8XeWuPcM',
  authDomain: 'job-bie.firebaseapp.com',
  projectId: 'job-bie',
  storageBucket: 'job-bie.appspot.com',
  messagingSenderId: '402631292202',
  appId: '1:402631292202:web:c452be6c929b6098ee9a53',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
