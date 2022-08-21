import { matchRoutes, useLocation } from "react-router-dom"
import { routes } from "../routes"



export const useCurrentPath = () => {
    const location = useLocation()
    const [{ route }] = matchRoutes(routes, location)

    return route.title
}