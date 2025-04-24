import { initializeApp, cert } from "firebase-admin/app";
import { getAuth, Auth } from "firebase-admin/auth";
import { getFirestore, Firestore } from "firebase-admin/firestore";
import dotenv from "dotenv";

dotenv.config();

initializeApp({
	credential: cert({
	  projectId: process.env.FIREBASE_PROJECT_ID,
	  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
	  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
	}),
	databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
  });

const auth: Auth = getAuth();

const db: Firestore = getFirestore();

export { auth, db };