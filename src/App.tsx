import React from "react"
import { Route, Routes } from "react-router-dom"
// import JournalPostList from "./pages/Journal Post List/JournalPostList"
import SignIn from "./pages/SignIn/SignIn"
import SignUp from "./pages/SignUp/SignUp"
// import JournalList from "./pages/JournalList/JournalList"


function App() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />}/>
            <Route path="/signup" element={<SignUp />}/>
            {/* <SignUp />
            <SignIn /> */}
            {/* <JournalList /> */}
            {/* <JournalPostList title="HTML"/> */}
        </ Routes>
    )
}

export default App