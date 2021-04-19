import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext, useState } from 'react';
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login';
import DashBoard from './component/DashBoard/DashBoard/DashBoard';
import AllClient from './component/DashBoard/AllClient/AllClient/AllClient';
import HireDataTable from './component/DashBoard/HireDataTable/HireDataTable';
import AddService from './component/DashBoard/AddService/AddService';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';
import Payment from './component/DashBoard/Payment/Payment';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState();
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/mechanic/dashboard">
            <DashBoard/>
          </PrivateRoute>
          <Route path="/mechanic/bookings">
            <HireDataTable/>
          </Route>
          <Route path="/mechanic/clients">
            <AllClient/>
          </Route>
          <Route path="/payment">
            <Payment/>
          </Route>
          <Route path="/addService">
            <AddService/>
          </Route>
          
        </Switch>
      </Router>
      </UserContext.Provider >
  );
}

export default App;
