import React from 'react';

const FlixSeriesInfoBox = (props) => (
    <div>
        {/* Series Title */}
        <h1>{props.series.original_name.toUpperCase()}</h1>

        {/* Overview */}
        <p>{props.series.overview}</p>
        {/*First Air-Date}*/}
        <h4>First Air Date: <span>{props.series.first_air_date}</span></h4>
        {/*Popularity}*/}
        <h4>Popularity: <span>{props.series.popularity}</span></h4>
        {/*Genre}*/}
        <h4>Genre: <span>TEST</span></h4>
        <button>Hoard</button>
        <button>Wishlist</button>
        <button>IMDB</button>
        <button>Share</button>
    </div>
);

export default FlixSeriesInfoBox;