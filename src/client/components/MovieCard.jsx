import React from 'react';
import { Card, Image, Label } from 'semantic-ui-react';

const MovieCard = ({ movie, isSelected, select }) => (
  <Card link onClick={e => select(movie, e)}>
    <Image src={movie.image} />
    <Card.Content className={isSelected ? 'selected' : ''}>
      <Card.Header>
        {movie.title}
      </Card.Header>
      <Card.Meta>
        <span className="date">
          {movie.year}
        </span>
      </Card.Meta>
    </Card.Content>
    {isSelected &&
      <Card.Content extra className="selected">
        <Label horizontal>directed by</Label>
        {movie.director}
      </Card.Content>}
    {isSelected &&
      <Card.Content extra className="selected">
        <Label horizontal>starring</Label>
        {movie.actors.map(a => a.name).join(', ')}
      </Card.Content>}
  </Card>
);

export default MovieCard;
