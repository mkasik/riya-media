import React from 'react';
import './Main.css';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import LeftSide from '../Pages/LeftSide/LeftSide';
import Navbar from '../Pages/Nabvar/Navbar';
import RightSide from '../Pages/RightSide/RightSide';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex w-full gap-1">
                <div className="grid side-height sticky top-0 flex-grow card bg-base-200  rounded "><LeftSide></LeftSide></div>

                <div className="grid  flex-grow card bg-base-100 rounded "><Outlet></Outlet></div>

                <div className="grid side-height sticky top-0 flex-grow card bg-base-200 rounded "><RightSide></RightSide></div>
            </div>



            <Footer></Footer>
        </div>
    );
};

export default Main;