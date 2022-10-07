import React, { useEffect, useState } from "react";
import nocturnalLogo from '../../assets/nocturnal-logo.svg'
import styles from "./CreateNote.module.scss"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import leftArrow from "../../assets/left-arrow.svg"
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { currentUserJournals } from "../../state/atom";

export default function CreateNote() {
    const { id } = useParams()
    const idNumber = Number(id) - 1
    const userJournals = useRecoilValue(currentUserJournals)
    const [currentJournalCopy, setCurrentJournalCopy] = useState({journals: [{title: 'ppp'}]})

    const navigate = useNavigate()


    useEffect(() => {
        const currentJournalLocal = {
            journals: [{title: ''}],
            ...userJournals
        }
        setCurrentJournalCopy(currentJournalLocal)

        console.log(userJournals);
        console.log(currentJournalCopy);
        

    }, [userJournals])


    return (
        <>
            <img src={nocturnalLogo} alt="nocturnal-logo" className="nocturnalLogoSmall" />

            <div className={styles.title} onClick={() => navigate(`/journals/entries/${id}`)}>
                <img src={leftArrow} alt="arrow" />
                <h2>{currentJournalCopy.journals[idNumber].title}</h2>
            </div>

            <form className={styles.createNoteForm}>
                <input type="text" placeholder="Title" />
                <textarea name="note" placeholder="Write your note" />
                <div className={styles.buttonWrapper}>
                    <SubmitButton value="Save note" />                
                </div>
            </form>
        </>
    )
}