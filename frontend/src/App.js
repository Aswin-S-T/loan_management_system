import axios from "axios";
import {React, useEffect, useState} from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AccountInformation from "./Components/AccountInformation";
import Header from "./Components/Header";
import LoadingBox from "./Components/LoadingBox";
import MessageBox from "./Components/MessageBox";
import Profile from "./Components/Profile";
import Table from "./Components/Table";
function App() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [length, setLength] = useState(0);

  const getProfile = (id)=>{
    console.log('PROFILE CALLED ID : ',id)
  }

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
  const openCity = (evt, cityName)=> {
    console.log('CALLED************')
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  return (
    // <div className="App">
    //   <Header />
    //   <Tabs>
    //     <TabList>
    //       <Tab onClick={check}>
    //         <p>Loan Dashboard</p>
    //       </Tab>
    //       <Tab>
    //         <p>My Profile</p>
    //       </Tab>
    //       <Tab>
    //         <p>Accountant Information</p>
    //       </Tab>
    //       <Tab>
    //         <p>test</p>
    //       </Tab>
    //     </TabList>

    //     <TabPanel>
    //       <div className="panel-content">
    //         <Table />
    //       </div>
    //     </TabPanel>
    //     <TabPanel>
    //       <div className="panel-content">
    //         <Profile />
    //       </div>
    //     </TabPanel>
    //     <TabPanel>
    //       <div className="panel-content">
    //         <AccountInformation />
    //       </div>
    //     </TabPanel>
    //   </Tabs>
    // </div>
    <div className="App">
      <div class="tab">
        <button class="tablinks" onClick={(e) => openCity(e, "dashboard")}>
          Loan Dashboard
        </button>
        <button class="tablinks" onClick={(e) => openCity(e, "profile")}>
          My Profile
        </button>
        <button class="tablinks" onClick={(e) => openCity(e, "information")}>
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
                          onClick={(e) => {openCity(e, "profile");getProfile(user.loan_id)}}
                        >
                          test
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
        {/* <button class="tablinks" onClick={(e) => openCity(e, "information")}>
          test
        </button> */}
      </div>

      <div id="profile" class="tabcontent" style={{ display: "none" }}>
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="information" class="tabcontent" style={{ display: "none" }}>
        <h3>information</h3>
        <p>information is the capital of Japan.</p>
      </div>
    </div>
  );
}

export default App;
