import React from 'react';
import { toast } from 'react-toastify';

const Item = ({ a }) => {
    const { name, price, totalQuantity, img, _id } = a;

    const handleAddtoCard = () => {

        const cardItem = {
            name, price, totalQuantity, img, specificId: _id
        }

        fetch(`http://localhost:5000/card`, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(cardItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('You add a item to the card')
                }


            })

    }


    return (
        <div>
            <div className="card w-36 lg:w-60 md:w-48 bg-base-100 shadow-xl relative ">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <div>
                        <h2 className="card-title text-amber-400">
                            {name}
                        </h2>
                        <div className="badge badge-secondary"> {totalQuantity} </div>
                    </div>
                    <div className='flex justify-center'>
                        <div>
                            <div className=' text-secondary flex justify-end   '>  {price} BDT   </div>
                            <div className="card-actions absolute bottom-2  ">
                                <button onClick={handleAddtoCard} className='btn btn-xs btn-primary' >    Add to Card    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;