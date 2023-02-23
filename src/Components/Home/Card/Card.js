import React from 'react';
import { toast } from 'react-toastify';

const Card = ({ card }) => {
    const { name, price, totalQuantity, img, _id } = card;

    const handleDelete = () => {
        fetch(`http://localhost:5000/delete/${_id}`, {
            method: "DELETE",
            headers: {
                'content-type': "application/json"
            }
        }) 
        .then(res=>res.json())
        .then(data=> {
            if(data.acknowledged) {
                toast( ` Delete ${name}  `) 
            }
        })
    }

    return (
        <div>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <div className="font-bold"> {name} </div>
                                <div className="text-sm opacity-50"> {price} </div>
                            </div>
                            <th className=' '>
                                <button onClick={handleDelete} className="btn btn-ghost btn-xs text-left text-error ">delete </button>
                            </th>
                        </div>
                    </div>
                </td>



            </tr>
        </div>
    );
};

export default Card;