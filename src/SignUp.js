const SignUp = () => {
    return ( 
        <div className="sign-up">
            <h1>Sign Up</h1>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
            </form>
        </div>
            
     );
}
 
export default SignUp;