import React from "react"
import { Route, Routes } from "react-router-dom"
// import JournalPostList from "./pages/Journal Post List/JournalPostList"
import SignIn from "./pages/SignIn/SignIn"
import SignUp from "./pages/SignUp/SignUp"
import JournalList from "./pages/JournalList/JournalList"
import CreateJournal from "./pages/CreateJournal/CreateJournal"
import JournalPostList from "./pages/JournalPostList/JournalPostList"
import CreateNote from "./pages/CreateNote/CreateNote"


function App() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/journals/:id" element={<JournalList />}/>
            <Route path="/journals/createjournal" element={<CreateJournal />}/>
            <Route path="/journals/entries/:id" element={<JournalPostList />}/>
            <Route path="/journals/entries/createnote/:id" element={<CreateNote />}/>

        </ Routes>
    )
}

export default App