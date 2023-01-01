import React, { useEffect, useState } from 'react';

const Comment = (props) => {

    const [comments, setCommnets] = useState([]);
    useEffect(() => {
        fetch('https://riya-media-server-mkasik.vercel.app/comment')
            .then(res => res.json())
            .then(data => setCommnets(data.reverse()))
    }, []);
    const comment = comments.filter(cc => cc.postId === props.id)

    return (
        <div>
            {comment.map(cc =>
                <div className='bg-base-300 h-28 '>

                    <div class="flex ">
                        <div class=" mt-4 ml-24 flex-none  w-14 h-14 ...">
                            <img className='round' alt='' src={cc?.userPhoto}></img>
                        </div>
                        <div class="grow mt-6 h-14 w-100">

                            <div>
                                <h2 className="card-title text-primary ml-6">
                                    <button className=''>{cc.comment}</button>

                                </h2>
                            </div>

                        </div>


                    </div>

                </div>

            )}
        </div>
    );
};

export default Comment;