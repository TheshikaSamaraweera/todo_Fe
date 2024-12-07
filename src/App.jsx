import { useState } from 'react'

import './App.css'
import ListTodoComponent from './component/ListTodoComponent'
import HeadderComponent from './component/HeadderComponent'
import FooterComponent from './component/FooterComponent'
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import TodoComponent from './component/TodoComponent'

function App() {
 

  return (
    <>
    <BrowserRouter>
        <HeadderComponent/>
          <Routes>
           <Route path='/' element = { <ListTodoComponent/>}></Route>

           <Route path='/todos' element ={<ListTodoComponent/>}></Route>

           <Route path='/add-todo' element = {<TodoComponent/>}></Route>

           <Route path='/update-todo/:id' element = {<TodoComponent/>}></Route>
          </Routes>
        <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
