
function Signin({tooglePage}) {
    const holderText = 'Phone number, username, or email';
    return (
        <div className="signin-container">
            <h1 className="instaHeading">Instagram</h1>
            <input type="text" placeholder={holderText} />
            <input type="password" placeholder="Password" />
            <button onClick={tooglePage}>Sign in</button>
            <p>Don't have account? <span>Sign up</span></p>
        </div>
    )
}

export default Signin;