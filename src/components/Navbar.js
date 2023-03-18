import logo from "../img/world-icon.png"
import "../styles/Navbar.css"

function Navbar() {
    return (
        <div className="Navbar">
            <img src={logo} className="nav-logo" alt="world icon" />
            <h2 className="navbar-text">Kyhtera Travel Journal</h2>
        </div>
    )
}

export default Navbar