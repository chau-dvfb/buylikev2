import { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import AddCode from './pages/AddCode'
import AdminPage from './pages/Admin'
import EditCode from './pages/EditCode'
import EditToken from './pages/EditToken'
import HomePage from './pages/Home'
import ListToken from './pages/ListToken'

function App() {


  return (
    <div className="App">
       
       <Routes>
         
         <Route path='/'>
           <Route index element={<HomePage />}/>
             
           </Route>
           <Route path='admin' element={<p></p>}>
               <Route index element={<AdminPage />} />
               <Route path='addcode' element={<AddCode />} />
               <Route path='editcode/:id' element={<EditCode />} />
               <Route path='list' element={<ListToken />} />
               <Route path='edit' element={<EditToken />} />
           </Route>
         
       </Routes>
      
    </div>
  )
}

export default App
