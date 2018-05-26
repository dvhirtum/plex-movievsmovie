import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const MovieCard = ({ movie, select }) => (
  <Card link onClick={e => select(movie, e)}>
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
    </Card.Content>
  </Card>
);

export default MovieCard;
