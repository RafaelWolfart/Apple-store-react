import { initializeApp } from 'firebase/app';
import { addDoc, getFirestore } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { where, query} from 'firebase/firestore';

const firebaseConfig = {
        apiKey: "AIzaSyC0IBWfp2heScqrsUKmsBM3fnOLpn-_eWU",
        authDomain: "apple-store-commerce.firebaseapp.com",
        projectId: "apple-store-commerce",
        storageBucket: "apple-store-commerce.firebasestorage.app",
        messagingSenderId: "207234077218",
        appId: "1:207234077218:web:68269abaa6b894afc0707b"
    };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getProducts() {
    try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        if (querySnapshot.size !== 0) {
            const prodList = querySnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
            return prodList;
        } else {
            console.log('No hay productos en la base de datos');
        }
    } catch (err) {
        console.error('No se pudo obtener la colección', err);
    }
}

export async function getSingleProduct(id) {
    const docRef = doc(db, 'products', id);

    try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data()
        } else {
            console.log('No se encontró el producto');
        }
    } catch (err) {
        console.error('No se pudo obtener el documento', err);
    }
}

export async function addNewOrder(order) {
    const orderCollection = collection(db, "orders");

    try {
        const docRef = await addDoc(orderCollection, order)
        return docRef.id
    } catch (err) {
        console.error('No se pudo agregar el documento', err);
    }
}


export async function getCategory (category){
    try {
        const filteredQuery = query (
            collection(db, 'products'),
            where('category', '==', category)
        );
        const querySnapshot = await getDocs(filteredQuery);
        if (querySnapshot.size !== 0) {
            const prodList = querySnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
            return prodList;
        } else {
            console.log('Colección vacía');
        }
    } catch (err) {
        console.error('No se recuperó la colección', err);
    }
}