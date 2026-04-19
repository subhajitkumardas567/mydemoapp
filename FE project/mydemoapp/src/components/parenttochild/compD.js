
import { useContext } from "react";
import { userContext } from "../../App";
const CompD = ()=>{
    const {isReadOnly}= useContext(userContext);
    return (
        <div>
            <h1>this is component D</h1>
             <button disabled={isReadOnly}>Click me</button>{/* it will be disabled once it will be read only */}
        </div>
    );
}
export default CompD;