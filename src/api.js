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

export async function getHostVans(hostId, id) {
  const url = id ? `/api/host/${hostId}/vans/${id}` : `/api/host/${hostId}/vans`
  const res = await fetch(url);
  if(!res.ok) {
    throw {
      message: id ? "Failed to fetch van" : "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json();
  if(id) {
    return data.van
  }
  else {
    return data.vans;
  }
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", { method: "post", body: JSON.stringify(creds) })
  const data = await res.json()
  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status
    }
  }
  return data
}

import {initializeApp} from "firebase/app"
import {
  collection,
  getDocs,
  getFirestore,
  getDoc,
  doc
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
  const vansSnapshot = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return vansSnapshot
}

export async function getVan(id) {
  const VanSnapshot = await getDoc(doc(db, "vans", id))
  return VanSnapshot
}