import { collection, doc, getDoc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../config/firestore";

const collectionName = "ecommerce";


export const getAllProducts = async () => {
  const collectionRef = collection(db, collectionName); // reference to the collection inside database
  const snapshot = await getDocs(collectionRef);
  //console.log(snapshot);
  const cleanedData = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(), // the doc has a method called data() that returns the data of the document
  }));
  console.log(cleanedData);
  return cleanedData;
};

export const getProductById = async (id) => {
  const docRef = doc(db, collectionName, id);

  const docSnap = await getDoc(docRef);

  if(!docSnap.exists()) {
    throw new Error("Could not find the product with id " + id);
  }

  return {id: docSnap.id, ...docSnap.data()};
}

export const getAllProductsWithMatchingField = async (fieldName, stringToMatch) => {
  const collectionRef = collection(db, collectionName);
  
  const dbQuery = query(collectionRef, where(fieldName, "==", stringToMatch));
  
  const querySnapshot = await getDocs(dbQuery);
  const cleanedData = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  
  console.log(cleanedData);
  return cleanedData;
}

export const subscribeToCollection = (callback) => {
  const collectionRef = collection(db, collectionName);
  // called unsub as it gives back an unsubscribe functionality
  // onSnapshot returns a unsubscribe function for clean up
  const unsub = onSnapshot(collectionRef, (snapShot) => {
    // everytime this collection changes i want to do something
    // i want to setProduct data
    const productData = snapShot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    callback(productData); //LandingPage: setProducts(productData)
  });

  return unsub;
}