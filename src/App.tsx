import React from "react"
import { RecoilRoot } from "recoil"
// import JournalPostList from "./pages/Journal Post List/JournalPostList"
import SignIn from "./pages/SignIn/SignIn"
import SignUp from "./pages/SignUp/SignUp"
// import JournalList from "./pages/JournalList/JournalList"


function App() {
    return (
        <RecoilRoot>
            <SignUp />
            <SignIn />
            {/* <JournalList /> */}
            {/* <JournalPostList title="HTML"/> */}
        </RecoilRoot>

    )
}

export default App