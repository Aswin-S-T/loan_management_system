import axios from "axios";
import React, { useEffect, useState } from "react";
import { TableSimple } from "react-pagination-table";
import { TablePagination } from "react-pagination-table";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import Profile from "./Profile";

function Table() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [length, setLength] = useState(0);
  const changePage = () => {
    console.group("CALLED");
    return <Profile data={"aswins"}></Profile>;
  };
  useEffect(() => {
    try {
      const fetchData = async () => {
        const userdata = await axios.get(
          "http://localhost:5000/api/v1/user/all-users"
        );
        // console.log(userdata.data.data);
        setUser(userdata.data.data);
      };
      fetchData();
    } catch (error) {
      setError("dsdsdsd");
    }
  }, []);

  return (
    <div className="container-fluid">
      <h2>Welcome User</h2>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{"Error"}</MessageBox>
      ) : (
        <table class="table mt-4 bg-light">
          <thead>
            <tr>
              <th scope="col">Loan ID</th>
              <th scope="col">Prpose</th>
              <th scope="col">Status</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr>
                  <th scope="row">{user.loan_id}</th>
                  <td>{user.purpose}</td>
                  <td>{user.status}</td>
                  <td>
                    <a onClick={changePage} className="btn btn-primary">
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
