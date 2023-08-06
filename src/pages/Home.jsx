import React, { useEffect, useState } from "react";
import { onValue } from "firebase/database";
import { Table, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { bookRef, removeData } from "../firebase";

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    //Get Data
    onValue(bookRef, (snapshot) => {
      setData({ ...snapshot.val() });
    });
    return () => {
      setData({});
    };
  }, []);

  const onDelete = (id) => {
    if (window.confirm("apakah kamu sungguh ingin menghapus buku ini!")) {
      removeData(id);
    }
  };

  return (
    <div className="pt-16 container">
      <div className="relative overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Judul</Table.HeadCell>
            <Table.HeadCell>Link</Table.HeadCell>
            <Table.HeadCell className="">Halaman</Table.HeadCell>
            <Table.HeadCell>Terakhir Dibaca</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {Object.keys(data).map((id, index) => {
              return (
                <Table.Row key={id} className={data[id].halaman === data[id].terakhirDibaca ? "bg-green-400 text-white" : "bg-white"}>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">{data[id].judul}</Table.Cell>
                  <Table.Cell>
                    <a href={data[id].link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {data[id].link}
                    </a>
                  </Table.Cell>
                  <Table.Cell className="">{data[id].halaman}</Table.Cell>
                  <Table.Cell>{data[id].terakhirDibaca}</Table.Cell>
                  <Table.Cell>
                    <Link to={`/update/${id}`}>
                      <Button className="mb-2">
                        <p>Update</p>
                      </Button>
                    </Link>
                    <Button color="failure" onClick={() => onDelete(id)}>
                      <p>Delete</p>
                    </Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default Home;
