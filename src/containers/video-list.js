import React from 'react'
import VideoListItem from '../components/video-list-item'

const VideoList = () => {
    const movies = ['Film1', 'Film2', 'Film3', 'Film4', 'Film5']
    return (
        <div>
            <ul>
                {
                movies.map(movie => {
                return <VideoListItem key={movie} movie={movie}/>
                })
                }
            </ul>
        </div>
    )
}

export default VideoList;