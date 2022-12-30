import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Comment from '../Comment/Comment';

const Status = (media) => {
    // console.log(media.media.userName)
    const { user } = useContext(AuthContext);
    return (
        <div className='bg-base-300 status-height mt-1 '>

            <div class="grid  grid-cols-6 gap-4">

                <div class="col-start-1  ">
                    <img className='post-img mt-6 ' alt='' src={media?.media?.userPhoto}></img>
                </div>
                <div class="col-start-2 col-end-7 mt-6 text-left text-xl card-title mb-6  ">
                    {media?.media?.userName} Added a post
                </div>
                <div class="col-start-2 col-end-7 mt-1 text-left text-xl  mb-6  ">
                    {media?.media?.userPost}
                </div>


            </div>
            <div class="  ">
                <img className='status-img mt-1 ' alt='' src={media?.media?.statusPhoto}></img>

                {/* <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure> */}

            </div>
            <div class="grid grid-cols-4 gap-4 ml-48 mt-6 pb-6">
                <div>
                    <h2 className="card-title">
                        <button className=" btn btn-ghost gap-2">
                            Love
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        </button>

                    </h2>
                </div>

                <div>
                    <h2 className="card-title">
                        <button className='btn btn-ghost'>Comment</button>

                    </h2>
                </div>
                <div>
                    <h2 className="card-title ">
                        <button className='btn btn-ghost'>Share</button>

                    </h2>
                </div>
            </div>
            <div className="divider"></div>
            <Comment></Comment>

            <div className='bg-base-300 h-28 '>

                <div class="flex ">
                    <div class=" mt-6 ml-24 flex-none  w-14 h-14 ...">
                        <img className='round' alt='' src={user?.photoURL}></img>
                    </div>
                    <div class="grow mt-6 h-14 w-100">

                        <input type="text" placeholder="Comment here" className="input input-bordered h-12 w-2/3 " />
                        <button className='btn ml-2 '>Comment</button>

                    </div>


                </div>

            </div>



        </div>

    );
};

export default Status;