import React from "react";
import styles from "./CreateNote.module.scss"
import SubmitButton from "../../../components/SubmitButton/SubmitButton";

interface IProps {
    title: string
}

export default function JournalPostList() {


    return (
        <form className={styles.createNoteForm}>
            <input type="text" placeholder="Title" />
            <textarea name="note" placeholder="Write your note" />
            <div className={styles.buttonWrapper}>
                <SubmitButton value="Save note" />
            </div>

        </form>
    )
}