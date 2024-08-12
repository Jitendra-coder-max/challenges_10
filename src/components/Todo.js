import React, { useState } from 'react'

const Todo = () => {

    const [todos, setTodos] = useState('')
    const [addData, setAddData] = useState([]);
    const [editIndex, setEditIndex] = useState(null)



    const handleClick = () => {
        // setAddData([...addData,todos])
        setAddData((prevTodo) => [...prevTodo,todos] )
        setTodos('')
       
    }

    console.log(addData)


    const deleteTodo = (id) => {

     const FilteredTodo =   addData.filter((_,index) =>  index !==id)
    //  setAddData([...FilteredTodo])
     setAddData(FilteredTodo)

    }
const handleUpdate = () => {

  const updatedTodos =  addData.map((data,index) =>
    
    index ===editIndex ? todos:data);
    setAddData(updatedTodos)
    setEditIndex(null)
    setTodos('')

}

    const editTodo = (index) =>{

        setTodos(addData[index])
        setEditIndex(index)
    }
  return (
    <div>Todo

        <input  type="text" placeholder='enter todos' value={todos} onChange={(e) => setTodos(e.target.value)}/>
      <button onClick={handleClick}>Add todo</button>
      <button onClick={handleUpdate}>Update todo</button>
<ul>
      {addData.map((data,index) => (
        <li key={index}>{data}
        <button onClick={() =>deleteTodo(index)}>delete</button>
        <button onClick={() => editTodo(index)}>Eidt</button></li>
      ))}
      </ul>
    </div>
  )
}

export default Todo