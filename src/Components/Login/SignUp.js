import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SignUp = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password)
    };
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";



    if (error || gerror) {
        return (
            <div>
                <p>Error: {error.message || gerror.message}</p>
            </div>
        );
    }
    if (loading || gloading) {
        return <Loading></Loading>;
    }
    if (user || guser) {
        navigate(from, { replace: true })
    }


    return (
        <div >
            <div className='flex justify-center'>
                <div className="w-[700px] rounded-xl card my-8 mx-8   py-8 " >

                    <form onSubmit={handleSubmit(onSubmit)} >

                        <div>
                            <h1 className='text-2xl font-bold text-accent'>Register </h1>
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
                            <input type="submit" value="Sign Up" className="btn w-full max-w-lg font-bold my-2 " />
                        </div>
                    </form>
                    <div>
                        <p className='text-accent' > Already Registered ? <Link className='text-primary' to='/login'> Log In  </Link> </p>
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

export default SignUp;