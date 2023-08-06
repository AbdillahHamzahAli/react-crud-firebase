import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, set, update } from "firebase/database";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX8pEFi2m_6Gi8nVChwgl2eH8a6wjBuaA",
  authDomain: "react-books-mark.firebaseapp.com",
  projectId: "react-books-mark",
  storageBucket: "react-books-mark.appspot.com",
  messagingSenderId: "402457353798",
  appId: "1:402457353798:web:5da5a5c3a510a6d3a37447",
  databaseURL: "https://react-books-mark-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const bookRef = ref(db, "book/");

// Create Data
function writeData({ judul, link, halaman, terakhirDibaca }) {
  push(bookRef, {
    judul: judul,
    link: link,
    halaman: halaman,
    terakhirDibaca: terakhirDibaca,
  })
    .then(() => {
      toast.success(`Buku ${judul} Berhasil Ditambahkan!`);
    })
    .catch((err) => toast.error(err));
}

// Update Data
function updateData(id, { judul, link, halaman, terakhirDibaca }) {
  update(ref(db, "book/" + id), {
    judul: judul,
    link: link,
    halaman: halaman,
    terakhirDibaca: terakhirDibaca,
  })
    .then(() => {
      toast.success(`Buku Berhasil Diupdate!`);
    })
    .catch((err) => toast.error(err));
}

// Delete Data
function removeData(id) {
  set(ref(db, "book/" + id), null)
    .then(() => {
      toast.success(`Buku Berhasil Dihapus!`);
    })
    .catch((err) => toast.error(err));
}

export { writeData, bookRef, removeData, updateData };
