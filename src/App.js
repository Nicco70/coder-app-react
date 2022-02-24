import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Hola Mundo"></ItemListContainer>} />
          <Route path='/category/:categoryId' element={<ItemListContainer></ItemListContainer>} />
        {/*   <ItemCount stock='5' initial='1' /> */}
          <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;

