import React from 'react';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/'

const VideoListItem = (props) => {
    // équivalent de const movie = props.movie;
    const {movie} = props
    //{movie} au-dessus correspond à let movie = props.movie, ce qui permet de remplacer le props en paramètre de fonction
    // et de supprimer le props de props.movie ci-dessous
    return (
        // On met pas de () après handleOnClick pour pas que react lance la fonction directement au lancement de la page sans qu'on lui demande
            <div className="movie col shadow p-3 m-3 rounded" onClick={handleOnClick}>
                <img className="media-object img-rounded mb-auto" width="150px" src={`${IMAGE_BASE_URL}${movie.poster_path}`}/>
                <h2 className="text-center mt-3">{movie.title}</h2>
            </div>
        )

    function handleOnClick(){
        props.callback(movie)
    }
}

export default VideoListItem;