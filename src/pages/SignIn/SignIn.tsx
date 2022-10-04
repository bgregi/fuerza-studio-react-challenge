import React from "react";
import nocturnalLogo from '../../assets/nocturnal-logo.svg'
import Input from "../../components/Input/Input"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import styles from "./SignIn.module.scss"


export default function SignIn() {




    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const name = e.target.name
        const value = e.target.value

        console.log(name)
        console.log(value)
    }
    
    return (
        <>
            <img src={nocturnalLogo} alt="nocturnal-logo" className="nocturnalLogoBig" />

            <form className={styles.signInForm}>
                <div className={styles.title}>
                    <h1>Sign in</h1>
                    <a className={styles.signUp} href="">Sign up</a>
                </div>
                <Input handleInputChange={handleInputChange} name="username" type="text" placeholder="Your username" />
                <Input handleInputChange={handleInputChange} name="password" type="password" placeholder="Your password" />
                <div className={styles.forgotPasswordWrapper}>
                    <a className={styles.forgotPassword} href="">Forgot Password?</a><br />
                </div>
                <div className={styles.submitButtonWrapper}>
                    <SubmitButton value="Log In" />
                </div>
            </form>


        </>
    )
}