import '../../styles/Header.css'

function Header(){
    return(
        <div className="navbar">
            <div className="nav-logo">
                LOGO
            </div>

            <ul className="nav-links">
                <li><a href="">ABOUT</a></li>
                <li><a href="">CONTACT</a></li>
                <li><a href="">MOVIES</a></li>
            </ul>

            <div className="nav-btns">
                <button>SignUp</button>
                <button>Login</button>
            </div>
        </div>
    )
}

export default Header