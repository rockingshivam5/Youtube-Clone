import React from 'react'

const VideoCard = ({ info }) => {


    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    const img = thumbnails.medium.url;
    return (
        <div className="min-h-72 ">
            <div className="w-72 shadow-md min-h-[256px]  m-2 ">

                <img className="w-64 rounded-lg" src={thumbnails.medium.url} alt="Thumbnail" />
                <ul>
                    <li className="font-bold">{title}</li>
                    <li>{channelTitle}</li>
                    <li>{statistics.viewCount} views</li>

                </ul>
            </div>
        </div>
    )
}

export default VideoCard
