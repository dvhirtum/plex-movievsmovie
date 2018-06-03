import React from 'react';
import { connect } from 'react-redux';
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
    <div className="container">
      <h2>Winner!</h2>
      <MovieCard movie={winner} />
      <h4>You picked <em>{winner.title}</em>. Enjoy watching!</h4>
      <button type="button" className="btn btn-primary" onClick={playAgain}>
        Play again
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  winner: state.winners.final
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(movieActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Winner);
