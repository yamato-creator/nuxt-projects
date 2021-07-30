import firebase from 'firebase'

const config = {
  projectId: process.env.FIREBASE_PROJECT_ID
}

// 初期化
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

// 他の場所で使えるように
export default firebase