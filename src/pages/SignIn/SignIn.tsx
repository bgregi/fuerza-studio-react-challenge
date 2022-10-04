import React, { useState } from "react";
import nocturnalLogo from '../../assets/nocturnal-logo.svg'
import Input from "../../components/Input/Input"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import http from "../../services/api";
import styles from "./SignIn.module.scss"


export default function SignIn() {
    const [user, setUser] = useState({})

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const name = e.target.name
        const value = e.target.value

        setUser(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    // Submits the user data to the API
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        http.post('/auth/login', user)
            .then(res => {
                // fazer o redirecionamento
                if (!res){
                    alert(`Login failed`)
                }
            })
    }

    return (
        <>
            <img src={nocturnalLogo} alt="nocturnal-logo" className="nocturnalLogoBig" />

            <form className={styles.signInForm} onSubmit={handleSubmit}>
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