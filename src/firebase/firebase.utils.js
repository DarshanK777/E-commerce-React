import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBywsjyORgNS5r1TwEV6DAzbnnxFRihbNE",
    authDomain: "reactdb-83287.firebaseapp.com",
    databaseURL: "https://reactdb-83287.firebaseio.com",
    projectId: "reactdb-83287",
    storageBucket: "reactdb-83287.appspot.com",
    messagingSenderId: "639063527296",
    appId: "1:639063527296:web:8b06f96733271bbc6bfb65",
    measurementId: "G-HB3BC6SK0X"
  };

  export const createUserProfileDocument = async(userAuth, additionalData)=>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists){
      const{ displayName, email } = userAuth
      const createdAt = new Date()
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(e){
        console.log('error creating user', e.message)
      }
    }
    return userRef
  }

  firebase.initializeApp(config);



  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase