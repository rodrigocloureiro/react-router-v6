import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <>
            <nav>
                <Link to='/' className={ styles.item }>Home</Link>
                <Link to='/contact' className={ styles.item }>Contatos</Link>
            </nav>
        </>
    );
}

export default Navbar
