const firebaseConfig = {
    apiKey: "AIzaSyDvr5AZEdnbRmTQuKvph5cIeO1o662mTQ8",
  authDomain: "ecosistemas-de-apps-2de1b.firebaseapp.com",
  databaseURL: "https://ecosistemas-de-apps-2de1b-default-rtdb.firebaseio.com",
  projectId: "ecosistemas-de-apps-2de1b",
  storageBucket: "ecosistemas-de-apps-2de1b.appspot.com",
  messagingSenderId: "131410176852",
  appId: "1:131410176852:web:dce2237f75e75d0a53b6c1",
  measurementId: "G-1KDBVWY3NV"
};

export function getFirebaseConfig(){
    if(!firebaseConfig || ! firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    } else {
        return firebaseConfig;
    }
}