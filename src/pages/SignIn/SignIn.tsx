import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import nocturnalLogo from '../../assets/nocturnal-logo.svg'
import Input from "../../components/Input/Input"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import http from "../../services/api";
import { currentUser } from "../../state/atom";
import styles from "./SignIn.module.scss"

export default function SignIn() {
    const [user, setUser] = useState({})
    const [loggedUser, setLoggedUser] = useRecoilState(currentUser)
    const navigate = useNavigate()

    useEffect(() => {
        if (Object.keys(loggedUser).length > 0) {
            // This is the only way I've found to access the response object's properties, otherwise Typescript will still see it as an AxiosResponse Object
            const loggedUserCopy = {
                token: '',
                user: {
                    id: '',
                    username: '',
                    email: '',
                    password: '',
                    journalIds: []
                },
                ...loggedUser
            }

            navigate(`/journals/${loggedUserCopy.user.id}`)
        }
    }, [loggedUser, navigate])

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
                console.log(res)

                if (!res) {
                    alert(`Login failed`)
                } else {
                    setLoggedUser(res)
                }

            })
    }

    return (
        <>
            <img src={nocturnalLogo} alt="nocturnal-logo" className="nocturnalLogoBig" />

            <form className={styles.signInForm} onSubmit={handleSubmit}>
                <div className={styles.title}>
                    <h1>Sign in</h1>
                    <a className={styles.signUp} href="/signup">Sign up</a>
                </div>
                <Input handleInputChange={handleInputChange} name="username" type="text" placeholder="Your username" />
                <Input handleInputChange={handleInputChange} name="password" type="password" placeholder="Your password" />
                <div className={styles.forgotPasswordWrapper}>
                    <a className={styles.forgotPassword} href="/">Forgot Password?</a><br />
                </div>
                <div className={styles.submitButtonWrapper}>
                    <SubmitButton value="Log In" />
                </div>
            </form>


        </>
    )
}