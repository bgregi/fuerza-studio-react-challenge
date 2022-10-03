import React from "react";
import nocturnalLogo from '../../assets/nocturnal-logo.svg'
import Input from "../../components/Input/Input"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import styles from "./SignUp.module.scss"


export default function SignUp() {
    return (
        <>
            <img src={nocturnalLogo} alt="nocturnal-logo" className="nocturnalLogoBig" />

            <form className={styles.signInForm}>
                <div className={styles.title}>
                    <h1>Sign Up</h1>
                    <a className={styles.signUp} href="">Already have an account</a>
                </div>
                <Input type="text" placeholder="Define a username" />
                <Input type="password" placeholder="Set your password" />
                <Input type="text" placeholder="Email (optional)" />
                <div className={styles.submitButtonWrapper}>
                    <SubmitButton value="Create account" />
                </div>
            </form>

        </>
    )
}