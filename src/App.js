
import './App.css';
import NavBar from './components/NavBar/navBar.jsx';
import ItemListContainer from './components/ItemListContainer/itemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;
