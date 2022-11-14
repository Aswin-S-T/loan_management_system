import React from "react";

function Header() {
  return (
    <div className="header">
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSTuEEror33O3BohUuywGiuEHVWMX84Jb5A&usqp=CAU"
            width="50"
            height="50"
            class="d-inline-block align-top"
            alt=""
          />
          <span style={{top:"21px",position:"absolute",fontWeight:"bold",color:"blue"}}>Loan Management System</span>
        </a>
      </nav>
    </div>
  );
}

export default Header;
