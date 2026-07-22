// firebase.ts

// @ts-ignore
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

// @ts-ignore
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// @ts-ignore
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  onSnapshot // 👑 إضافة الدالة الحية هنا للاستماع اللحظي للمصنع
  // @ts-ignore
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCaZcUy6DMEexWlzgbpRxiRbMf-Lx6ltiw",
  authDomain: "nexus-48640.firebaseapp.com",
  projectId: "nexus-48640",
  storageBucket: "nexus-48640.firebasestorage.app",
  messagingSenderId: "10111532796",
  appId: "1:10111532796:web:ae6736785c0b036408e179",
  measurementId: "G-9RGE831SS7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

const db = getFirestore(app);

export {
  app,
  auth,
  provider,
  db,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  onSnapshot // 🚀 تصديرها الآن لتقرأها صفحة اللودر وصفحة تطبيقاتي فوراً
};