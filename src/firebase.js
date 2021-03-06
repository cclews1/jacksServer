import serviceAccount from '../config/serviceAccount.json';

var firebaseConfig = {
  apiKey: 'AIzaSyCbGNzD7c7TXQOQmHjrd5p-iwggWNApVk8',
  authDomain: 'jacks-c1db1.firebaseapp.com',
  databaseURL: 'https://jacks-c1db1.firebaseio.com',
  projectId: 'jacks-c1db1',
  storageBucket: 'jacks-c1db1.appspot.com',
  messagingSenderId: '1070700048057',
  appId: '1:1070700048057:web:de9c31c300a2d15fe4f568',
  measurementId: 'G-J6Z3L0EKE8',
};

import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    ...firebaseConfig,
  });
} else {
  admin.app();
}

export default admin;
