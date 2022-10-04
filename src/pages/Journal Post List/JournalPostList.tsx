import React from "react";
import nocturnalLogo from '../../assets/nocturnal-logo.svg'
import NoteCover from "./NoteCover/NoteCover";
// import emptyLogo from '../../assets/empty-logo.svg'
import styles from "./JournalPostList.module.scss"
// import CreateNote from "./CreateNote/CreateNote";
import leftArrow from "../../assets/left-arrow.svg"

interface IProps {
    title: string
}

export default function JournalPostList({ title }: IProps) {
    const noteList = [
        'The h1, h2, h3, h4, h5, and h6 elements',
        'The article element',
        'The h1, h2, h3, h4, h5, and h6 elements',
        'The article element',
        'The h1, h2, h3, h4, h5, and h6 elements',
        'The article element'
    ]

    return (
        <>
            <img src={nocturnalLogo} alt="nocturnal-logo" className="nocturnalLogoSmall" />
            {/* <img src={emptyLogo} alt="empty" className="emptyLogo"/>
            <div className={styles.createANoteWrapper}>
                <a href="">Create a note</a>
            </div> */}

            <div className={styles.title}>

                <img src={leftArrow} alt="arrow" />
                <h2>{title}</h2>

            </div>
            <button className={styles.addNote}><strong>+</strong>Add note</button>
            {/* <CreateNote/> */}

            <div className={styles.noteList}>
                {noteList.map((note, index) => <NoteCover key={index} title={note} />)}
            </div>

        </>
    )
}