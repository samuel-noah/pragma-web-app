import {Link, useNavigate} from 'react-router-dom'
import { useRef,useState } from 'react';
import { useAuth } from './Auth';
import './SignUp';
import UserProfile from './UserProfile';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {logIn} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            await logIn(emailRef.current.value, passwordRef.current.value)
            navigate('/user-profile')
        }catch(err){
            setError('Failed to Login')
            console.log(err.message)
        }
        setLoading(false)
    }


    return ( 
        <div className="sign-up">
            <h1>Login</h1>
            {error&& <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <lable>Email</lable>
                <input type="email" placeholder="Email" ref={emailRef}/>
                <lable>Password</lable>
                <input type="password" placeholder="Password" ref={passwordRef}/>
                <button disabled ={loading}className='logIn-button' type="Submit">Login</button>
            </form>
            <div className="to-log-in">
                <p>Need an account?</p>
                <Link to="/sign-up">Sign Up</Link>
            </div>
        </div>
            
     );
}
 
export default Login;