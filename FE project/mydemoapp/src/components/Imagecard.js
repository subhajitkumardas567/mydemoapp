import {useContext} from "react";
import { userContext } from "../App";
function Imagecard({name,imglink}){
    const {placeholder} = useContext(userContext); 
    console.log("this is imagecard component");
    return(
        <>
            <h2>{name}</h2>
            <img src={imglink} alt={`${name}-${placeholder}` }/>
        </>
    );
} 

export default Imagecard;

