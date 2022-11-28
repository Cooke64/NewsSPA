import { createContext, useState } from "react";

const AuthContext = createContext({});

export default const AuthProvider = ({ children }) => {
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

