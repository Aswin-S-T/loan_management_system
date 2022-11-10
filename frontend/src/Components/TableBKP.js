import axios from "axios";
import React, { useEffect, useState } from "react";
import { TableSimple } from "react-pagination-table";
import { TablePagination } from "react-pagination-table";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";

function Table() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [length, setLength] = useState(0);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const userData = await axios.get(
          `http://localhost:5000/api/v1/user/all-users`
        );
        console.log("DATA =============", typeof userData.data.data);
        setLoading(false);
        setUser(userData.data.data);
        setLength(userData.data.data.length);
      } catch (error) {
        setError("Oops Please try again Later!!!!");
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const data = [
    { size: ["L", "M"], phone: 1234567, gender: "Male", age: 20, name: "Ben" },
    {
      size: ["L", "M", "XL"],
      phone: 1234567,
      gender: "Female",
      age: 22,
      name: "Ken",
    },
    {
      size: ["L", "S"],
      phone: 1234567,
      gender: "Female",
      age: 23,
      name: "Jay",
    },
    { size: ["M", "S"], phone: 1234567, gender: "Male", age: 26, name: "Chip" },
    {
      size: ["XL", "XS"],
      phone: 1234567,
      gender: "Male",
      age: 23,
      name: "Lee",
    },
    {
      size: ["L", "M", "S", "XS"],
      phone: 1234567,
      gender: "Female",
      age: 30,
      name: "Frank",
    },
    { size: ["S", "L"], phone: 1234567, gender: "Male", age: 23, name: "CoCo" },
  ];
  const Header = ["Loan ID", "Purpose", "Status", "Options"];
  {
    console.log("TYPE::::::::", typeof user);
  }
  return (
    <div className="container-fluid">
      <h2>Welcome User</h2>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{"Error"}</MessageBox>
      ) : (
        <a href="/aswins">
          <TablePagination
            className="user-table"
            title=""
            subTitle=""
            headers={Header}
            data={user}
            columns="loan_id.purpose.status"
            perPageItemCount={5}
            totalCount={data.length}
            arrayOption={[["size", "all", " "]]}
          />
        </a>
      )}
    </div>
  );
}

export default Table;
