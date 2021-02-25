import React from 'react';

const VideoListItem = ({movie}) => {
    //{movie} au-dessus correspond à let movie = props.movie, ce qui permet de remplacer le props en paramètre de fonction
    // et de supprimer le props de props.movie ci-dessous
    return <li>Un film recommandé : {movie}</li>
}

export default VideoListItem;