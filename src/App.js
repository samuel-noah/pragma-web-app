import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Home";
import {AuthProvider} from "./Auth";
import Navbar from './Navbar';
import SignUp from './SignUp';
import Timeline from './Timeline';
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "./UserProfile";


function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Router>
      <Navbar></Navbar>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact path="sign-up" element={<SignUp/>}/>
          <Route exact path = "login" element={<Login/>}/>
          <Route exact path = "user-profile" element={<UserProfile/>}/>
          <Route exact path = "timeline" element={<Timeline/>}/>
        </Routes>
    </div>
      </Router>
  </div>
  </AuthProvider>

  );
}

export default App;
