import "../assets/Header.css";
import { Link } from 'react-router-dom';

export default function Header({ isLoggedIn, handleLogout }) {
    return(
        <div className="Header-Page">
            <div className="Header-Container">
                <Link to={isLoggedIn ? "/home" : "/"} className="Header-Link">
                    <h1>Header section</h1>
                </Link>
                <div className="Auth-Container">
                    {isLoggedIn ? (
                        <Link to="/login" onClick={handleLogout} className="Auth-Link">
                            <h2>Logout</h2>
                        </Link>
                    ) : (
                        <>
                            <Link to="/login" className="Auth-Link">
                                <h2>Login</h2>
                            </Link>
                            <Link to="/register" className="Auth-Link">
                                <h2>Register</h2>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}