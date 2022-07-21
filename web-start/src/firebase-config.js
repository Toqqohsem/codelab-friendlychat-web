/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0rZffrJFXEK4dPtT4vS7G4z1PTJdxErc",
  authDomain: "friendlychat-d059c.firebaseapp.com",
  projectId: "friendlychat-d059c",
  storageBucket: "friendlychat-d059c.appspot.com",
  messagingSenderId: "942201875523",
  appId: "1:942201875523:web:3e4c7eccf1b35ad00238f6",
  measurementId: "G-9V874XSNB7"
};

};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}