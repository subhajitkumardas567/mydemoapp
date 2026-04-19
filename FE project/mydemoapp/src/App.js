import { createContext } from 'react';
import './App.css';
import Cardlist from './components/cardlist';
import CartCounter from './components/cartcounter';
import CompA from './components/parenttochild/compA';
export const userContext = createContext();
function App() {
  //const userContext = createContext();
  const placeholder= "placeholder image";
  const isReadOnly=false; //set to true to make the context read only
  return (
    <userContext.Provider value={{isReadOnly,placeholder}}> 
    <div className="App">
     
      <CartCounter />
      <Cardlist/>
      <CompA/>
    </div>
    </userContext.Provider>
  );
}

export default App;