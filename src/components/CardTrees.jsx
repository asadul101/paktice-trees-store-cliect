import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2';
import { MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';

const CardTrees = ({ trees,setDeletTrees,deletTrees }) => {
   const { name, quantity, taste, detalis, photo, _id } = trees;
   const handleDelet = _id => {
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
            fetch(`http://localhost:5000/trees/${_id}`, {
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
                  const rimaing=deletTrees.filter(d=>d._id !==_id)
                  setDeletTrees(rimaing)
               })

         }
      });

   }
   return (
      <div>
         <div className="card card-side bg-base-100 p-3 border transition hover:scale-105 shadow-xl">
            <figure className='rounded-2xl'>
               <img className='w-[250px] h-[250px]'
                  src={photo}
                  alt="Movie" />
            </figure>
            <div className="card-body">
               <div className='flex justify-between items-center'>
                  <div className='space-y-4'>
                     <h2 className=" font-bold text-3xl">Name: {name}</h2>
                     <p className='font-bold'>Tates: <span className='font-medium'>{taste}</span></p>
                     <p className='font-bold'>Quantity: <span className='font-medium'>{quantity}</span></p>
                     <p className='font-bold'>Detalis: <span className='font-medium'>{detalis}</span></p>
                  </div>
                  <div className="card-actions justify-end">
                     <div className="join join-vertical space-y-4">
                        <button className="btn join-item">Button</button>
                        <Link to={`/updateTrees/${_id}`}><button className="btn join-item text-3xl font-bold"><MdEdit/></button></Link>
                        <button onClick={() => handleDelet(_id)} className="btn join-item text-3xl font-bold text-red-700 bg-orange-300"><MdDeleteForever /></button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CardTrees;