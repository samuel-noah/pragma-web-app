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


function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Router>
      <Navbar></Navbar>
      <div classname="content">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route exact path="sign-up" element={<SignUp/>}/>
        </Routes>
        <Routes>
          <Route exact path = "timeline" element={<Timeline/>}/>
        </Routes>
        <Routes>
          <Route exact path = "login" element={<Login/>}/>
        </Routes>
    </div>
      </Router>
  </div>
  </AuthProvider>

  );
}

export default App;
