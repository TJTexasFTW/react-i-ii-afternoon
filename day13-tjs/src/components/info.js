import React, { Component } from 'react';



class Info extends Component {


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
    return favoriteMovies;
}



  render() {
      
    return (
      <div className="Info">
            <article id="fullName">{this.getName(0)}</article>
        <div id="info2">
            <article id="city"><a>From: </a>{this.getCity(0)}</article>
            <article id="title"><a>Job Title: </a>{this.getTitle(0)}</article>
            <article id="employer"><a>Employer: </a>{this.getEmployer(0)}</article>
            <article id="movies"><a>Favorite Movies: </a></article>
        </div>

      </div>
    );
  }
}

export default Info;
