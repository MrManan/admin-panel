// import { getLoggedinUser } from "@/helper/api_helper";
import { useEffect, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";

interface ParentCompProps {
    children?: React.ReactNode;
}

export const AuthProvider: React.FC<ParentCompProps> = (props) => {
    // const auth = getLoggedinUser();
    const auth = { user: true };


    const [isLoggedIn, setIsLoggedIn] = useState(auth ? true : false);
    const [loggedInUser, setLoggedInUser] = useState(auth?.user);



    const login = (data: any) => {
        setIsLoggedIn(true);
        localStorage.setItem("frenley", JSON.stringify({ user: data.user, accessToken: data.accessToken }))
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("frenley")
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, loggedInUser, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
}
