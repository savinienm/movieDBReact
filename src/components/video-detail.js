import React from 'react'

const VideoDetail = ({title, description, date, vote, count}) => {
    return (
        <div>
            <h1>
                {title}
            </h1>
            <h5>
                Sortie le {date}
            </h5>
            <h4>
                Note de {vote}/10 pour {count} votes
            </h4>
            <p>
                {description}
            </p>
        </div>
    )
}

export default VideoDetail;