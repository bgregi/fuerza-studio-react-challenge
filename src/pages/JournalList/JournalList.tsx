import React from "react";
import nocturnalLogo from '../../assets/nocturnal-logo.svg'
// import { Journal } from "../../interfaces/journal.interface";
// import JournalCover from "./JournalCover/JournalCover";
// import emptyLogo from '../../assets/empty-logo.svg'
// import styles from "./JournalList.module.scss"
import CreateJournal from './CreateJournal/CreateJournal'


export default function JournalList() {
    // const journalList: Journal[] = [
    //     {
    //         id: '001',
    //         title: 'HTML',
    //         type: 'private',
    //         entryIds: null
    //     },
    //     {
    //         id: '002',
    //         title: 'HTML',
    //         type: 'private',
    //         entryIds: null
    //     },
    //     {
    //         id: '003',
    //         title: 'HTML',
    //         type: 'private',
    //         entryIds: null
    //     },
    //     {
    //         id: '004',
    //         title: 'HTML',
    //         type: 'private',
    //         entryIds: null
    //     },
    //     {
    //         id: '005',
    //         title: 'HTML',
    //         type: 'private',
    //         entryIds: null
    //     },
    //     {
    //         id: '006',
    //         title: 'HTML',
    //         type: 'private',
    //         entryIds: null
    //     },
    //     {
    //         id: '007',
    //         title: 'HTML',
    //         type: 'private',
    //         entryIds: null
    //     },
    //     {
    //         id: '008',
    //         title: 'HTML',
    //         type: 'private',
    //         entryIds: null
    //     },
    //     {
    //         id: '009',
    //         title: 'HTML',
    //         type: 'private',
    //         entryIds: null
    //     },
    //     {
    //         id: '010',
    //         title: 'HTML',
    //         type: 'private',
    //         entryIds: null
    //     },
    // ]

    return (
        <>
            <img src={nocturnalLogo} alt="nocturnal-logo" className="nocturnalLogoSmall" />
            {/* <img src={emptyLogo} alt="empty" className="emptyLogo"/>
            <div className={styles.createAJournalWrapper}>
                <a href="" >Create a journal</a>
            </div> */}

            <CreateJournal />

            {/* <div className={styles.journalGrid}>
                {journalList.map((journal, index) => <JournalCover key={journal.id} title={journal.title} index={index}/>)}
            </div> */}
        </>
    )
}