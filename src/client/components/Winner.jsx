import React from 'react';
import { connect } from 'react-redux';
import { Button, Header, Container } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import * as movieActions from '../actions/movieActions';
import { history } from '../store/configureStore';
import MovieCard from './MovieCard';

const Winner = ({ winner, actions }) => {
  const playAgain = () => {
    actions.loadMovies();
    history.push('/');
  };

  return (
    <Container>
      <Header as="h2">Winner!</Header>
      <MovieCard movie={winner} />
      <Header as="h2">You picked <em>{winner.title}</em>. Enjoy watching!</Header>
      <Button onClick={playAgain}>Play again</Button>
    </Container>
  );
};

const mapStateToProps = state => ({
  winner: state.winners.final
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(movieActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Winner);
