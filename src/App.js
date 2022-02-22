import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hola Mundo"></ItemListContainer>
      <ItemCount /* stock='5' initial='1' *//>
      <ItemDetailContainer></ItemDetailContainer>
    </div>
  );
}


export default App;

