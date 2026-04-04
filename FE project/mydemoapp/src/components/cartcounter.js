import { useState } from "react";
    //state variable
    
const CartCounter = () => { 
    const [value,setValue]=useState(1);
    const incrementCounter = () =>{
        if(value>= 20) return;
        setValue(value+1);
        console.log(`incrementing counter: ${value}`);
    }
    const decrementCounter=()=>{
        if(value< 1) return;
        setValue(value-1);
        console.log(`decrementing counter: ${value}`);
    }
    return (
        <>
        {value>=20 ? <button disabled>+</button> :<button onClick={incrementCounter}>+</button>}
        
            <h3>{value}</h3>
            {value <= 1 ? <button disabled>-</button> :<button onClick={decrementCounter}>-</button>}
        </>
    );
    
    
};

export default CartCounter;