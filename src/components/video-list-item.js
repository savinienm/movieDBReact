import React from 'react';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/'

const VideoListItem = ({movie}) => {
    //{movie} au-dessus correspond à let movie = props.movie, ce qui permet de remplacer le props en paramètre de fonction
    // et de supprimer le props de props.movie ci-dessous
    return <li>
        <img width="250px" src={`${IMAGE_BASE_URL}${movie.poster_path}`}/>
        <h3>{movie.title}</h3>
        </li>
}

export default VideoListItem;