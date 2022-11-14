import axios from "axios";
import {React, useEffect, useState} from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AccountInformation from "./Components/AccountInformation";
import Header from "./Components/Header";
import LoadingBox from "./Components/LoadingBox";
import MessageBox from "./Components/MessageBox";
import Profile from "./Components/Profile";
import Table from "./Components/Table";
function App(props) {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [length, setLength] = useState(0);
  const [userDetails,setUserDetails] = useState('')
  const [loanId,setLoanId] = useState('')
  
  const updateStatus = async(e)=>{
    let currentUser = JSON.parse(localStorage.getItem("current_user"))
    const updatedUser = await axios.post(`http://localhost:5000/api/v1/user/update-user/${currentUser.loan_id}`)
    if (updatedUser.data.status == 200) {
      alert("Status Updated");
    }
  }

  const setCurrentUser = (userdata)=>{
    localStorage.setItem("current_user", JSON.stringify(userdata));
  }

  const getProfile = async(id)=>{
    let user = await axios.get(`http://localhost:5000/api/v1/user/get-user/${id}`)
    setUserDetails(user.data.data[0]);
    
  }

  

  useEffect(() => {
    try {
      const fetchData = async () => {
        const userdata = await axios.get(
          "http://localhost:5000/api/v1/user/all-users"
        );
        setUser(userdata.data.data);
      };
      fetchData();
    } catch (error) {
      setError("dsdsdsd");
    }
  }, []);
  const openTab = (evt, cityName)=> {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  return (
    <div className="App">
      <Header />
      <div class="tab">
        <button class="tablinks" onClick={(e) => openTab(e, "dashboard")}>
          Loan Dashboard
        </button>
        <button class="tablinks" onClick={(e) => openTab(e, "profile")}>
          My Profile
        </button>
        <button class="tablinks" onClick={(e) => openTab(e, "information")}>
          Accountant Information
        </button>
      </div>

      <div id="dashboard" class="tabcontent">
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
                        <button
                          class="tablinks btn btn-primary"
                          onClick={(e) => {
                            openTab(e, "profile");
                            getProfile(user.loan_id);
                          }}
                        >
                          Save
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <div id="profile" class="tabcontent" style={{ display: "none" }}>
        <h3>My Profile</h3>
        <form>
          <p>First Name</p>
          <input
            type="text"
            className="form-control"
            value={userDetails.first_name}
          />
          <p>Last Name</p>
          <input
            type="text"
            className="form-control"
            value={userDetails.last_name}
          />
          <p>E-mail address</p>
          <input
            type="email"
            className="form-control"
            value={userDetails.email}
          />
          <p>Region</p>
          <select className="form-control">
            <option>option1</option>
            <option>option2</option>
            <option>option3</option>
            <option>option4</option>
          </select>
          <div className="BtnList mt-2">
            <button
              className="nextBtn"
              onClick={(e) => {
                e.preventDefault()
                openTab(e, "information");
                setCurrentUser(userDetails)
              }}
            >
              Next
            </button>
            <button className="cancelBtn">Cancel</button>
          </div>
        </form>
      </div>

      <div id="information" class="tabcontent" style={{ display: "none" }}>
        <h3>Account Information</h3>
        <form>
          <p>Accounting Firm</p>
          <input type="text" className="form-control" />
          <p>Accountant's Name</p>
          <input type="text" className="form-control" />
          <p>Accountant's Telephone Number</p>
          <input type="text" className="form-control" />
          <p>Accountant's Email Address</p>
          <input type="email" className="form-control" />

          <div className="BtnList mt-2">
            <button className="nextBtn" onClick={(e)=>{e.preventDefault();updateStatus("test");}}>Submit</button>
            <button className="cancelBtn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
