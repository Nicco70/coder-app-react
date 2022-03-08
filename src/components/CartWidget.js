import './NavBar.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartWidget = ({ backgroundColor, colorText, }) => {
    
    const { getQuantity } = useContext(CartContext)

    return (
        <Link to={'/cart'}className= 'Option' style={{ backgroundColor, color: colorText}} >
                <img className='xd' src={'https://image.flaticon.com/icons/png/512/107/107831.png'} alt='logo'></img>
                {getQuantity()}   
                
        </Link>
      
    )    
}

export default CartWidget