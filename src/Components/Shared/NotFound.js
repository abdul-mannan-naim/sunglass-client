import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../sunglass/pexels-asim-alnamat-343720.jpg'

const NotFound = () => {
    return (
        <div className='flex justify-center'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={notfound} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className=" text-center text-3xl font-bold text-error ">   Page not found   </h2> 
                    <div className="card-actions justify-center">
                        <Link to='/' className="btn btn-accent text-white font-bold " > back to home </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;