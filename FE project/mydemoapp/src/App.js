import { useState } from 'react';
import Imagecard from './components/Imagecard.js';
import './App.css';
import { userData } from './components/constants/constant.js';

function App() {
  const [showFlag,setShowFlag]=useState(false);
  const clickHandler=()=>{
    showFlag ? setShowFlag(false) : setShowFlag(true);//setshowflag is initially false
  }

  return (
    <div className="App">
      {
        userData.map((user)=>(  
          <div key={user.githubId}>
          <Imagecard name= {user.name} imglink={`https://avatars.githubusercontent.com/u/${user.githubId}?v=4`}/> 
          {/*conditional rendering*/}
          <h3 onClick={clickHandler}>{user.isStudent?"Student":"Mentor"}⬇️⬇️⬇️</h3> 
          {showFlag ?<p>{user.bioDescription}</p>:null}
          </div>
        ))
      }
      
    </div>
  );
}

export default App;
