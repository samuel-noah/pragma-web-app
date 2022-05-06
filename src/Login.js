import {Link} from 'react-router-dom'
import { useRef,useState, useHistory } from 'react';
import { useAuth } from './Auth';
import './SignUp';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {logIn} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            await logIn(emailRef.current.value, passwordRef.current.value)
            history.push('/')
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
                <button disabled ={loading}className='logIn-button' type="Submit">Sign Up</button>
            </form>
            <div className="to-log-in">
                <p>Need an account?</p>
                <Link to="/">Sign Up</Link>
            </div>
        </div>
            
     );
}
 
export default Login;