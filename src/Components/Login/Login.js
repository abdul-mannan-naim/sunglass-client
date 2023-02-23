import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };


    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || guser) {
            navigate(from, { replace: true })
        }
    }, [user, guser, from, navigate])

    if (error || gerror) {
        return (
            <div>
                <p>Error : {error.message || gerror.message}</p>
            </div>
        );

    }
    if (loading || gloading) {
        return <Loading></Loading>;
    }


    return (
        <div>
            <div className='flex justify-center'>
                <div className="w-[700px] rounded-xl card my-8 mx-8   py-8 " >
                    <form onSubmit={handleSubmit(onSubmit)} >

                        <div>
                            <h1 className='text-2xl font-bold text-accent'> Please Log In here  </h1>
                        </div>
                        <div>
                            <input
                                type='email'

                                {...register("email", { required: true })}
                                className="input input-bordered bg-accent text-white my-2 w-full max-w-lg"
                                placeholder='Email'
                            />

                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered bg-accent text-white my-2 w-full max-w-lg"
                                {...register("password", { required: true })} />

                            {errors.password && <span>This field is required</span>}
                        </div>




                        <div>
                            <input type="submit" value="Login" className="btn w-full max-w-lg font-bold my-2 " />
                        </div>
                    </form>
                    <div>
                        <p className='text-accent' >New to eShop Bazar ? <Link className='text-primary' to='/signup'> Register  </Link> </p>
                        <button
                            className="btn w-full max-w-lg font-bold my-2 "
                            onClick={() => signInWithGoogle()}> Continue With Google
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Login;