import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getAnalytics } from "firebase/analytics";
 import {getFirestore, collection, getDocs} from 'firebase/firestore/lite'
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
import { useEffect } from 'react';

export default function App() {
 

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
  const analytics = getAnalytics(app);
  const db = getFirestore(app)

  const queryFunc = async () => {
    const user_data = collection(db, 'relations');
    const query = await getDocs(user_data);
    const query_list = query.docs.map(doc=>doc.data());
    console.log(query_list);
  }

  useEffect( () => {
    queryFunc();
  }, [] )

  
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
