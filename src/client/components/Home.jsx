import React from 'react';
import { Container, Button } from 'semantic-ui-react';
import { history } from '../store/configureStore';

const Home = () => (
  <Container>
    <Button onClick={() => history.push('/instructions')}>Instructions</Button>
    <Button primary onClick={() => history.push('/round/1')}>Start the game</Button>
  </Container>
);

export default Home;
