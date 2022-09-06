import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hola soy la lista de productos! :)" />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
