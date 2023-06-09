import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth";

export const NavBar = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext( AuthContext );

    const onNavigate = () => {
        logout();
        navigate('login', {
            replace: true
        });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Heroes</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="marvel">Marvel
                        </NavLink>
                        <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="dc">Dc
                        </NavLink>
                        <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="search">Search
                        </NavLink>
                    </ul>
                </div>
                <div className="d-flex">
                    <span className="navbar-text text-light mx-2">
                        { user?.name }
                    </span>
                    <button className="btn btn-danger" onClick={ onNavigate }>Logout</button>
                </div>
            </div>
        </nav>
    )
}
