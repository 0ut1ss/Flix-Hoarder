import React from 'react';
import FlixHeader from './FlixHeader';
import FlixSearch from './FlixSearch';
import FlixSeriesWindow from './FlixSeriesWindow';

export default class FlixHoarder extends React.Component {
    state = {
        series: {}
    };

    handleSearchSeries = (seriesText) => {
        const apiKey = '8cec4af43f5c1727dbc905598ed2421d';
        
        return fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=el-GR&query=${seriesText}`)
        .then((response) =>response.json())
        .then((responseJson) =>{ this.setState(() => ({series: responseJson.results[0]}));
        }) 
        
    };


    render() {
        const title = 'Flix Hoarder';
        const subtitle = 'Flicks... Gotta watch them all!'
    
        return(
            <div>
                <FlixHeader subtitle = {subtitle}  />
                <FlixSearch handleSearchSeries = {this.handleSearchSeries}/>
                <FlixSeriesWindow series = {this.state.series}
                />
            </div>
        );
    }
}