import './NavBar.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartWidget = ({ backgroundColor, colorText, }) => {
    
    const { getQuantity } = useContext(CartContext)

    return (
        <Link to={'/cart'}className= 'Option' style={{ backgroundColor, color: colorText}} >
                <img className='xd' src={'https://cdn-icons-png.flaticon.com/512/107/107831.png?w=826&t=st=1648576327~exp=1648576927~hmac=c8365e7948d7365663084d76f6c66ce71aed438b92dc18b0c87598b963758265'} alt='logo'></img>
                {getQuantity()}   
                
        </Link>
      
    )    
}

export default CartWidget