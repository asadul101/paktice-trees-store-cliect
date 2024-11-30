import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './Authprovider';
import Swal from 'sweetalert2';

const Register = () => {
   const { handleCreateEmail } = useContext(AuthContext)

   const handleSubmit = e => {
      e.preventDefault()
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email,password);
     
      handleCreateEmail(email,password)
      .then(res=>{
         console.log(res.user);
         const createAt=res?.user?.metadata?.creationTime

         const newUsers={name,email,createAt}
         fetch('http://localhost:5000/users',{
            method:'post',
            headers:{
               'Content-type': 'application/json'
            },
            body:JSON.stringify(newUsers)
         })
         .then(res=>res.json())
         .then(data=>{
            console.log(data);
            if (data.insertedId) {
               Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Your work has been saved",
                  showConfirmButton: false,
                  timer: 1000
               });
            }
         })
      })
      .catch(err=>{
         console.log(err.message);
      })
   }
   return (
      <div className='container mx-auto'>
         <nav className='flex items-center gap-6 pt-6 pb-6'>
            <NavLink to='/'><button className='text-xl font-bold'>App</button></NavLink>
            <NavLink to='/addTree'><button className='text-xl font-bold'>AddTree</button></NavLink>
            <NavLink to='/sing'><button className='text-xl font-bold'>Login</button></NavLink>
            <NavLink to='/register'><button className='text-xl font-bold'>Rigester</button></NavLink>
            <NavLink to='/users'><button className='text-xl font-bold'>Users</button></NavLink>
         </nav>

         <div className="hero bg-base-200 min-h-[650px ]">
            <div className="hero-content flex-col lg:flex-row-reverse">
               <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Login now!</h1>
                  <p className="py-6">
                     Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                     quasi. In deleniti eaque aut repudiandae et a id nisi.
                  </p>
               </div>
               <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                  <form onSubmit={handleSubmit} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;