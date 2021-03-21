import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componemts/Header/Header';
import Home from './componemts/Home/Home';
import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './componemts/NotFound/NotFound';
import Login from './componemts/Login/Login';
import Destination from './componemts/Destination/Destination';
import PrivateRoute from './componemts/PrivateRoute/PrivateRoute';
import Contact from './componemts/Contact/Contact';
import FakeData from '../src/FakeData/FakeData.json';
export const UserContext = createContext();
function App() {
  const [loggedInUSer, setLoggedInUser] = useState({});
  const [rideInfo, setRideInfo] = useState([]);
  useEffect(() => {
    setRideInfo(FakeData);
  },[])
  return (
    <div>
      <UserContext.Provider value={[loggedInUSer, setLoggedInUser]}>
        {
          console.log("fake data",rideInfo)
        }
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home rideInfo={rideInfo}></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/destination/:item">
              <Destination rideInfo={rideInfo}></Destination>
            </PrivateRoute>
            {/* <PrivateRoute path="/destination">
              <Destination></Destination>
            </PrivateRoute> */}
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
