import AuthContext from "utils/context"
import { useContext } from "react"
import { useLocation, Navigate, Ou } from "react-router-dom"

const RequiredAuth = () => {
  const {isAuth} = useContext(AuthContext)
}