import './Navbar.css';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Pragma App</h1>
            <div className="navbar-link">
                <Link to="#">Home</Link>
                <Link to="#">Linkbout</Link>
                <Link to="sign-up">Sign Up</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;