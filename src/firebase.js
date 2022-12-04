import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDAos2tsQhkOw7XUX0Ur_mTiJDi1MOzRIs',
  authDomain: 'fir-auth-98.firebaseapp.com',
  projectId: 'fir-auth-98',
  storageBucket: 'fir-auth-98.appspot.com',
  messagingSenderId: '1080253749119',
  appId: '1:1080253749119:web:6c78975e87f4edf069ac4a',
  measurementId: 'G-4K4GNT1B32',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
