import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddSunglass = () => {

    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const imagebbKey = "8cf4df2928da7fe0256bcbc04767a5c3"
    const [user, loading, error] = useAuthState(auth);

    const onSubmit = data => {
        const price = parseInt(data.price)
        const totalQuantity = parseInt(data.quantity);
        // console.log(data.file[0]);
        const image = data.file[0]
        const formData = new FormData();
        formData.append('image', image);
        fetch(`https://api.imgbb.com/1/upload?key=${imagebbKey}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        price: price,
                        totalQuantity: totalQuantity,
                        img: img,
                    }
                    fetch("http://localhost:5000/addItem", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast('You successfully add a item')
                                reset()
                            }

                        })
                }
            })
            .catch((error) => {
                console.error("Error", error);
            })
    };

    return (
        <div>
            <div className='flex justify-center'>

                <form onSubmit={handleSubmit(onSubmit)} >
                    <div class="card max-w-xl w-full shadow-xl p-8">

                        <div class="card-body">
                            <p className='text-3xl py-4 text-accent font-bold'>Add Item </p>
                            <div class=" ">
                                <input type="text" className='input input-bordered w-full max-w-lg   '
                                    placeholder='Item Name'
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "implement The Item Name"
                                        },
                                        minLength: {
                                            value: 1,
                                            message: "Name Should be 1 Character"
                                        }

                                    })}
                                />
                                <label  > {errors.name?.type === "required" && <span> {errors.name.message} </span>}</label>
                                <label  > {errors.name?.type === "minLength" && <span> {errors.name.message} </span>}</label>
                            </div>
                            <div>
                                <label htmlFor="">  </label>
                                <input type="number" placeholder='Item Quantity '
                                    className='input input-bordered w-full max-w-lg my-2'
                                    {...register("quantity", {
                                        min: {
                                            value: 1,
                                            message: "Quantity Should be 1 Character"
                                        },
                                        required: {
                                            value: true,
                                            message: "implement The Item quantity"
                                        },
                                    })}
                                />
                                <label >{errors.quantity?.type === "min" && <span> {errors.quantity.message} </span>}</label>
                                <label >{errors.quantity?.type === "required" && <span> {errors.quantity.message} </span>}</label>
                            </div>
                            <div>
                                <label htmlFor=""></label>
                                <input type="number" name="" id="" placeholder='Item Price'
                                    className='input input-bordered w-full max-w-lg  '
                                    {...register("price", {
                                        required: {
                                            value: true,
                                            message: "implement The Item Price"
                                        },
                                        minLength: {
                                            value: 1,
                                            message: "quality Should be 1 Character"
                                        }

                                    })}
                                />
                                <label  >   {errors.price?.type === "required" && <span> {errors.price.message} </span>}</label>
                                <label  >    {errors.price?.type === "minLength" && <span> {errors.price.message} </span>}</label>


                            </div>

                        </div>
                        <div>
                            <label >

                            </label>
                            <input type="file" name="" id=""
                                {...register("file", { required: true })}
                            />
                            <label >  {errors.file && <span>Image is required</span>}</label>
                        </div>
                        <div>
                            <input type="submit" value="ADD" className='btn btn-accent w-full max-w-lg my-3 ' />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddSunglass;