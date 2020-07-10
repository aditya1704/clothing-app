import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
apiKey: "AIzaSyAToobvljJuPpGi5DF25PT-iGYYOMTefXE",
authDomain: "clothing-app-fa0bf.firebaseapp.com",
databaseURL: "https://clothing-app-fa0bf.firebaseio.com",
projectId: "clothing-app-fa0bf",
storageBucket: "clothing-app-fa0bf.appspot.com",
messagingSenderId: "202539843892",
appId: "1:202539843892:web:b906666a8324e098e0a561",
measurementId: "G-DMZFG26543"
};

export const createUserProfileDocument = async (userAuth,additionalData)=>{
    if(!userAuth) return;  //checks if the user auth object is returned by googleAuth

    const userRef = firestore.doc(`users/${userAuth.uid}`);//creates a path reference to users stored in firestore

    const snapshot = await userRef.get();//gets a snapshot of the collection/document present at userRef

    //if snapshot is false we will add the user in firestore & if snapshot exists then we will not add the user 
    if(!snapshot.exists){
        const{displayName,email}=userAuth;

        const createdAt=new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        }catch(error){
            console.log("error occured during storing user:"+error)
        }

    }

    return userRef;
}

firebase.initializeApp(config);


export const firestore =firebase.firestore();

//Google auth SignIn
export const auth=firebase.auth();
const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;