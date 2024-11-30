
import { NavLink, Outlet, useLoaderData } from 'react-router-dom'
import './App.css'
import CardTrees from './components/CardTrees'
import { useState } from 'react';

function App() {
  const treeslods=useLoaderData();
  const [deletTrees,setDeletTrees]=useState(treeslods)
  return (
    <div className='container mx-auto'>
      <nav className='flex items-center gap-6 pt-6'>
        <NavLink to='/'><button className='text-xl font-bold'>App</button></NavLink>
        <NavLink to='/addTree'><button className='text-xl font-bold'>AddTree</button></NavLink>
        <NavLink to='/sing'><button className='text-xl font-bold'>Login</button></NavLink>
        <NavLink to='/register'><button className='text-xl font-bold'>Rigester</button></NavLink>
        <NavLink to='/users'><button className='text-xl font-bold'>Users</button></NavLink>
      </nav>
      <h1 className='text-3xl font-bold text-center py-6'>Trees Barend: {treeslods.length}</h1>
      <Outlet/>
      <div className='grid grid-cols-2 gap-10'>
        {
          deletTrees.map(trees=><CardTrees key={trees._id} setDeletTrees={setDeletTrees} deletTrees={deletTrees} trees={trees}></CardTrees>)
        }
      </div>
      
      
    </div>
  )
}

export default App
