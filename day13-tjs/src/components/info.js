import React, { Component } from 'react';
import Buttons from './buttons'

class Info extends Component {
    
    constructor() {
        super()

        this.state = {
            index: 0
        }
    }


// This fucking sucks!!!
// let name = '';

getName(index) {
    let name = this.props.data[index].name.first + " " + this.props.data[index].name.last;
    return name;
}

    // {this.props.data[0].name.first}
getCity(index) {
    let city = this.props.data[index].city;
    return city;
}

getTitle(index) {
    let title = this.props.data[index].title;
    return title;
}

getEmployer(index) {
    let employer = this.props.data[index].employer;
    return employer;
}

getfavoriteMovies(index) {
    let favoriteMovies = this.props.data[index].favoriteMovies;

    return (
        favoriteMovies.map((movie, ndex) => <li key={ndex}>{movie}</li>)
    )
}



  render() {
      
    return (
      <div className="Info">
            <article id="counter"></article>
            <article id="fullName">{this.getName(1)}</article>
        <div id="info2">
            <article id="city"><a>From: </a>{this.getCity(1)}</article>
            <article id="title"><a>Job Title: </a>{this.getTitle(1)}</article>
            <article id="employer"><a>Employer: </a>{this.getEmployer(1)}</article>
            <article  id="movies"><a>Favorite Movies</a></article>
            <ol>
                <article id="moviesList"><a></a>{this.getfavoriteMovies(1)}</article>
            </ol>
        </div>

      </div>
    );
  }
}

export default Info;
