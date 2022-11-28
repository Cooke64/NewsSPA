import { createContext, useState } from "react";

const AuthContext = createContext({});

exportdefault const AuthProvider = ({ children }) => {
    const [isAuth, setisAuth] = useState({
        isUser: false,
        username: ''
      })

    return (
        <AuthContext.Provider value={{ isAuth, setisAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export AuthContext;