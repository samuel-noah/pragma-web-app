import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return ( 
        <div className="home">
            <div className="home-left">
            <h1>Welcome to Pragma </h1>
            <p>Pragma is a medium for people to express their self fully 
                without any bounderies of cencorship 
            </p>
            </div>
            <div className="home-right">
                <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
                <Link to={"/sign-up"}>Sign Up</Link>
            </div>
        </div>
     );
}
 
export default Home;