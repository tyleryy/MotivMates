
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
import express from 'express';
import cors from 'cors'

 
 const API = express();
 API.use(cors());
 const port = 3000;

const firebaseConfig = {
    apiKey: "AIzaSyA3TwYE8yiEm7e7s80kHPFfnXLDvuBF1Sg",
    authDomain: "motivmates.firebaseapp.com",
    databaseURL: "https://motivmates-default-rtdb.firebaseio.com",
    projectId: "motivmates",
    storageBucket: "motivmates.appspot.com",
    messagingSenderId: "693369238340",
    appId: "1:693369238340:web:7a3cc222a0754e6b805d11",
    measurementId: "G-XRLEV03ZNK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)

API.get('/', (req, res) => {
    res.send('health check');
});

const firestore_func = async (res) => {
    const user_data = collection(db, 'relations');
    const query = await getDocs(user_data);
    const query_list = query.docs.map(doc=>doc.data());
    console.log(query_list);
    res.send(query_list)
    return query_list
}

API.get('/firestore', (req,res) => {
    firestore_func(res);
})

API.listen(port, (req, res) => {
    console.log(`Server is listening on port ${port}`)
})