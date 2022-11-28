import AuthContext from "utils/context"
import { useContext } from "react"
import { useLocation, Navig } from "react-router-dom"

const RequiredAuth = () => {
  const {isAuth} = useContext(AuthContext)
}