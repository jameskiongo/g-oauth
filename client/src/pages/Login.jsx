import React from 'react'

function Login() {
    return (
    <div className='login'>
        <h1 className="loginTitle">Choose your Login method</h1>
        <div className="wrapper">
            <div className="left">
                <div className="loginButton google">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-icon.png" alt="" className="icon" />
                    Google
                    </div>
                    <div className="loginButton facebook">
                    <img src="https://cdn-icons-png.flaticon.com/512/59/59439.png" alt="" className="icon" />
                    Facebook
                    </div>
                    <div className='loginButton github'>
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" className="icon" />
                    Github 
                    </div>
                </div>
                <div className="center">
                    <div className="line"/>
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" placeholder='Username' />
                    <input type="password" placeholder='Password' />
                    <button className="submit">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login