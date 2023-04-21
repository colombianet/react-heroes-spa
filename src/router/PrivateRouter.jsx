import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRouter = ({ children }) => {
    const { logged } = useContext(AuthContext);
    const { pathname, search} = useLocation();
    const lastpath = pathname + search;
    localStorage.setItem('lastpath', lastpath);
    return logged ? children : <Navigate to='/login'/>;
}
