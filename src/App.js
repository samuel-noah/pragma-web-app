import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Navbar';
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
      <div classname="content">
        <Routes>
          <Route exact path="sign-up" element={<SignUp/>}/>
        </Routes>
    </div>
      </Router>
  </div>
  );
}

export default App;
