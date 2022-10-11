import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, addDoc } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAdNy-QQeSUkjhwUXBOEX10wHRotKik9sw",
    authDomain: "insta-14786.firebaseapp.com",
    projectId: "insta-14786",
    storageBucket: "insta-14786.appspot.com",
    messagingSenderId: "986904333428",
    appId: "1:986904333428:web:50df7a5df639a082ab5521",
    measurementId: "G-F2KG9CC793"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const usersRef = collection(db,"usuarios");

export const queryUser = async ({ email, password }: { email: string; password: string; }) => {

    try {
        const q = query(usersRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc:any) => {
            console.log(doc.id,"=>",doc.data());
        });

        return !querySnapshot.empty;
    } catch (error) {
        return false;
    }
};

export const addUser = async ({ email, password }: { email: string; password: string; }) => {
    
    try {
        const docRef = await addDoc(collection(db,"usuarios"), { email, password });
        console.log(docRef.id);
        return docRef.ref;
    } catch (error) {
        console.error(error);
        return false;
    }
};