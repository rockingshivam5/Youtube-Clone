import React from 'react'
import { useParams } from 'react-router-dom'
import Comments from './CommentsContainer';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';


const WatchPage = () => {

    const { id } = useParams();
    const source = "https://www.youtube.com/embed/" + id + "?autoplay=1";
    return (
        <>
            <div className='p-2 flex'>
                <div className='mt-[154px] ml-48'>
                    <iframe width="900" height="500" title="YouTube video player" src={source} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>
                </div>
                <div>
                    <LiveChat />
                </div>
            </div>


            <div>

                <CommentsContainer />

            </div>
        </>
    )
}

export default WatchPage
