import {React} from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AccountInformation from "./Components/AccountInformation";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Table from "./Components/Table";
function App() {
  return (
    <div className="App">
      <Header />
      <Tabs>
        <TabList>
          <Tab>
            <p>Loan Dashboard</p>
          </Tab>
          <Tab>
            <p>My Profile</p>
          </Tab>
          <Tab>
            <p>Accountant Information</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
            <Table />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <Profile />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
           <AccountInformation />
          </div>
        </TabPanel>
        
      </Tabs>
    </div>
  );
}

export default App;
