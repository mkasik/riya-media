import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import img from './one.png';

const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSubmit = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURL, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();


                handleUpdateUserProfile(name, photoURL);
                navigate('/login')
            })
            .catch(e => console.error(e));

    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        return updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <h2 className='text-xl mt-4'>Please Register To Riya Media</h2>


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
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Full Name"
                                        name='name'
                                        className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email"
                                        name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Photo URL"
                                        name='photoURL'
                                        className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password"
                                        name='password'
                                        className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;