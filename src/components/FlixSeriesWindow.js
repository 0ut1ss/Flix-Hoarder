import React from 'react';
import FlixSeriesPoster from './FlixSeriesPoster';
import FlixSeriesInfoBox from './FlixSeriesInfoBox';

const FlixSeriesWindow = (props) => (
    <div>
        <FlixSeriesPoster series = {props.series}/>
        <FlixSeriesInfoBox series = {props.series}
                            genres = {props.genres}
                            handleAddSeries = {props.handleAddSeries}
                            handleAddToWishList = {props.handleAddToWishList}
                            handleExternalUrl = {props.handleExternalUrl}
        />
    </div>
);

export default FlixSeriesWindow;