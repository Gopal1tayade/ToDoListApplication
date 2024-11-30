import { useState } from "react";



const ToDoItem = (props) =>{
    const [isEditing , setIsEditing] = useState(false);
    const [newText , setNewText] = useState(props.todolists.task);
    return(
        <>
         <div className="flex bg-red-400  bg-transparent border hover:border-black w-full max-w-4xl justify-between items-center px-4 py-2 mt-2 ml-auto mr-auto shadow-md rounded-md">
                <div className="text ">
                    <h1 className="text-yellow-400 font-medium">
                        {isEditing ?(
                              <>
                              <input value={newText} onChange={e => setNewText(e.target.value)} className="p-2 rounded text-black " />
                              <button className="p-2 border ml-2 rounded bg-white text-black font-semibold" onClick={() => { props.handleEdit(props.todolists.Id, newText); setIsEditing(false); }}>Save</button>
                            </>
                        ): props.todolists.task}
                        </h1>
                </div>
                <div className="btn flex space-x-2">
                    {props.todolists.complete ?  <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                        Completed
                    </button> : <button className="bg-red-300 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={()=> props.handleComplete(props.todolists.Id)}>
                        Completed
                    </button>}
                    
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={()=>setIsEditing(true)}>
                        Edit
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={ () => props.handleDelete(props.todolists.Id,props.index)}>
                        Delete
                    </button>
                </div>
               


            </div>

        </>
    )
};

export default ToDoItem;