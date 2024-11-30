import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddTrees from './components/AddTrees.jsx';
import UpdateTrees from './components/UpdateTrees.jsx';
import SingnIn from './components/SingnIn.jsx';
import Register from './components/Register.jsx';
import Authprovider from './components/Authprovider.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/trees')
  },
  {
    path: "/addTree",
    element: <AddTrees></AddTrees>,
  },
  {
    path: "/updateTrees/:id",
    element: <UpdateTrees></UpdateTrees>,
    loader: ({ params }) => fetch(`http://localhost:5000/trees/${params.id}`)
  },
  {
    path: '/sing',
    element: <SingnIn></SingnIn>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader:()=>fetch('http://localhost:5000/users')
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
)
