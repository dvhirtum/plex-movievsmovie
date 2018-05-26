import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Header, Container } from 'semantic-ui-react';
import * as movieActions from '../actions/movieActions';
import MovieCard from './MovieCard';
import { history } from '../store/configureStore';

const GameRound = (props) => {
  const {
    movies, round, actions
  } = props;
  const toggleSelected = (movie) => {
    actions.selectMovie(movie, round);
    switch (round) {
      case '1':
        history.push('/round/2');
        break;
      case '2':
        history.push('/round/3');
        break;
      case '3':
        history.push('/round/final');
        break;
      case 'final':
        history.push('/winner');
        break;
      default:
        history.push('/');
    }
  };

  return (
    <Container>
      {round === 'final'
        ? <Header as="h2">Final round!</Header>
        : <Header as="h2">Round {round}</Header>}
      <Card.Group centered>
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            select={toggleSelected}
          />))}
      </Card.Group>
      {round === 'final'
        ? <Header as="h2">These are the movies you picked. No pick the final winner!</Header>
        : <Header as="h4">Pick the movie you would most like to see!</Header>}
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => {
  const round = ownProps.match.params.id;

  let { movies } = state;

  if (round === 'final') {
    const { round1, round2, round3 } = state.winners;
    movies = [round1, round2, round3];
  } else {
    const begin = (round - 1) * 3;
    movies = movies.slice(begin, begin + 3);
  }

  return {
    movies,
    round
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(movieActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GameRound);
