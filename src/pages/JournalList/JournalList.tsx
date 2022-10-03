import React from "react";
import nocturnalLogo from '../../assets/nocturnal-logo.svg'
// import emptyLogo from '../../assets/empty-logo.svg'
// import styles from "./JournalList.module.scss"
import CreateJournal from './CreateJournal/CreateJournal'


export default function SignUp() {
    return (
        <>
            <img src={nocturnalLogo} alt="nocturnal-logo" className="nocturnalLogoSmall" />
            {/* <img src={emptyLogo} alt="empty" className="emptyLogo"/>
            <a href="" className={styles.createAJournal}>Create a journal</a> */}

            <CreateJournal />





        </>
    )
}