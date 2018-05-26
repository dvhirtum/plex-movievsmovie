import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Header, Container } from 'semantic-ui-react';
import * as movieActions from '../actions/movieActions';
import MovieCard from './MovieCard';

const GameRound = (props) => {
  const {
    movies, selectedMovie, round, actions
  } = props;
  const toggleSelected = (movie) => {
    actions.selectMovie(movie);
  };

  return (
    <Container>
      <Header as="h2">Round {round}</Header>
      <Card.Group centered>
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isSelected={movie.id === selectedMovie.id}
            select={toggleSelected}
          />))}
      </Card.Group>
      {selectedMovie.title
        ? <Header as="h4">Click again to confirm that <em>{selectedMovie.title}</em> is your choice</Header>
        : <Header as="h4">Pick the movie you would most like to see!</Header>}
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  movies: state.movies,
  selectedMovie: state.selectedMovie,
  round: ownProps.match.params.id
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(movieActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GameRound);
