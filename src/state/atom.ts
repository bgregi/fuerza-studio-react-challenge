import { atom } from 'recoil';

export const currentUser = atom({
    key: 'currentUser',
    default: {}
})

export const currentUserJournals = atom({
    key: 'currentUserJournals',
    default: {}
})