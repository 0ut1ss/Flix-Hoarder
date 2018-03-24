import React from 'react';
import FlixHeader from './FlixHeader';
import FlixSearch from './FlixSearch';
import FlixSeriesWindow from './FlixSeriesWindow';

export default class FlixHoarder extends React.Component {
    state = {
        series: series,
        genres: genres
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

const series = {
    original_name: "Lost",

    poster_path: "/jyGspygDXJMydTOJj7iWNx9Elyd.jpg",

    overview: "Όλα ξεκινανε όταν το αεροπλάνο που εκτελούσε την πτήση Σίδνεϋ - Λος Αντζελες πέφτει σ''ενα νησι κάπου στον Ειρηνικό Ωκεανό. Τα άτομα τα οποια επιζούν απο την πτώση ειναι 48. Ανάμεσα τους ένας γιατρός, μια κατάδικος, ένας εκατομυριούχος, ενας τυχοδιώκτης, ένας Ιρακινός κομάντο, ένας περίεργος μεσήλικας, ένας ροκ σταρ, ένα ζευγαρι Κορεατών, 2 αδέρφια και αλλοι πολλοί.... Στην αρχή το νησί μοιάζει να είναι ήρεμο και οι επιζόντες πιστεύουν πως έχουν να αντιμετωπίσουν μόνο τα στοιχεία της φύσης... Αφού περνάνε οι μέρες και οι ελπίδες τους πως θα έρθει κάποιος να τους σώσει εξαφανίζονται τότε αποφασίζουν πως πρέπει μόνοι τους να βρουν τρόπο να φύγουν απο το νησί. Τίποτε δεν είναι αυτό που φαίνεται στο νησί το μόνο προφανές είναι ότι όλοι αυτοί οι άνθρωποι συνδέονται κατά κάποιον τρόπο κι ότι ο καθένας τους βρίσκεται εκεί για κάποιο συγκεκριμένο λόγο....",

    first_air_date: "2004-09-22",
    popularity: 61.523637
};

const genres =  [
    {
      "id": 10759,
      "name": "Action & Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 10762,
      "name": "Kids"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10763,
      "name": "News"
    },
    {
      "id": 10764,
      "name": "Reality"
    },
    {
      "id": 10765,
      "name": "Sci-Fi & Fantasy"
    },
    {
      "id": 10766,
      "name": "Soap"
    },
    {
      "id": 10767,
      "name": "Talk"
    },
    {
      "id": 10768,
      "name": "War & Politics"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]