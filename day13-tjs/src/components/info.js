import React, { Component } from 'react';
import Buttons from './buttons'

class Info extends Component {
    
    constructor() {
        super();

        this.state = {
            recordNum: 0
        }

        this.increaseIndex = this.increaseIndex.bind(this);
        this.decreaseIndex = this.decreaseIndex.bind(this);
    

    };

    // this.handleLogin = this.handleLogin.bind(this);
 

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

increaseIndex() {
    if (this.state.recordNum === this.props.data.length-1) {
        return
    } 
    this.setState({recordNum: this.state.recordNum+1});
}

decreaseIndex() {
    if (this.state.recordNum === 0) {
        return
    } 
    this.setState({recordNum: this.state.recordNum-1});
}


  render() {

    console.log(this.state.recordNum)

    return (


<div className="Info">

            <article id="counter"></article>
            <article id="fullName">{this.getName(this.state.recordNum)}</article>
        <div id="info2">
            <article id="city"><a>From: </a>{this.getCity(this.state.recordNum)}</article>
            <article id="title"><a>Job Title: </a>{this.getTitle(this.state.recordNum)}</article>
            <article id="employer"><a>Employer: </a>{this.getEmployer(this.state.recordNum)}</article>
            <article  id="movies"><a>Favorite Movies</a></article>
            <ol>
                <article id="moviesList"><a></a>{this.getfavoriteMovies(this.state.recordNum)}</article>
            </ol>
            <Buttons increaseIndex={this.increaseIndex} decreaseIndex={this.decreaseIndex}/>
        </div>

      </div>
    );
  }
}

export default Info;
