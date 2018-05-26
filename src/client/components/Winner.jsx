import React from 'react';
import { connect } from 'react-redux';
import { Button, Header, Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import MovieCard from './MovieCard';

const Winner = ({ winner }) => (
  <Container>
    <Header as="h2">Winner!</Header>
    <MovieCard movie={winner} />
    <Header as="h2">You picked <em>{winner.title}</em>. Enjoy watching!</Header>
    <Route render={({ history }) => (
      <Button onClick={() => history.push('/')}>
        Play again
      </Button>)}
    />
  </Container>
);

const mapStateToProps = state => ({
  winner: state.winners.final
});

export default connect(mapStateToProps)(Winner);
