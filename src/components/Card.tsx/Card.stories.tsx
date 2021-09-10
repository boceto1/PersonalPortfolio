import React from 'react';

import Card from './Card';

const CardStory = {
  component: Card,
  title: 'Components/Card',
};

export const BooksCard = () => (
  <Card
    color="rgba(85, 162, 180, 0.4)"
    imgSrc="https://m.media-amazon.com/images/I/51cqafqROkL.jpg"
    title="The Innovators"
    width="10rem"
    height="10rem"
  />
);

export const TechCard = () => (
  <Card
    color="rgba(164, 166, 58, 0.4)"
    imgSrc="https://m.media-amazon.com/images/I/51cqafqROkL.jpg"
    title="The Innovators"
    width="20rem"
    height="20rem"
  />
);

export const OthersCard = () => (
  <Card
    color="rgba(33, 17, 17, 0.4)"
    imgSrc="https://m.media-amazon.com/images/I/51cqafqROkL.jpg"
    title="The Innovators"
    width="40rem"
    height="40rem"
  />
);

export default CardStory;
