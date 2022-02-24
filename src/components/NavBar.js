import './NavBar.css'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className= 'NavBar'>
            <img src={'https://freepngimg.com/thumb/logo/71766-logo-vector-design-illustration-phoenix-hd-image-free-png.png'} alt='logo'></img>
            <h2>ELECTOFAN</h2>
            <>
                <NavLink to={'category/celulares'} className= 'Option'>Celulares</NavLink>
                <NavLink to= {'category/tablets'} className= 'Option'>Tablet</NavLink>
                <NavLink to= {'category/notebooks'} className= 'Option'>Notebooks</NavLink>
                <CartWidget label='CARRITO' backgroundColor='brown' colorText='black' handleClick>
                </CartWidget>
            </>
        </nav>
    )
}

export default NavBar