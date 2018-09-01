import React, { Component } from 'react'

import './Movies.css';

 class Movies extends Component {

    constructor() {
        super()
        this.state = {
           movies: [],
           search: ''
         }
      };
    
     updateSearch = (e) =>{
       this.setState({
         search: e.target.value,
       })
     }
      
     componentDidMount(){

       var myRequest = new Request('http://starlord.hackerearth.com/movieslisting');
       let movies = [];

       fetch(myRequest)
     .then(response => response.json()) 
     .then(data => {
        this.setState({ movies: data })
      })
        
    }

  render() {
    let filteredMovies = this.state.movies.filter(
      (movie) => {
          return movie.movie_title.indexOf(this.state.search) !== -1;
      }
    );
    return (
       <div>
        <div className="row">
         <div className="col-md-12">
          <input className="search-form" type="text" placeholder="Search.." value={this.state.search} onChange={this.updateSearch}/>
         </div>
        </div>
        <div className="row">
          {filteredMovies.map((movie,index) => {
            const {movie_title, 
                  director_name, 
                  actor_1_name, 
                  actor_2_name, 
                  genres, language, 
                  country, content_rating, 
                  title_year, budget, 
                  plot_keywords, movie_imdb_link } = movie;  
            return(
              <div key={`movie-${index}`} className="card col-md-6 card--transparent">
                <div className="card-body">
                  <h3 className="card-title">{movie_title}({title_year})</h3>
                  <h5 className="card-title card-title--sub">{director_name}</h5>
                  <p className="card-text">Stars : {actor_1_name}, {actor_2_name}</p>
                  <p className="card-text">{language} | {country}</p>
                  <a href={movie_imdb_link} className="btn btn-danger">IMDB link</a>
                </div>
              </div>
            )
          })}
          </div>
          </div>

    )
  }
}

export default Movies;
