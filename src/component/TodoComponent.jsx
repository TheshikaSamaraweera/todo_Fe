import React, { useEffect } from 'react'
import { useState } from 'react'
import { gettodo, savetodo, updatetodo } from '../services/TodoService'
import { useNavigate, useParams } from 'react-router-dom'



const TodoComponent = () => {

    const [title , setTitle] = useState('')
    const [description , setDescription] = useState('')
    const [completed , setcompleted] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams()

    function saveOrUpdateTodo (e){
        e.preventDefault()

        const todo = {title,description,completed}
        console.log(todo);
        
        if(id){
            updatetodo(id,todo).then((response)=>{
                navigate('/todos')
            }).catch(error=>{
                console.error(error);
            })
        }else{
            
        savetodo(todo).then((response) => {
            console.log(response.data)
            navigate('/todos')
        }).catch(error => {
            console.error(error);
        })

        }

    }
    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update todo</h2>
        }else{
            return <h2 className='text-center'>Add todo</h2>
        }
    }

    useEffect(()=>{
        if(id){
            gettodo(id).then((response)=>{
                console.log(response.data)
                setTitle(response.data.title)
                setDescription(response.data.description)
                setcompleted(response.data.completed)

            }).catch(error=>{
                console.error(error);
            })
        }
    },[id])



  return (
    <div className='container'>
        <br/>
        <br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {pageTitle()}
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-lable'>Todo title:</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Todo Title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-lable'>Todo Description:</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Todo Description'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-lable'>Todo title:</label>
                            <select
                                className='form-control'
                                value={completed}
                                onChange={(e) => setcompleted(e.target.value)}
                            >
                                <option value="false">No</option>
                                <option value="true">Yes</option>
                            </select >
                        </div>
                        <button className='btn btn-success' onClick={(e) => saveOrUpdateTodo(e)}>Save</button>
                    </form>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default TodoComponent
