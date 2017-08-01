import * as firebase from 'firebase'
import settings from './settings'

const firebaseApp = firebase.initializeApp(settings)

export const auth = firebaseApp.auth()
export const db = firebaseApp.database()
export const PROVIDER = new firebase.auth.GoogleAuthProvider()

export default firebaseApp
