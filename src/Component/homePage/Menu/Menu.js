import { useContext, useState } from "react";
import { LoginContext } from "../../UserContext";
import './menu.css';

const Menu = () => {
    const [, setLogged] = useContext(LoginContext);
    const [expandMenu, toggleExpandMenu] = useState(false);

    const logOut = () => {
        setLogged(false)
    }

    const toggleMainMenu = () => {
        toggleExpandMenu(!expandMenu)
    }

    return (
        <>
            <div className='menu-button' onClick={toggleMainMenu}>
                <p>Menu</p>
            </div>
            <div className="main-menu" aria-expanded={expandMenu}>
                <button onClick={logOut}>Log out</button>
            </div>
        </>
    )
}

export default Menu