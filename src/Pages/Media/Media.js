import React, { useEffect, useState } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import Status from '../Status/Status';

const Media = () => {


    const [medias, setMedias] = useState([]);
    useEffect(() => {
        fetch('https://riya-media-server.vercel.app/post-data')
            .then(res => res.json())
            .then(data => setMedias(data.reverse()))
    }, [])
    console.log(medias[0]?._id)
    return (
        <div>
            {medias[0]?._id ?
                <>{medias.map(media => <Status
                    key={media._id}
                    media={media}
                ></Status>)}</>
                :
                <SyncLoader className='mt-6' color="#36d7b7" />}

        </div>
    );
};

export default Media;