import './NavBar.css'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav className= 'NavBar'>
            <img src={'https://freepngimg.com/thumb/logo/71766-logo-vector-design-illustration-phoenix-hd-image-free-png.png'} alt='logo'></img>
            <h2>ELECTOFAN</h2>
            <>
                <button className= 'Option'>Celulares</button>
                <button className= 'Option'>Tablet</button>
                <button className= 'Option'>Notebooks</button>
                <CartWidget label='CARRITO' backgroundColor='brown' colorText='black' handleClick>
                </CartWidget>
            </>
        </nav>
    )
}

export default NavBar