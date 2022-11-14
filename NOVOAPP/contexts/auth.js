import React, { createContext, useState } from "react";

import {auth} from "../services/auth";

const AuthContext = createContext({ 
    signed: Boolean,
    user: Object,
});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    async function signIn() {
        const response = await auth();

        setUser(response.user);
    }

    function signOut() {
        setUser(null);
    }
    return(
        <AuthContext.Provider value={{signed: !!user, user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;