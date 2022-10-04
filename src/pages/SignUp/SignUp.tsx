import React, { useState } from "react";
import nocturnalLogo from '../../assets/nocturnal-logo.svg'
import Input from "../../components/Input/Input"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import http from "../../services/api";
import styles from "./SignUp.module.scss"


export default function SignUp() {
    const [newUser, setNewUser] = useState({})



    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        http.post('/auth/signup', newUser)
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const name = e.target.name
        const value = e.target.value

        setNewUser(prevState => ({
            ...prevState,
            [name]: value

        }))
    }


    return (
        <>
            <img src={nocturnalLogo} alt="nocturnal-logo" className="nocturnalLogoBig" />

            <form className={styles.signInForm} onSubmit={handleSubmit}>
                <div className={styles.title}>
                    <h1>Sign Up</h1>
                    <a className={styles.signUp} href="">Already have an account</a>
                </div>
                <Input handleInputChange={handleInputChange} name="username" type="text" placeholder="Define a username" />
                <Input handleInputChange={handleInputChange} name="password" type="password" placeholder="Set your password" />
                <Input handleInputChange={handleInputChange} name="email" type="text" placeholder="Email (optional)" />
                <div className={styles.submitButtonWrapper}>
                    <SubmitButton value="Create account" />
                </div>
            </form>

        </>
    )
}