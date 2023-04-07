import React from "react";

export const AuthContext = React.createContext<AuthContextType>(null!)

interface AuthContextType {
    isLoggedIn: boolean;
    loggedInUser: any;
    logout: () => void;
    login: (data: any) => void;
}
