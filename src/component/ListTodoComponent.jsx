import React, { useEffect, useState } from 'react'
import { completetodo, deletetodo, getAllTodos, incompletetodo } from '../services/TodoService';
import { useNavigate } from 'react-router-dom';

const ListTodoComponent = () => {


    const [todos,setTodos] =useState([])
    const navigate = useNavigate()

    useEffect(() => {
        listTodos();
    }, [])

    function listTodos(){
        getAllTodos().then((response) => {
            setTodos(response.data);
        }).catch(erroe => {
            console.error(erroe);
        })
    }

    function addNewTodo(){
        navigate('add-todo')

    }

    function updatetodo(id){
        console.log(id)
        navigate(`/update-todo/${id}`)
    }

    function removetodo(id){
        deletetodo(id).then((response) => {
            listTodos();
        }).catch(error => {
            console.error(error)
        })
    }

    function markCompleteTodo(id){
        completetodo(id).then((response) => {
            listTodos()
        }).catch(error=>{
            console.error(error)
        })
    }

    function markincompleteTodo(id){
        incompletetodo(id).then((response) => {
            listTodos()
        }).catch(error=>{
            console.error(error)
        })
    }


  return (
    <div className='container'>
        <h2>List of Todos</h2>
        <button className='btn btn-primary mb-2' onClick={addNewTodo}>Add Todo</button>
        <div>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Todo Title</th>
                        <th>Todo Description</th>
                        <th>Todo completed</th>
                    </tr>
                </thead>

                <tbody>
                    {todos.map(todo =>
                        <tr key={todo.id}>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <td>{todo.completed ? 'YES' : 'NO'}</td>
                            <td>
                                <button className='btn btn-info' onClick={()=>updatetodo(todo.id)}>Updatate</button>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={()=>removetodo(todo.id)}>Delete</button>
                            </td>
                            <td>
                                <button className='btn btn-success' onClick={()=>markCompleteTodo(todo.id)}>Complete</button>
                            </td>

                            <td>
                                <button className='btn btn-info' onClick={()=>markincompleteTodo(todo.id)}>Incomplete</button>
                            </td>

                        </tr>

                    )
                    }


                </tbody>

            </table>
        </div>
      
    </div>
  )
}

export default ListTodoComponent
