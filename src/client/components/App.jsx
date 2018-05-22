/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as movieActions from '../actions/movieActions';

class App extends Component {
  render() {
    const { movies } = this.props;

    return (
      <div>
        <ul>
          {movies.map(movie => <li id={movie.id}>{movie.title} - {movie.year}</li>)}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    year: PropTypes.number
  })).isRequired
};

const mapStateToProps = state => ({
  movies: state.movies
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(movieActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
