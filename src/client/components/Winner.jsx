import React from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import { history } from '../store/configureStore';

const Winner = ({ winner }) => (
  <div>
    <h2>Winner!</h2>
    <MovieCard movie={winner} />
    <h2>You picked <em>{winner.title}</em>. Enjoy watching!</h2>
    <button type="button" className="btn btn-prinmary" onClick={() => history.push('/')}>
      Play again
    </button>
  </div>
);

const mapStateToProps = state => ({
  winner: state.winners.final
});

export default connect(mapStateToProps)(Winner);
