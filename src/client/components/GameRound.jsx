import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as movieActions from '../actions/movieActions';
import MovieCard from './MovieCard';
import { history } from '../store/configureStore';

class GameRound extends React.Component {
  constructor() {
    super();

    this.state = {
      hover: 0
    };

    this.toggleSelected = this.toggleSelected.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleSelected(movie) {
    const { round, actions } = this.props;
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
  }

  toggleHover(movie) {
    if (this.state.hover === movie.id) {
      this.setState({
        hover: 0
      });
    } else {
      this.setState({
        hover: movie.id
      });
    }
  }

  render() {
    const { movies, round } = this.props;
    return (
      <div className="container">
        {round === 'final'
          ? <h2>Final round!</h2>
          : <h2>Round {round}</h2>}
        <div className="card-deck">
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              focus={this.state.hover === movie.id}
              select={this.toggleSelected}
              hover={this.toggleHover}
            />))}
        </div>
        {round === 'final'
          ? <h4>These are the movies you picked. Now pick the final winner!</h4>
          : <h4>Pick the movie you would most like to see!</h4>}
      </div>
    );
  }
}

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
