import {Link, useNavigate} from 'react-router-dom'
import { useRef,useState } from 'react';
import { useAuth } from './Auth';
import './SignUp.css';


const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();
    const {signUp} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value, usernameRef.current.value)
            navigate('/user-profile')
        }catch(err){
            setError('Error signing up')
            console.log(err.message)
        }
        setLoading(false)
    }


    return ( 
        <div className="sign-up">
            <h1>Sign Up</h1>
            
            {error&& <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <lable>Email</lable>
                <input type="email" placeholder="Email" ref={emailRef}/>
                <lable>Password</lable>
                <input type="password" placeholder="Password" ref={passwordRef}/>
                <lable>Username</lable>
                <input type="text" placeholder="Username" ref={usernameRef}/>
                <button disabled ={loading} className='SignUp-button' type="Submit">Sign Up</button>
            </form>
            <div className="to-log-in">
                <p>Already have an account?</p>
                <Link to="/login">Log In</Link>
            </div>
        </div>
            
     );
}
 
export default SignUp;