import "./styles/Navbar.css"

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="nav-left">
                <img src="https://www.trydo.rainbowit.net/assets/images/logo/logo-all-dark.png" alt="trydo_logo"/>
            </div>
            <div className="nav-right">
                <div>Home</div>
                <div>Service</div>
                <div>About</div>
                <div>Pages</div>
                <div>Blocks</div>
                <div>Contact</div>
                <button className="btn btn-outline-secondary">BUY NOW</button>
            </div>
        </div>
    )
}