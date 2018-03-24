import React from 'react';
import FlixSeries from './FlixSeries';

const FlixSeriesWindow = (props) => (
    <div>
        <FlixSeries series = {props.series}/>
        {props.series.original_name? <h1>{props.series.original_name.toUpperCase()}</h1> : <h1>LOST</h1>}
    </div>
);

FlixSeriesWindow.defaultProps ={
    original_name: 'Lost'
};
export default FlixSeriesWindow;