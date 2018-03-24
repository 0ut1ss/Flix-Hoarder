import React from 'react';
var isEmptyObject = require('is-empty-object');

const FlixSeries = (props) => (
    <div>
        <img src= {isEmptyObject(props.series)  ? "https://image.tmdb.org/t/p/w300/jyGspygDXJMydTOJj7iWNx9Elyd.jpg" : `https://image.tmdb.org/t/p/w300/${props.series.poster_path}`  }/>
    </div>
);


export default FlixSeries;

