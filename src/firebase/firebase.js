import { initializeApp } from "firebase/app";
import { addDoc, getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { where, query } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getProduct(id) {
  const docRef = doc(db, "products", id);

  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No se encontró el producto");
    }
  } catch (err) {
    console.error("No se pudo obtener el documento", err);
  }
}

export async function getProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = [];
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return products;
}

export async function addNewOrder(order) {
  const orderCollection = collection(db, "orders");

  try {
    const docRef = await addDoc(orderCollection, order);
    return docRef.id;
  } catch (err) {
    console.error("No se pudo agregar el documento", err);
  }
}

export async function getCategory(category) {
  try {
    const filteredQuery = query(
      collection(db, "products"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(filteredQuery);
    if (querySnapshot.size !== 0) {
      const prodList = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      return prodList;
    } else {
      console.log("Colección vacía");
    }
  } catch (err) {
    console.error("No se recuperó la colección", err);
  }
}
