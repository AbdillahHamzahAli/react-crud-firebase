import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";
import { onValue } from "firebase/database";
import { toast } from "react-toastify";
import { writeData, bookRef, updateData } from "../firebase";

const initialState = {
  judul: "",
  link: "",
  halaman: "",
  terakhirDibaca: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});
  const { judul, link, halaman, terakhirDibaca } = state;

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    onValue(bookRef, (snapshot) => {
      setData({ ...snapshot.val() });
    });
    return () => {
      setData({});
    };
  }, [id]);

  useEffect(() => {
    if (id) {
      setState({ ...data[id] });
    } else {
      setState({ ...initialState });
    }
    return () => {
      setState({ ...initialState });
    };
  }, [id, data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!judul || !link || !halaman || !terakhirDibaca) {
      return toast.error("please provided value in each input is flied");
    }

    if (!id) {
      writeData(state);
    } else {
      updateData(id, state);
    }
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <div className="container">
      <div className="h-screen flex flex-col items-center justify-center">
        <form className="flex w-full md:w-6/12 flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="judul" value="Judul Buku" />
            </div>
            <TextInput value={judul || ""} name="judul" id="judul" placeholder="judul buku" type="text" onChange={handleInputChange} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="link" value="Link Buku" />
            </div>
            <TextInput value={link || ""} name="link" id="link" placeholder="link buku" type="text" onChange={handleInputChange} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="halaman" value="Jumlah Halaman" />
            </div>
            <TextInput value={halaman || ""} name="halaman" id="halaman" placeholder=" jumlah halaman buku" type="number" onChange={handleInputChange} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="terakhir dibaca" value="Terakhir Dibaca" />
            </div>
            <TextInput value={terakhirDibaca || ""} name="terakhirDibaca" id="terakhir dibaca" placeholder="terakhir dibaca (halaman)" type="number" onChange={handleInputChange} />
          </div>
          <Button type="submit">{id ? "Update" : "Save"}</Button>
        </form>
      </div>
    </div>
  );
};

export default AddEdit;
