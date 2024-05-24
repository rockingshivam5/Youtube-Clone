import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from "../utils/constant"
import VideoCard from './VideoCard';
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {

    const [videos, setVideos] = useState([]);
    useEffect(() => {

        getVides();

    }, []);

    const getVides = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setVideos(json.items);
    }

    return <div className="flex flex-wrap">
        {
            videos.length > 0 ? <>

                {


                    videos.map((item) => (
                        <Link to={"/watch/" + item.id}>
                            <VideoCard info={item} />
                        </Link>
                    ))

                }
            </>
                :
                <>


                    {Array.from({ length: 16 }).map((index) => (
                        <Shimmer key={index} />
                    ))
                    }


                </>



        }
    </div>

}

export default VideoContainer
