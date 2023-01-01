import React from 'react';
import Media from '../Media/Media';
import Popular from '../Popular/Popular';
import Post from '../Post/Post';
import Status from '../Status/Status';

const Home = () => {
    return (
        <div className='mt-0'>
            <Post></Post>
            <Popular></Popular>
            <Media></Media>

        </div>
    );
};

export default Home;