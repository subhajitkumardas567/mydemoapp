import './App.css';
import Imagecard from './components/Imagecard.js';
import CartCounter from './components/cartcounter';

function App() {
  return (
    <div className="App">
      <Imagecard
        name="subhajit"
        imglink="https://avatars.githubusercontent.com/u/172288926?v=4"
      />
      <CartCounter />
    </div>
  );
}

export default App;