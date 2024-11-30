 import ToDoItem from "./ToDoItem";

const ToDoList = (props) =>{

     return(
        <>
        <h1 className="text-2xl font-bold text-yellow-300 m-4">ToDoList</h1>
      
        {props.todolist.length > 0 &&  props.todolist.map((list , index) => <ToDoItem key={list.Id} todolists = {list} handleDelete={props.handleDelete} handleComplete={props.handleComplete} handleEdit={props.handleEdit} index = {index}/>)  }
      
       
       
        </>
     )
}

export default ToDoList;