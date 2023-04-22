
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { collection, getDocs, getFirestore, setDoc, doc, getDoc} from 'firebase/firestore'
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
import express from 'express';
import cors from 'cors'
import bodyParser from "body-parser";
 
 const API = express();
 API.use(cors());
 API.use(bodyParser.json())
 const port = 2000;

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

API.get('/api/', (req, res) => {
    res.send('health check');
});

const getAll = async (res) => {
    const user_data = collection(db, 'relations');
    const query = await getDocs(user_data);
    const query_list = query.docs.map(doc=>doc.data());
    console.log(query_list);
    res.send(query_list)
    return query_list
}

const update_quote = async (req, res) => {
        const user_data = collection(db, 'relations');
        await setDoc(doc(db, 'relations', req.body.username), req.body)
        return
}

const get_quote = async (req, res) => {
    const docSnap = await getDoc(doc(db, "relations", req.query.docname))
    if (docSnap.exists()) {
        res.send(docSnap.data())
      } else {
        console.log("No such document!");
      }
}

API.get('/api/get-quote', (req, res) => {
    get_quote(req, res)
})

API.post('/api/update-quote', (req, res) => {
    update_quote(req, res)
})

API.get('/api/get-all', (req,res) => {
    getAll(res);
})

API.listen(port, (req, res) => {
    console.log(`Server is listening on port ${port}`)
})