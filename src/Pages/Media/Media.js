import React, { useEffect, useState } from 'react';
import Status from '../Status/Status';

const Media = () => {


    const [medias, setMedias] = useState([]);
    useEffect(() => {
        fetch('https://riya-media-server.vercel.app/post-data')
            .then(res => res.json())
            .then(data => setMedias(data))
    }, [])
    return (
        <div>
            <h2>This is media {medias.length}</h2>
            {medias.map(media => <Status
                key={media._id}
                media={media}
            ></Status>)}
        </div>
    );
};

export default Media;