import React from 'react';

const Comment = () => {
    return (
        <div>
            <div className='bg-base-300 h-28 '>

                <div class="flex ">
                    <div class=" mt-4 ml-24 flex-none  w-14 h-14 ...">
                        <img className='round' alt='' src='https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg'></img>
                    </div>
                    <div class="grow mt-6 h-14 w-100">

                        <div>
                            <h2 className="card-title text-primary ml-6">
                                <button className=''>Nice Photo</button>

                            </h2>
                        </div>

                    </div>


                </div>

            </div>
            <div className='bg-base-300 h-28 '>

                <div class="flex ">
                    <div class=" mt-4 ml-24 flex-none  w-14 h-14 ...">
                        <img className='round' alt='' src='https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg'></img>
                    </div>
                    <div class="grow mt-6 h-14 ">

                        <div>
                            <h2 className="card-title text-primary ml-6 ">
                                <button className=''>Nice Photo</button>

                            </h2>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    );
};

export default Comment;