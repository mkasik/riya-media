import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Post = () => {
    const navigate = useNavigate()

    const { user } = useContext(AuthContext);

    const handlePost = event => {

        event.preventDefault();
        const form = event.target;
        const userPost = form.post.value;
        const postPhoto = form.img.files[0];
        console.log(userPost, user.photoURL, user.displayName);


        let data = new FormData();

        data.append('image', postPhoto);
        const url = 'https://api.imgbb.com/1/upload?expiration=600&key=99234a10f0aa156878f5c836ecba340c'
        fetch(url, {
            method: 'POST',
            body: data
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData.data.url);
                const statusPhoto = imgData.data.url;
                dataPost(userPost, statusPhoto, user.photoURL, user.displayName
                )
                console.log(userPost, statusPhoto, user.photoURL, user.displayName)

            })



        form.reset();
    }

    const dataPost = (userPost, statusPhoto, userPhoto, userName) => {
        const status = {

            userPost,
            statusPhoto,
            userPhoto,
            userName


        }
        fetch('http://localhost:5000/post-data', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    alert('Success')
                    navigate('/media');


                }
            })

    }
    return (
        <div className='bg-base-300 h-32 '>

            <form onSubmit={handlePost}>
                <div class="flex ">
                    <div class=" mt-6 ml-2.5 flex-none  w-14 h-14 ...">
                        <img className='round' alt='' src={user?.photoURL}></img>
                    </div>
                    <div class="grow mt-6 h-14 w-100">
                        <input type="text" placeholder="Type here" name='post' className="input input-bordered h-12 w-3/4 " />

                        <button className='btn ml-2 '>Post</button>

                    </div>



                </div>

                <input type='file' name='img' ></input>
            </form>

        </div>
    );
};

export default Post;