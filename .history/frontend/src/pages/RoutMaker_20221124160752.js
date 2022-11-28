import AuthContext from "utils/context"
import { useContext } from "react"

const RequiredAuth = () => {
  const {isAuth} = useContext(AuthContext)
}