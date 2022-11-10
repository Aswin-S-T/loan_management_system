import axios from "axios";
import React, { useEffect, useState } from "react";
import { TableSimple } from "react-pagination-table";
import { TablePagination } from "react-pagination-table";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";

function Table() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [length,setLength] = useState(0)
  useEffect(() => {
    let data = await
  }, []);
 
  
  return (
    <div className="container-fluid">
      {console.log('users=================',users.first_name)}
      <h2>Welcome User</h2>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{"Error"}</MessageBox>
      ) : (
        
        <a href="/aswins">
          {console.log('USER===========',users)}
          <h1>hello aswins</h1>
        </a>
      )  }
    </div>
  );
}

export default Table;
