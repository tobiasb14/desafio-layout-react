import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/js/src/collapse.js';
import './styles.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
            <div className="container-fluid">
                <Link to="/" className='nav-logo-text'>
                    <h4>Carros Top</h4>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#carrotop-navbar"
                    aria-controls="carrotop-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="carrotop-navbar">
                    <ul className="navbar-nav offset-md-9 main-menu">
                        <li>
                            <NavLink to="/" activeClassName='active' exact>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" activeClassName='active'>CATÁLOGO</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
