import React from 'react';
import FlixHeader from './FlixHeader';
import FlixSearch from './FlixSearch';
import FlixSeriesWindow from './FlixSeriesWindow';

export default class FlixHoarder extends React.Component {
    state = {
        series: series,
        hoards: [],
        wishlist: [],
    };


    handleExternalUrl = (seriesID, url) => {
      fetch(`https://api.themoviedb.org/3/tv/${seriesID}/external_ids?api_key=${apiKey}&language=el_GR`)
      .then((response) =>  response.json())
      .then((responseData) => url=== 'imdb'?window.location = `http://www.imdb.com/title/${responseData.imdb_id}/?ref_=nv_sr_1` 
      : window.location = `https://www.facebook.com/${responseData.facebook_id}/` 
    );
    }

    handleAddSeries = (hoard) => {
      this.setState(() => ({
        options: this.state.hoards.push(hoard)
      }));
      console.log(hoard);
    }

    handleAddToWishList = (wish) => {
      this.setState(() => ({
        options: this.state.wishlist.push(wish)
      }));
      console.log(wish);
    }

    handleSearchSeries = (seriesText) => {     
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
                                  genres = {this.allGenres}
                                  handleAddSeries = {this.handleAddSeries}
                                  handleAddToWishList = {this.handleAddToWishList}
                                  handleExternalUrl = {this.handleExternalUrl}
                />
            </div>
        );
    }

      allGenres =  [{"id":28,"name":"Δράση"},{"id":12,"name":"Περιπέτεια"},{"id":16,"name":"Κινούμενα Σχέδια"},{"id":35,"name":"Κωμωδία"},{"id":80,"name":"Αστυνομική"},{"id":99,"name":"Ντοκυμαντέρ"},{"id":18,"name":"Δράμα"},{"id":10751,"name":"Οικογενειακή"},{"id":14,"name":"Φαντασίας"},{"id":36,"name":"Ιστορική"},{"id":27,"name":"Τρόμου"},{"id":10402,"name":"Μουσική"},{"id":9648,"name":"Μυστηρίου"},{"id":10749,"name":"Ρομαντική"},{"id":878,"name":"Επ. Φαντασίας"},{"id":10770,"name":"τηλεοπτική ταινία"},{"id":53,"name":"Θρίλερ"},{"id":10752,"name":"Πολεμική"},{"id":37,"name":"Western"}]


}

FlixHoarder.defaultProps = {
  imdb_id : 'tt0411008',
  facebook_id : 'LOST'
}

const series = {
  original_name: "Lost",

  poster_path: "/jyGspygDXJMydTOJj7iWNx9Elyd.jpg",

  overview: "Όλα ξεκινανε όταν το αεροπλάνο που εκτελούσε την πτήση Σίδνεϋ - Λος Αντζελες πέφτει σ''ενα νησι κάπου στον Ειρηνικό Ωκεανό. Τα άτομα τα οποια επιζούν απο την πτώση ειναι 48. Ανάμεσα τους ένας γιατρός, μια κατάδικος, ένας εκατομυριούχος, ενας τυχοδιώκτης, ένας Ιρακινός κομάντο, ένας περίεργος μεσήλικας, ένας ροκ σταρ, ένα ζευγαρι Κορεατών, 2 αδέρφια και αλλοι πολλοί.... Στην αρχή το νησί μοιάζει να είναι ήρεμο και οι επιζόντες πιστεύουν πως έχουν να αντιμετωπίσουν μόνο τα στοιχεία της φύσης... Αφού περνάνε οι μέρες και οι ελπίδες τους πως θα έρθει κάποιος να τους σώσει εξαφανίζονται τότε αποφασίζουν πως πρέπει μόνοι τους να βρουν τρόπο να φύγουν απο το νησί. Τίποτε δεν είναι αυτό που φαίνεται στο νησί το μόνο προφανές είναι ότι όλοι αυτοί οι άνθρωποι συνδέονται κατά κάποιον τρόπο κι ότι ο καθένας τους βρίσκεται εκεί για κάποιο συγκεκριμένο λόγο....",

  first_air_date: "2004-09-22",
  popularity: 61.523637,
  genre_ids: [10759,18,9648],
  id: 4607

};

const apiKey = '8cec4af43f5c1727dbc905598ed2421d';





