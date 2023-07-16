import { initializeApp } from 'firebase/app';
import { 
	PUBLIC_FIREBASE_PROJECT_ID,
	PUBLIC_FIREBASE_USE_EMULATOR,
} from '$env/static/public'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

const firebaseConfig = {
  projectId: PUBLIC_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig)
export const Firestore =  getFirestore(app)

if (PUBLIC_FIREBASE_USE_EMULATOR === 'true') {
	connectFirestoreEmulator(Firestore, 'localhost', 8080)
}

