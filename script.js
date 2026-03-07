// const onClickHandler= () =>{
//     // alert("hello from js");
//     const pElement=document.querySelector('.my-para');
//     if(pElement.style.color === "black"){
//         pElement.style.color="red";//color changes to red when i click it
//     }
//     else{
//         pElement.style.color="black";
//     }
    
// }

// const obj = {
//     name: "Subhratanu",
//     isStudent: false,
//     address: {
//         addressLine1:"Test Apt",
//         addressLine2:"Test street",
//         addressLine3:null,
//         pincode:700118,
//         city:"CCU"
//     }
// }
// console.log(obj);
// console.log(obj.name);
// console.log(obj.isStudent ? "Subhratanu is a student" : "Subhratanu is not a student");


const arr=[20,45,72,68,114,85,96,35];
// const filteredArr=arr.filter((item)=>{
// return item>50;
// });
// console.log(filteredArr);

const filteredArr=arr.filter(item=>item>50);
console.log(filteredArr);
