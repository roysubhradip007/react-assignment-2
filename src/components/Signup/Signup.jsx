
function Signup({tooglePage}) {
    const holderText = 'Phone number, username, or email';
    return (
        <div className="signin-container">
            <h1 className="instaHeading">Instagram</h1>
            <input type="text" placeholder='Phone number or email' />
            <input type="text" placeholder='Full Name' />
            <input type="text" placeholder={holderText} />
            <input type="password" placeholder="Password" />
            <button onClick={tooglePage}>Sign in</button>
            <p>have an account? <span>Log in</span></p>
        </div>
    )
}

export default Signup;