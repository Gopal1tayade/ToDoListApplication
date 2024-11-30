import { useState } from 'react';
import Header from './componets/Header';
import ToDoList from './componets/ToDoList';


function App() {

  const [todos , setTodos] = useState([]);
  const[newTask , setNewTask] = useState('');
  function handleAddtask(){
    setTodos([...todos,{Id:Date.now(),task:newTask , complete:false}]);
    alert('task added successfully');
    setNewTask('');
  }
  
  function handleDelete(Id , index){
    if(!confirm('you want to delet this task')){
      return;
    }
    if(!todos[index].complete){
      alert('task is not completed......!')
      return;
    }
    setTodos(todos.filter(data => data.Id !== Id ))
    alert('task is deleted successfully');
  }

  function handleComplete(Id){
    setTodos(todos.map(todo =>(todo.Id == Id ? { ...todo, complete: !todo.complete } : todo )));
    alert('task status change.......!');
  }

  function handleEdit(Id,task){
    setTodos(todos.map(todo => (todo.Id === Id ? { ...todo, task: task } : todo)));
    alert('task edited successfully');
  }



  return (
    <>
     <div className='flex flex-col items-center'>
    <Header />
    <div className='w-full max-w-3xl ml-20 flex items-center justify-between '>
     <input type="text" value={newTask} onChange={e=>setNewTask(e.target.value)} onClick={()=> setNewTask('')} placeholder="Add a new task" className='w-full max-w-xl p-2 rounded-xl focus:outline-none'/>
     <button className='mr-20 border p-2 rounded-xl bg-white font-semibold hover:scale-110'onClick={handleAddtask}>Add Task</button>
    </div>
    
    <ToDoList todolist={todos} handleDelete = {handleDelete} handleComplete={handleComplete} handleEdit={handleEdit}/>
     
    </div>
    </>
   
  )
}

export default App
