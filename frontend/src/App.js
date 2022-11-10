import {React} from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Header from "./Components/Header";
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
            <h1>1</h1>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h1>2</h1>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h1>3</h1>
          </div>
        </TabPanel>
        
      </Tabs>
    </div>
  );
}

export default App;
