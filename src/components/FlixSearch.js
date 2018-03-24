import React from 'react';

export default class FlixSearch extends React.Component {

    state = {
        error: false
    };
    handleSearchSeries =(e) => {
        e.preventDefault();
        const search = e.target.elements.series.value.trim();
        if(search === "") {
            this.setState(() => ({error: true}));
        } else {
            this.setState(() => ({error: false}));
            this.props.handleSearchSeries(search); 
            e.target.elements.series.value = ''; 
        }
    };

    render() {
        return(
            <div>
                {this.state.error && <p>Please type a tv-show name...</p>}
                <form onSubmit= {this.handleSearchSeries}>
                    <input type="text" name = "series" placeholder = "Type a tv-series name..." />
                    <button>Flix</button>
                </form>
            
            </div>
        );
    }
}