import React from 'react';
import FlixSeriesPoster from './FlixSeriesPoster';
import FlixSeriesInfoBox from './FlixSeriesInfoBox';

const FlixSeriesWindow = (props) => (
    <div>
        <FlixSeriesPoster series = {props.series}/>
        <FlixSeriesInfoBox series = {props.series}/>
    </div>
);

export default FlixSeriesWindow;