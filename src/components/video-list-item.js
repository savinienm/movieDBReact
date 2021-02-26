import React from 'react';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/'

const VideoListItem = ({movie}) => {
    //{movie} au-dessus correspond à let movie = props.movie, ce qui permet de remplacer le props en paramètre de fonction
    // et de supprimer le props de props.movie ci-dessous
    return (
        <li className="list-group-item">
            <div className="media">
                <div className="media-left">
                    <img className="media-object img-rounded" width="100px" src={`${IMAGE_BASE_URL}${movie.poster_path}`}/>
                </div>
                <div className="media-body">
                    <h5 className="title_list_item">{movie.title}</h5>
                </div>
            </div>
        </li>
        )
}

export default VideoListItem;