import React from 'react';
import { Container, Header, Button } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

const Instructions = () => (
  <Container>
    <Header as="h2">Instructions</Header>
    <Route render={({ history }) => (
      <Button onClick={() => history.push('/')}>
        Back
      </Button>)}
    />
  </Container>
);

export default Instructions;
