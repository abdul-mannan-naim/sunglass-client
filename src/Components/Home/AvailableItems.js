import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Card from './Card/Card';
import Item from './Item';

const AvailableItems = () => {

    const [availableItems, setAvailableItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setAvailableItems(data))
    }, [availableItems])

    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/card')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [cards])

    const chooseAgain = () => {
        fetch(`http://localhost:5000/delete`, {
            method: "DELETE",
            headers: {
                'content-type': "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast("Clear card")
                }
            })
    }


    const randomCard = Math.floor(Math.random() * cards.length) 
    const specificCard = cards[randomCard]; 

    const chooseForMe =() =>{
        fetch(`http://localhost:5000/randomCard`, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(specificCard) 
        })
            .then(res => res.json())
            .then(data => { 
                if (data.acknowledged  ) {
                    toast(' One Card  is for you  ')
                } 
            }) 
    }
    


    return (
        <div className=' '>

            <div className='flex justify-between '>
                <div className=' m-3 '>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        {availableItems.map(a => <Item
                            key={a._id}
                            a={a}
                        ></Item>)}
                    </div>
                </div>
                <div >
                    <div className="card w-48 lg:w-full md:w-80 h-1/2 bg-base-100 shadow-xl">
                        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-3 mt-3 ' >

                            <div className='mb-3'>
                                <div>
                                    {cards.map(card => <Card
                                        key={card._id}
                                        card={card}
                                    ></Card>)}
                                </div>
                            </div>
                            <div >
                                <div className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4'>
                                    <div>
                                        <button onClick={chooseForMe} className='btn '> Choose for me </button>
                                    </div>
                                    <div>
                                        <button onClick={chooseAgain} className='btn '> choose again </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableItems;