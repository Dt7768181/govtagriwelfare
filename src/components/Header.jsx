import "../assets/Header.css";
import { Link } from 'react-router-dom';

export default function Header({ isLoggedIn, isAdminLoggedIn, handleLogout }) {
    return(
        <div className="Header-Page">
            <div className="Header-Container">
                <div className="Header-Section">
                <img className="Header-Image"src="./assets/agriculture.png" alt="image"/>
                        <h1>GOV4FARMERS</h1>
                </div>
                <div className="Auth-Container">
                    {isAdminLoggedIn ? ( 
                        <Link to="/login" onClick={handleLogout} className="Auth-Link">
                            <h2>Logout</h2>
                        </Link>
                    ) : isLoggedIn ? ( 
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