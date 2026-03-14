function Imagecard({name,imglink}){
    console.log("this is imagecard component");
    return(
        <div>
            <h2>{name}</h2>
            <img src={"https://avatars.githubusercontent.com/u/172288926?v=4"} alt="placeholder"/>
        </div>
    );
}

export default Imagecard;