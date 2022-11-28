import AuthContext from "utils/context"
import { useContext } from "react"
import { useLocation, Navigate, Outlet } from "react-router-dom"

const RequiredAuth = () => {
  const {isAuth} = useContext(AuthContext)
  const location = useLocation();

  return (
    isAuth?.isUser
        ? <Outlet />
        : auth?.user
            : <Navigate to="/login" state={{ from: location }} replace />
);
}