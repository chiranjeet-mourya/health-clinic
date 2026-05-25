// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// const firebaseConfig = {
//   apiKey: "AIzaSyC2DcWKDlMtUwFsxL56Sn83wTodBybSFzw",
//   authDomain: "clinic-e988f.firebaseapp.com",
//   projectId: "clinic-e988f",
//   storageBucket: "clinic-e988f.firebasestorage.app",
//   messagingSenderId: "924857483333",
//   appId: "1:924857483333:web:fc4e6810563bcb8382232c",
//   measurementId: "G-0WNQWH9LTP"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2DcWKDlMtUwFsxL56Sn83wTodBybSFzw",
  authDomain: "clinic-e988f.firebaseapp.com",
  projectId: "clinic-e988f",
  storageBucket: "clinic-e988f.firebasestorage.app",
  messagingSenderId: "924857483333",
  appId: "1:924857483333:web:fc4e6810563bcb8382232c",
  measurementId: "G-0WNQWH9LTP",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;