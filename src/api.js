// export async function getVans(id) {
//   const url = id ? `/api/vans/${id}` : "/api/vans"
//   const res = await fetch(url);
//   if(!res.ok) {
//     throw {
//       message: id ? "Failed to fetch van" : "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status
//     }
//   }
//   const data = await res.json();
//   if(id) {
//     return data.van
//   }
//   else {
//     return data.vans;
//   }
// }

// export async function getHostVans(hostId, id) {
//   const url = id ? `/api/host/${hostId}/vans/${id}` : `/api/host/${hostId}/vans`
//   const res = await fetch(url);
//   if(!res.ok) {
//     throw {
//       message: id ? "Failed to fetch van" : "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status
//     }
//   }
//   const data = await res.json();
//   if(id) {
//     return data.van
//   }
//   else {
//     return data.vans;
//   }
// }

// export async function loginUser(creds) {
//   const res = await fetch("/api/login", { method: "post", body: JSON.stringify(creds) })
//   const data = await res.json()
//   if (!res.ok) {
//     throw {
//       message: data.message,
//       statusText: res.statusText,
//       status: res.status
//     }
//   }
//   return data
// }

import {initializeApp} from "firebase/app"
import {
  collection,
  getDocs,
  getFirestore,
  getDoc,
  doc,
  query,
  where
} from "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyAk6l0s-z5mZrzH6cW6tJSkwUDctyohc2M",

  authDomain: "vanlife-87bbf.firebaseapp.com",

  projectId: "vanlife-87bbf",

  storageBucket: "vanlife-87bbf.appspot.com",

  messagingSenderId: "196690991076",

  appId: "1:196690991076:web:c81ef1ceb8ce60103859f1"

};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export async function getVans() {
  const querySnapshot = await getDocs(collection(db, "vans"));
  const vans = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  // console.log(vans)
  return vans
}

export async function getVan(id) {
  const VanSnapshot = await getDoc(doc(db, "vans", id));
  const van = {
    ...VanSnapshot.data(),
    id: VanSnapshot.id
  }
  // console.log(van)
  return van
}

export async function getHostVans(hostId) {
  const q = query(collection(db, "vans"), where("hostId", "==", hostId))
  const querySnapshot = await getDocs(q)
  const hostVans = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  // console.log(hostVans)
  return hostVans
}

export async function loginUser(creds) {
  // const res = JSON.stringify(creds)
  const userSnapshot = await getDoc(doc(db, "users", creds.password));
  if(userSnapshot.exists()) {
    const data = {
      user: {
          ...userSnapshot.data(),
          id: userSnapshot.id,
          password: ""     
      },
      token: "Enjoy your pizza, here are your tokens."
    }
    return data
  }
  else {
    return new Response(401, {}, { message: "No user with those credentials found!" })
  }
}