import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

import Navbar from '../Nabvar/Navbar';
import img from './cc.png';

const About = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar></Navbar>

            <div className='mm  sticky top-0' >

                {
                    user?.uid ?
                        <>
                            <img title={user?.displayName} src={user?.photoURL}

                                className='rounded side-img'
                                alt='User images'></img>

                            <div className='items-center text-center text-2xl font-semibold '> {user?.displayName}</div>

                            <div className='items-center text-center font-semibold'>Email: {user?.email}</div>

                        </>
                        :
                        <>
                            <img title='User Name' src={img}

                                className='rounded side-img'
                                alt='User images'></img>

                            <div className='items-center text-center text-2xl font-semibold '> User Name</div>

                            <div className='items-center text-center font-semibold'>Email Address</div>

                        </>
                }
            </div>
            {
                user?.uid ? <button className='btn w-1/6 mt-6'>Edit</button>
                    :
                    <h3 className='text-2xl mt-6'>Please <Link className='text-success' to={'/login'}>Login</Link> For  Details</h3>
            }
        </div>
    );
};

export default About;