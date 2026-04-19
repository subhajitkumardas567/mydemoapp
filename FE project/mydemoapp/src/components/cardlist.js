import { useState } from "react";
import { userData } from "./constants/constant";
import Imagecard from "./Imagecard";

const CardList = () => {
  const [showIndex, setShowIndex] = useState(null);

  const clickHandler = (index) => {
    setShowIndex(showIndex === index ? null : index);
  };

  return (
    <>
      {userData.map((user, index) => (
        <div key={user.githubId}>
          <Imagecard
            name={user.name}
            imglink={`https://avatars.githubusercontent.com/u/${user.githubId}?v=4`} 
          />

          <h3
            style={{ cursor: "pointer" }}
            onClick={() => clickHandler(index)}
          >
            {user.isStudent ? "Student" : "Mentor"} ⬇️⬇️⬇️
          </h3>

          {showIndex === index && <p>{user.bioDescription}</p>}
        </div>
      ))}
    </>
  );
};

export default CardList;
// app.js -> cardlist.js -> imagecard.js  
//prop    -> prop(carrier)     ->  consumer