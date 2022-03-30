import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './context/Cart';
import { CartContextProvider } from './context/CartContext';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar';
import {NotificationServicesProvider} from './services/notification/NotificationServices'

function App() {
    return (
        <NotificationServicesProvider>
            <CartContextProvider>
                <BrowserRouter>
                    <Navbar className='NavBar'/>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <ItemListContainer saludo="E-commerce" className='Option'/>
                            }
                        />
                        <Route
                            path="/category/:categoryId" className='Option'
                            element={<ItemListContainer />}
                        />
                        <Route
                            path="/detail/:itemId" className='Option'
                            element={<ItemDetailContainer />}
                        />

                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </BrowserRouter>
            </CartContextProvider>  
        </NotificationServicesProvider>
    );
}

export default App;
