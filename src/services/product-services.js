import { collection, getDocs, query, where } from "firebase/firestore";
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

export const getAllProductsWithName = async (stringToMatch) => {
  const collectionRef = collection(db, collectionName);
  
  const dbQuery = query(collectionRef, where("name", "==", stringToMatch));
  
  const querySnapshot = await getDocs(dbQuery);
  const cleanedData = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  
  console.log(cleanedData);
  return cleanedData;
}