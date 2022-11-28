import AuthContext from "utils/context"
import { useContext } from "react"
import { useLocation, Navigate, Outlet } from "react-router-dom"

const RequiredAuth = () => {
  const {isAuth} = useContext(AuthContext)

  return (
    auth?.roles?.find(role => allowedRoles?.includes(role))
        ? <Outlet />
        : auth?.user
            ? <Navigate to="/unauthorized" state={{ from: location }} replace />
            : <Navigate to="/login" state={{ from: location }} replace />
);
}