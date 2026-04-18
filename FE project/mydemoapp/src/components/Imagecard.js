function Imagecard({name,imglink,placeholder}){
    console.log("this is imagecard component");
    return(
        <>
            <h2>{name}</h2>
            <img src={imglink} alt={`${name} - ${placeholder}` }/>
        </>
    );
} 

export default Imagecard;

