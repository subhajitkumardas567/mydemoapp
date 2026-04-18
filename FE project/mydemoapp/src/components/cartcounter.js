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
    const incrementButtonProps = value >=20 ? {disabled:true} : {onClick:incrementCounter};//incrementButtonProps this will hold the object on basis of condition, it has object 
    const decrementButtonProps = value <=1 ? {disabled:true} : {onClick:decrementCounter};//decrementButtonProps this will hold the object on basis of condition, it has object 
    return (
        <>
            {/* {value>=20 ? <button disabled>+</button> :<button onClick={incrementCounter}>+</button>} */}
            <button {...incrementButtonProps}>+</button>
            <h3>{value}</h3>
            <button {...decrementButtonProps}>-</button>
            {/* {value <= 1 ? <button disabled>-</button> :<button onClick={decrementCounter}>-</button>} */}
        </>
    );
    
    
};

export default CartCounter;