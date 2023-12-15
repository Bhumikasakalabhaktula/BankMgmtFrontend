import './App.css';
import { Route, Router } from "react-router-dom";
import { Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Transaction from './components/Transaction';
import RequestATM from './components/RequestAtm';
import TransactionHistory from './components/TransactionHistory';
import AdminHome from './components/AdminHome';
import Conformation from './components/Conformation';
import ProfilePage from './components/Profile';
import UserList from './components/ListUsers';
import Contactus from './components/Contactus';
function App() {
  return (
    <div className="App">
         <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/register" element={<Register />}/> 
            <Route path="/transaction"element={<Transaction />}/>
            <Route path ="/requestAtm"element= {<RequestATM/>}/> 
            <Route path = "/transactionHistory"element={<TransactionHistory/>}/>
            <Route path = "/adminHome"element = {<AdminHome/>}/> 
            <Route path = "/conformation"element = {<Conformation/>}/>  
            <Route path = "/profile"element = {<ProfilePage/>}/> 
            <Route path = "/userAccounts"element = {<UserList/>}/>
            <Route path = "/contactus"element = {<Contactus/>}/>   
 

          </Routes>  
    </div>
  );
}

export default App;
