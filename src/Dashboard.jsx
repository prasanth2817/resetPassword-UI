import React from "react";
import AxiosService from "./Common/ApiService";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

function Dashboard() {
  const [data, setData] = useState([]);
  const getUsers = async () => {
    try {
      let res = await AxiosService.get(`/user`);
      if (res.status === 200)
      setData(res.data.users);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <tr key={e._id}>
                <td>{i + 1}</td>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.email}</td>
                <td>{e.role}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Dashboard;
