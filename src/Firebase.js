import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAIoVs99YFC09PopiB4OjAtwlZSka0TmdU",
  authDomain: "instagram-clone-e8b20.firebaseapp.com",
  projectId: "instagram-clone-e8b20",
  storageBucket: "instagram-clone-e8b20.firebasestorage.app",
  messagingSenderId: "200989983557",
  appId: "1:200989983557:web:7be2359db44633d29af42c",
  measurementId: "G-S5PG8J1RK1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);