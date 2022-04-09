import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import authContext from '../../context/authentication/authContext';

const Navbar = () => {

  const AuthContext = useContext(authContext);
  const {authenticated, userLogout} = AuthContext;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <Link className="navbar-brand" to={"/"}>Super Hero Deck</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-link" to={'login'}>Login</Link>
                <Link className="nav-link" to={'/'}>Home</Link>
                <Link className="nav-link" to={'/profile'}>Profile</Link>
            </div>
            </div>
            {
            authenticated &&
            <div>
              <form className="container-fluid justify-content-start">
                <button 
                  className="btn btn-danger me-2" 
                  type="button"
                  onClick={userLogout}
                >Logout</button>
              </form>
            </div>
            }
        </div>
    </nav>
  )
}

export default Navbar