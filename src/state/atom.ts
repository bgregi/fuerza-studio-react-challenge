import { atom } from 'recoil';

export const currentUser = atom({
    key: 'currentUser',
    default: {}
})

export const currentUserJournals = atom({
    key: 'currentUserJournals',
    default: {}
})

export const currentJournalPosts = atom({
    key: 'currentJournalPosts',
    default: {}
})