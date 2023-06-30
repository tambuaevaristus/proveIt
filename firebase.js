import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBkeGULWE8idXdVAcByCWhu0wpKSHaMy_c",
    authDomain: "mui-cv.firebaseapp.com",
    databaseURL: "https://mui-cv-default-rtdb.firebaseio.com",
    projectId: "mui-cv",
    storageBucket: "mui-cv.appspot.com",
    messagingSenderId: "981031295595",
    appId: "1:981031295595:web:ec873dca512a9b936a6f2e"
  };


  const app = initializeApp(firebaseConfig);

  export default app
