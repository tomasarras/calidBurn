import React, { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import getConfig from "next/config";
import { setToken } from "./Token";


const UserContext = createContext();

let token;

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const setUserByToken = () => {
        const tokenWithoutPrefix = token.split(process.env.NEXT_PUBLIC_TOKEN_PREFIX)[1];
        const payload = jwt_decode(tokenWithoutPrefix);
        setUser({ email: payload[process.env.NEXT_PUBLIC_TOKEN_USERNAME] });
    };

    useEffect(() => {
        const tokenStorage = localStorage.getItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_TOKEN_NAME);
        if (tokenStorage != null) {
            token = tokenStorage; 
            setUserByToken();
        }
    }, []);

    const logIn = (newToken) => {
        token = newToken;
        localStorage.setItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_TOKEN_NAME, newToken);
        setUserByToken();
    };

    const logOut = () => {
        token = null;
        localStorage.removeItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_TOKEN_NAME);
        setUser(null);
    };

    const data = { user, logIn, logOut, token };

    return (
        <UserContext.Provider value={data}>
            { children }
        </UserContext.Provider>
    );
};

export { UserProvider, token };
export default UserContext;
