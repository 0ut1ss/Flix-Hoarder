import React from 'react';

const FlixSeriesPoster = (props) => (
    <div>
        <img src= {`https://image.tmdb.org/t/p/w300/${props.series.poster_path}`}/>
    </div>
);


export default FlixSeriesPoster;

