import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import img from './cc.png';

const LeftSide = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='mm side-height sticky top-0' >

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
    );
};

export default LeftSide;