import React from 'react';
import { Container, Button } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

const Home = () => (
  <Container>
    <Route render={({ history }) => (
      <Button onClick={() => history.push('/instructions')}>
        Instructions
      </Button>)}
    />
    <Route render={({ history }) => (
      <Button primary onClick={() => history.push('/round/1')}>
        Start the game
      </Button>)}
    />
  </Container>
);

export default Home;
