import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./JournalCover.module.scss"

interface IProps {
    title: string
    index: number
}

export default function JournalCover({ title, index }: IProps) {
    // Assigns the class according to the index of the journal in the journal list (even indexes appear on the left column and odd indexes appear on the right column)
    const rightBoxClass = index % 2 === 0 ? 'rightBoxLight' : 'rightBoxDark'

    const navigate = useNavigate()


    return (
        <div onClick={() => navigate(`/journals/entries/${index + 1}`)} className={styles.journalWrapper}>
            <div className={styles.outerBox}>
                <div className={styles.leftBox}></div>
                <div className={styles[rightBoxClass]}>
                    <p className={styles.journalTitle}>{title}</p>
                </div>
            </div>
        </div>
    )
}