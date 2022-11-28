import { useContext } from "react";
import Auth

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;