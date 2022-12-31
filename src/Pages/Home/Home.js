import React from 'react';
import Popular from '../Popular/Popular';
import Post from '../Post/Post';
import Status from '../Status/Status';

const Home = () => {
    return (
        <div className='mt-0'>
            <Post></Post>
            <Popular></Popular>

        </div>
    );
};

export default Home;