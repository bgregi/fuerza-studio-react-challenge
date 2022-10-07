import React, { useEffect, useState } from "react";
import nocturnalLogo from '../../assets/nocturnal-logo.svg'
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import http from "../../services/api";
import { currentUser } from "../../state/atom";
import styles from "./CreateJournal.module.scss"

export default function CreateJournal() {
    const [journalTitle, setJournalTitle] = useState('')
    const [loggedUser, setLoggedUser] = useRecoilState(currentUser)
    const [loggedUserLocal, setLoggedUserLocal] = useState({
        user: {
            id: '',
            journalIds: []
        },
        ...loggedUser
    })
    const navigate = useNavigate()

    useEffect(() => {
        const loggedUserCopy = {
            user: {
                id: '',
                journalIds: []
            },
            ...loggedUser
        }
        setLoggedUserLocal(loggedUserCopy)
    }, [loggedUser])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const title = e.target.value
        setJournalTitle(title)
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const req = {
            title: journalTitle,
            userId: loggedUserLocal.user.id,
            journals: loggedUserLocal.user.journalIds
        }
        http.post('/journals/', req)
            .then(res => {
                if (!res) {
                    alert(`Creation failed`)
                } else {
                    setLoggedUser(res)
                }
            })
            .then(() => navigate(`/journals/${loggedUserLocal.user.id}`))
    }

    return (
        <>
            <img src={nocturnalLogo} alt="nocturnal-logo" className="nocturnalLogoSmall" />

            <div className={styles.main}>
                <div className={styles.journalWrapper}>
                    <div className={styles.outerBox}>
                        <div className={styles.leftBox}></div>
                        <div className={styles.rightBox}>
                            <p className={styles.journalTitle}>{journalTitle}</p>
                        </div>
                    </div>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input onChange={handleChange} className={styles.input} type="text" />
                    <div className={styles.buttonWrapper}>
                        <SubmitButton value="Save journal" />
                    </div>
                </form>
            </div>
        </>
    )
}