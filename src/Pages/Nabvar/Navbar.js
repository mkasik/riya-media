import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar sticky top-0 z-50  bg-black text-neutral-content ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-600 text-primary rounded-box w-52">
                            <li><a className='text-dark'>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Riya Media</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        <Link to={'/'}><button className="btn bg-black">Home</button></Link>
                        <Link to={'/media'}><button className="btn bg-black">Media</button></Link>
                        <Link to={'/'}><button className="btn bg-black">Message</button></Link>
                        <Link to={'/about'}><button className="btn bg-black">About</button></Link>

                    </ul>
                </div>
                <div className="navbar-end">
                    {/* {user?.uid ?
                        <>
                            <Link className='link me-3' to={'/dashboard'}>Dashboard</Link>
                            <img title={user?.displayName} src={user?.photoURL}
                                height='30'
                                className='rounded'
                                alt='User images'></img>

                            <Button className='ms-2' onClick={handleLogOut} variant="dark">Log Out</Button>

                        </>
                        :

                        <>
                            <Link className='link' to={'login'}>Login</Link>
                            <Link className='link' to={'register'}>Register</Link>
                        </>
                    } */}
                    {
                        user?.uid ? <>
                            <img title={user?.displayName} src={user?.photoURL}
                                height='30'
                                className='rounded user-img mr-4'
                                alt='User images'></img>
                            <button onClick={handleLogOut} className='btn bg-black'>Log Out</button>
                        </>
                            :
                            <>
                                <Link to={'/register'}><button className="btn bg-black">Register</button></Link>
                                <Link to={'/login'}><button className="btn bg-black">Login</button></Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;