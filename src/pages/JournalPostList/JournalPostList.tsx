import React, { useEffect, useState } from "react";
import nocturnalLogo from '../../assets/nocturnal-logo.svg'
import NoteCover from "./NoteCover/NoteCover";
import emptyLogo from '../../assets/empty-logo.svg'
import styles from "./JournalPostList.module.scss"
import leftArrow from "../../assets/left-arrow.svg"
import { useRecoilState } from "recoil";
import { currentJournalPosts } from "../../state/atom";
import { useParams } from "react-router-dom";
import http from "../../services/api";

export default function JournalPostList() {
    const [postList, setPostList] = useRecoilState(currentJournalPosts)
    const [postListCopy, setPostListCopy] = useState({ entries: [] })
    const [hasNotes, setHasNotes] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        http.get(`/journals/entries/${id}`)
            .then(res => {
                setPostList(res)
                console.log('setou no atom');
                console.log(res);
            })
    }, [id])

    useEffect(() => {
        console.log('effect da cópia');
        console.log(postList);

        const postListLocal = {
            entries: [],
            ...postList
        }

        setPostListCopy(postListLocal)
    }, [postList])

    useEffect(() => {
        postListCopy.entries.length === 0 ? setHasNotes(false) : setHasNotes(true)
    }, [postListCopy])


    return (
        <>
            <img src={nocturnalLogo} alt="nocturnal-logo" className="nocturnalLogoSmall" />

            {!hasNotes ?
                <>
                    <img src={emptyLogo} alt="empty" className="emptyLogo" />
                    <div className={styles.createANoteWrapper}>
                        <a href={`/journals/entries/createnote/${id}`}>Create a note</a>
                    </div>
                </>
                :
                <>
                    <div className={styles.title}>
                        <img src={leftArrow} alt="arrow" />
                        <h2>title</h2>
                    </div>
                    <div className={styles.noteList}>
                        {postListCopy.entries.map((note, index) => <NoteCover key={index} title={note} />)}
                    </div>
                </>
            }
        </>
    )
}