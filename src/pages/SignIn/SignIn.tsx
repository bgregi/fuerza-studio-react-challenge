import React from "react";
// import nocturnalLogo from '../../assets/nocturnal-logo.svg'
import Input from "../../components/Input/Input"
import SubmitButton from "../../components/SubmitButton/SubmitButton"


export default function SignIn() {
    return (
        <>
            {/* <img src={nocturnalLogo} alt="logo" className="nocturnalLogoBig" /> */}
            <div className="signInForm">
                <div>
                    <h1>Sign in</h1>
                    <a href="">Sign up</a>
                </div>
                <form>
                    <Input type="text" placeholder="Your username" />
                    <Input type="password" placeholder="Your password" /><br />
                    <a href="">Forgot Password?</a><br />
                    <SubmitButton value="Log In"/>
                </form>
            </div>

        </>
    )
}