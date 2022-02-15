import './NavBar.css'

const CartWidget = ({ backgroundColor, colorText, /* handleClick */}) => {
    return (
        <button className= 'Option' style={{ backgroundColor, color: colorText}} /* onClick={handleClick} */>{2}
            <div>
                <img className='xd' src={'https://image.flaticon.com/icons/png/512/107/107831.png'} alt='logo'></img>
            </div>
        </button>
      
    )    
}

export default CartWidget