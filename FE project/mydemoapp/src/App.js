import './App.css';
import Cardlist from './components/cardlist';
import CartCounter from './components/cartcounter';

function App() {
  return (
    <div className="App">
     
      <CartCounter />
      <Cardlist placeholder="placeholder image"/>
    </div>
  );
}

export default App;