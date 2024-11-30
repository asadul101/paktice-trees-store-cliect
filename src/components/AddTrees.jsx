import React from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddTrees = () => {
   const handleAddTree = e => {
      e.preventDefault()
      const form = e.target;
      const name = form.name.value;
      const quantity = form.quantity.value;
      const supplir = form.supplir.value;
      const taste = form.taste.value;
      const category = form.category.value;
      const detalis = form.detalis.value;
      const photo = form.photo.value;
      const addTree = { name, quantity, supplir, taste, category, detalis, photo }
      console.log(addTree);
      fetch('http://localhost:5000/trees', {
         method: 'post',
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify(addTree)
      })
         .then(res => res.json())
         .then(data => {
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
   }
   return (
      <div className='container mx-auto pt-10'>
         <nav className='flex items-center gap-6 pb-6'>
            <NavLink to='/'><button className='text-xl font-bold'>App</button></NavLink>
            <NavLink to='/addTree'><button className='text-xl font-bold'>AddTree</button></NavLink>
            <NavLink to='/updateTree'><button className='text-xl font-bold'>UpdateTree</button></NavLink>
         </nav>
         <div className="hero bg-base-200 min-h-[650px] rounded-xl">
            <form onSubmit={handleAddTree} className='space-y-6'>
               {/* first */}
               <div className='flex items-center gap-6'>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Name</span>
                     </label>
                     <input type="text" name='name' placeholder="Enter yout name" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Quantity</span>
                     </label>
                     <input type="text" name='quantity' placeholder="Enter yout quantity" className="input input-bordered" required />
                  </div>
               </div>
               {/* Secned */}
               <div className='flex items-center gap-6'>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Supplier</span>
                     </label>
                     <input type="text" name='supplir' placeholder="Enter yout supplir" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Taste</span>
                     </label>
                     <input type="text" name='taste' placeholder="Enter yout taste" className="input input-bordered" required />
                  </div>
               </div>
               {/* first */}
               <div className='flex items-center gap-6'>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Category</span>
                     </label>
                     <input type="text" name='category' placeholder="Enter yout category" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Detalis</span>
                     </label>
                     <input type="text" name='detalis' placeholder="Enter yout detalis" className="input input-bordered" required />
                  </div>
               </div>
               <div>
                  <label className="form-control w-full max-w-xs">
                     <div className="label">
                        <span className="label-text">Photo</span>
                     </div>
                  </label>
                  <input type="text" name='photo' placeholder="Enter your photo" className="input input-bordered w-full" />
               </div>
               <input type="submit" value="Add tree" className="btn btn-block btn-neutral" />
            </form>
         </div>
      </div>
   );
};

export default AddTrees;