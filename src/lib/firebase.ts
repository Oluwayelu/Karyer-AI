// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

import { getAI, getGenerativeModel, GoogleAIBackend } from "firebase/ai";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxavnG9O99GVjLj6ElATk3M4mZmIYIDms",
  authDomain: "karyer-c2406.firebaseapp.com",
  projectId: "karyer-c2406",
  storageBucket: "karyer-c2406.firebasestorage.app",
  messagingSenderId: "350763748453",
  appId: "1:350763748453:web:205df9eed7008762088a8c",
  measurementId: "G-M81GHZQFQJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize the Gemini Developer API backend service
const ai = getAI(app, { backend: new GoogleAIBackend() });

// Create a `GenerativeModel` instance with a model that supports your use case
export const model = getGenerativeModel(ai, { model: "gemini-2.0-flash" });

// Wrap in an async function so you can use await
// async function run() {
//     // Provide a prompt that contains text
//     const prompt = "Write a story about a magic backpack."

//     // To generate text output, call generateContent with the text input
//     const result = await model.generateContent(prompt);

//     const response = result.response;
//     const text = response.text();
//     console.log(text);
//   }

//   run();
