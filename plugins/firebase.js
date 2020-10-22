import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/messaging'
import 'firebase/firestore'

const config = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DATABASE_URL,
  projectId: process.env.FB_PROJECTID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID,
  timestampsInSnapshots: true,
}
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const authProviders = {
  Email: firebase.auth.EmailAuthProvider.PROVIDER_ID,
  Google: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
}

export const db = firebase.firestore()
export const auth = firebase.auth()
