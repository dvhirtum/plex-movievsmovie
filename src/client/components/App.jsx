/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Card, Image } from 'semantic-ui-react';
import * as movieActions from '../actions/movieActions';

class App extends Component {
  render() {
    const { movies } = this.props;

    return (
      <Grid columns={movies.length}>
        {movies.map(movie => (
          <Grid.Column>
            <Card>
              <Image src={movie.image} />
              <Card.Content>
                <Card.Header>
                  {movie.title}
                </Card.Header>
                <Card.Meta>
                  <span className="date">
                    {movie.year}
                  </span>
                </Card.Meta>
                <Card.Description>
                  {movie.Description}
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>))}
      </Grid>
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
