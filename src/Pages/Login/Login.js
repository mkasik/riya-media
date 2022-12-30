import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import img from './one.png';

const Login = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { signIn, googleProviderLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                console.log(user.uid);
                navigate('/');
                form.reset();



            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            });

    }
    const handleGoogleSignIn = () => {

        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);


            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <h2 className='text-xl mt-4'>Please Login</h2>


            <div className="flex w-full">
                <div className="grid  flex-grow card  rounded-box place-items-center">
                    <img alt='' src={img}></img>
                </div>

                <div className="grid  flex-grow card  mt-12 mr-24 rounded-box place-items-center">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email"
                                        name='email'
                                        className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password"
                                        name='password' className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div className="divider">OR</div>
                                <button onClick={handleGoogleSignIn} className="btn btn-primary">Login With Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;