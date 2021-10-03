import React from 'react';

import Button from './Button';

const ButtonStory = {
  component: Button,
  title: 'Components/Button',
};

export const DefaultButton = () => 
  <Button 
    color={'red'}
    width="100px"
    height="100px"
    //borders="40px" 
    //rotate={'0deg'}
    //left?: "45px"
    //top?: "45px"
  />;
export const Button2 = () =>  
  <Button 
  color={'black'}
  width="100px"
  height="100px"
  //left: "60px"
  //top: "60px"
  
  //borders="80px"
  //rotate={'180deg'}
  />;
export default ButtonStory;
