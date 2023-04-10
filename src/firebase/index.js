
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAemUWfaz5Un_nLIBu5WVc9H0SsvzXT5Zk",
  authDomain: "vue3-todo-app-b426e.firebaseapp.com",
  projectId: "vue3-todo-app-b426e",
  storageBucket: "vue3-todo-app-b426e.appspot.com",
  messagingSenderId: "963368505346",
  appId: "1:963368505346:web:d3b1d73bc11ceb3976971b"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {
  db
}