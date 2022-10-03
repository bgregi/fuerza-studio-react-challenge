import React, { useState } from "react";
import SubmitButton from "../../../components/SubmitButton/SubmitButton";
import styles from "./CreateJournal.module.scss"



export default function JournalCover() {
    const [journalTitle, setJournalTitle] = useState('')

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const title = e.target.value
        setJournalTitle(title)
    }

    return (
        <div className={styles.main}>
            <div className={styles.journalWrapper}>
                <div className={styles.outerBox}>
                    <div className={styles.leftBox}></div>
                    <div className={styles.rightBox}>
                        <p className={styles.journalTitle}>{journalTitle}</p>
                    </div>
                </div>
            </div>
            <form className={styles.form} action="">
                <input onChange={handleChange} className={styles.input} type="text" />
                <div className={styles.buttonWrapper}>
                    <SubmitButton value="Save journal" />
                </div>
            </form>
        </div>
    )
}