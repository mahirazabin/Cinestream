// for react files, jsx is recommended

import React from 'react';

const MovieCard = ({movie1}) => {
    return (
        <div className="movie">
            <p>{movie1.Year}</p>
        </div>

        <div>
            <img src={movie1.poster !== 'N/A'? }
        </div>
    )
}
