import Register from "../components/account/register";
import Login from "../components/account/login";
import Footer from "../components/utility/footer";
import Header from "../components/utility/header"
import Reset from "../components/account/reset";

import { useState } from "react";

const Account = () => {

    const [view, setView] = useState("login");

    let content;
    if (view == "register")
        content = <Register onSwitch={setView}/>
    else if (view === "reset")
        content = <Reset onSwitch={setView}/>
    else
        content = <Login onSwitch={setView}/>



    return (
        <>
            <Header />
            {content}
            <Footer />
        </>
        
    )
}

export default Account;