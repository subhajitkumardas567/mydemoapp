import Imagecard from './components/Imagecard.js';
import './App.css';

function App() {
  const userData=[
    {name: "Subhajit Kumar Das", githubId:  "172288926"}
  ];
  return (
    <div className="App">
      {
        userData.map((user)=>(  
          <>
          <Imagecard key={user.githubId} name= {user.name} imglink={`https://avatars.githubusercontent.com/u/${user.githubId}?v=4`}/> 
          <h3>Student</h3> 
          </>
        ))
      }
      
    </div>
  );
}

export default App;
