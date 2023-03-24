import { BrowserRouter as Router, Routes, Route, useLocation  } from "react-router-dom";
import Login from "./pages/login";
import NewRequestPage from "./pages/NewRequest";
import DashboardPage from './pages/Dashboard';
import InboxPage from './pages/Inbox';
import ProfilePage from './pages/Profile';
import SettingsPage from './pages/Settings';
import Navbar from "./components/navbar/Navbar"
import React, { useEffect, useState } from "react";
import MainPageFunc from "./pages/MainPage";
import Footer from "./components/Footer/Footer";
import SignInForm from "./pages/signup";
import PostExperience from "./pages/PostExperience";
import Authentication from "./components/Auth/Auth";
const tabNametoIndex = {
  Dashboard: 1,
  Profile: 2,
  Inbox: 3,
  Settings: 4
}

function App() {

  let location = useLocation();
  // console.log(props);
  // const { location }  = props;
  // const [selectedTab, setSelectedTab] = useState(
  //   tabNametoIndex[location.pathname.split("/")[2]]
  //   ? tabNametoIndex[location.pathname.split("/")[2]]
  //   : 1
  // );

  // const handleTabChange = (newValue) => {
  //   setSelectedTab(newValue)
  // };

  const allPagesStyle = {
    display: "flex",
    "flex-direction": "column",
    "min-height": "100vh",
  }

  const content = {
    "flex": 1,
    // "padding-bottom": "110px"
  }

  
  return (
    // <Router>
      <>
        {!location.pathname.includes("/authentication") && <Navbar />}
        

        <body  style = {allPagesStyle}>

          <div style = {content}>

            <Routes>
              <Route exact path="/authentication/0" element={<Authentication />}/>
              <Route path="/home/Dashboard/" element={<MainPageFunc />}/>
            </Routes>

          </div>

          {!location.pathname.includes("/authentication") && <Footer/>}

        </body>
      </>
    
    // </Router>
  );

}

export default App;
