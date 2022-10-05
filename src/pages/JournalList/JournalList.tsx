import React, { useEffect, useState } from "react"
import nocturnalLogo from '../../assets/nocturnal-logo.svg'
import JournalCover from "./JournalCover/JournalCover"
import emptyLogo from '../../assets/empty-logo.svg'
import styles from "./JournalList.module.scss"
import { useRecoilState, useRecoilValue } from "recoil"
import { currentUser, currentUserJournals } from "../../state/atom"
import { useNavigate, useParams } from "react-router-dom"
import http from "../../services/api"

export default function JournalList() {
    const [hasJournals, setHasJournals] = useState(false)
    const [userJournals, setUserJournals] = useRecoilState(currentUserJournals)
    const [userJournalsCopy, setUserJournalsCopy] = useState({journals: [{title: ''}]})
    const loggedUser = useRecoilValue(currentUser)

    const navigate = useNavigate()
    const { id } = useParams()

    const loggedUserUsable = {
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

    // console.log(loggedUser)
    // console.log(loggedUserUsable)

    useEffect(() => {
            // Redirects the user to the Sign In page if the user tries to enter an unregistered id in the url
            if (loggedUserUsable.user.id !== id) {
                console.log('id errado')

                navigate('/')
            } else {
                console.log('id correto');
            }
    }, [id, navigate, loggedUserUsable])

    useEffect(() => {
            // Checks if there are any created journals
            if (loggedUserUsable.user.journalIds === null) {
                setHasJournals(false)
                console.log('journalIds = null')
            } else {
                console.log('deu boa')                
                setHasJournals(true)

                http.get(`/journals/${id}`)
                    .then(res => {
                        console.log(res);
                        
                        setUserJournals(res)
                        
                        console.log(userJournals);
                    })
            }
    }, [])

    useEffect(() => {
        const userJournalsLocal = {
            journals: [],
            ...userJournals
        }

        setUserJournalsCopy(userJournalsLocal)
    }, [userJournals])


    // const journalList = [
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

            {!hasJournals ?
                <>
                    <img src={emptyLogo} alt="empty" className="emptyLogo" />
                    <div className={styles.createAJournalWrapper}>
                        <p onClick={() => navigate('/journals/createjournal')}>Create a journal</p>
                    </div>
                </>
                :
                <div className={styles.journalGrid}>
                    {userJournalsCopy?.journals.map((journal, index) => <JournalCover key={index} title={journal.title} index={index} />)}
                </div>
            }
        </>
    )
}