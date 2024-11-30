import React, { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
   const loaded = useLoaderData()
   const [users, setUsers] = useState(loaded)
   const handleDelet = id => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
      }).then((result) => {
         if (result.isConfirmed) {

            fetch(`http://localhost:5000/users/${id}`, {
               method: 'delete'
            })
               .then(res => res.json())
               .then(data => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                     Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                     });
                  }
                  const rmaing=users.filter(user=>user._id !== id)
                  setUsers(rmaing)
               })
         }
      });
   }
   return (
      <div className='container mx-auto'>
         <nav className='flex items-center gap-6 pt-6 pb-6'>
            <NavLink to='/'><button className='text-xl font-bold'>App</button></NavLink>
            <NavLink to='/addTree'><button className='text-xl font-bold'>AddTree</button></NavLink>
            <NavLink to='/sing'><button className='text-xl font-bold'>Sing In</button></NavLink>
            <NavLink to='/register'><button className='text-xl font-bold'>Rigester</button></NavLink>
            <NavLink to='/users'><button className='text-xl font-bold'>Users</button></NavLink>
         </nav>

         <div>
            <h1 className='text-3xl font-medium'>User information {users.length}</h1>
            <div className="overflow-x-auto">
               <table className="table">
                  {/* head */}
                  <thead>
                     <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>createAt</th>
                        <th>lastimeInTime</th>
                     </tr>
                  </thead>
                  <tbody>
                     {/* row 1 */}
                     {
                        users.map(user => <tr key={user._id}>
                           <th>1</th>
                           <td>{user.name}</td>
                           <td>{user.email}</td>
                           <td>{user.createAt}</td>
                           <td>{user.lastSignInTime}</td>
                           <td className='flex items-center gap-2'>
                              <button className='btn'>E</button>
                              <button onClick={() => handleDelet(user._id)} className='btn'>x</button>
                           </td>
                        </tr>)
                     }

                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default Users;