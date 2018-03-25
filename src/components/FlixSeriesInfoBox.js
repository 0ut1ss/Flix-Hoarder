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
        <h4>Genre: <span>{props.genres.map((genre,index) => (
                props.series.genre_ids.includes(genre.id) &&<p>{genre.name}</p>
            ))
        }
        </span></h4>
        <button onClick = {() => props.handleAddSeries(props.series)}>Hoard</button>
        <button onClick = {() => props.handleAddToWishList(props.series)}>Wishlist</button>
        <button>IMDB</button>
        <button>Share</button>
    </div>

);


export default FlixSeriesInfoBox;