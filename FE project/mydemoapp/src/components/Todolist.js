import {useState} from 'react';
const Todolist = () =>{
    const [inputValue, setInputValue] = useState("");//inputValue = Subhajit
    const [TodoList,setTodoList] = useState([]);//TodoList = ["Subhajit", "Sarkar"] and setTodoList is the function that we can use to update the TodoList state
    const [message, setMessage] = useState("");//message state to display if element exists
    
    const ChangeInput = (event) =>{
        //console.log(event);
        setInputValue(event.target.value); //specific to input tag, we can use event.target.value to get the value of the input field
        setMessage("");//clear the error message when user is typing
    }
    
    const handleClick = () =>{
        if (inputValue.trim() === "") {//trim() method is used to remove extra spaces from the input value. We are checking if the trimmed input value is an empty string, which means that the user has not entered any task or has only entered spaces.
            alert("No elements added. Please enter a task!");//removes extra spaces from the input value and checks if it is empty, if it is empty then we show an alert
            console.log("No elements added. Please enter a task!");//log the message to the console
            return;
        }
  
        //check if the element already exists in the TodoList
        if(TodoList.includes(inputValue.trim())) { //includes() method is used to check if the inputValue already exists in the TodoList array. It returns true if the element is found, otherwise it returns false.
            setMessage("Element exists");//display message if element already exists
            //setInputValue("");//clear the input field
            return;
        }
        setTodoList([...TodoList, inputValue]);//we are using the spread operator to create a new array with the existing elements of the TodoList and the new inputValue
        setInputValue("") //after adding the task to the TodoList, we are resetting the inputValue to an empty string so that the input field is cleared for the next task to be added
        setMessage("");//clear any previous message
    }
    const DeleteTodo =(index) =>{//index=0
        TodoList.splice(index,1);//we are using the splice method to remove the task at the specified index from the TodoList array. The first argument is the index of the element to be removed, and the second argument is the number of elements to remove (in this case, we want to remove only one element).
        setTodoList([...TodoList]);//after modifying the TodoList array, we are creating a new array using the spread operator and updating the state with the new array. This is necessary to trigger a re-render of the component and reflect the changes in the UI.
    }
    const DeleteAll =()=>{
       setTodoList([]);//we are setting the TodoList state to an empty array, which effectively deletes all the tasks from the list. This will also trigger a re-render of the component and update the UI to reflect that there are no tasks in the list.
    }
    return(
        <>
        <h1>Todo List</h1>
        <input type = "text" placeholder = "Enter a task" value = {inputValue} onChange={ChangeInput} />
        <button onClick={handleClick} type = "submit" >Add Task</button>
        {message && <p>{message}</p>}
        {TodoList.length === 0 ? <p>No elements in TodoList</p> : (TodoList.map((task, index) => ( //task="subhajit", index=0
            
            <p key={index}> {task} <button onClick={()=>DeleteTodo(index)}> Delete </button></p> //we are using the map function to iterate over the TodoList array and display each task along with a delete button. The key prop is set to index to help React identify which items have changed, are added, or are removed.
        )))}
       
        {TodoList.length > 0 ?  <button onClick={DeleteAll}>Delete All</button> : null}{/* we are using conditional rendering to display the delete all button only when there are tasks in the TodoList */}
        
        </>
    );
};

export default Todolist;
//complete addeventlistener and display the output
//if op arr is blank then display no elements in todolist
//once u have an element in an arr , display the element along with  submit and delete button 