import React from 'react';

import Button from './Button';

const ButtonStory = {
  component: Button,
  title: 'Components/Button',
};

export const DefaultButton = () => 
  <Button 
    color={'#3da78b'}
    width="100px"
    height="100px" 
    direction={'RIGHT'}
    borderLeft= "40px solid white"
    borderTop= "20px solid transparent"
    borderbottom= "20px solid transparent"
  />;

export const Button1 = () =>  
  <Button 
  color={'#241011'}
  width="100px"
  height="100px"
  direction={'UP'}
  borderLeft= "40px solid white"
  borderTop= "20px solid transparent"
  borderbottom= "20px solid transparent"
  />;

  export const Button2 = () =>  
  <Button 
  color="rgba(36, 16, 17, 1.5)"
  width="100px"
  height="100px"
  direction={'DOWN'}
  borderLeft= "40px solid white"
  borderTop= "20px solid transparent"
  borderbottom= "20px solid transparent"
  />;

  export const Button3 = () =>  
  <Button 
  color={'#241011'}
  width="7rem"
  height="7rem"
  borderLeft= {'20px solid blue'}
  borderTop= {'10px solid transparent'}
  borderbottom= {'10px solid transparent'}
  direction={'LEFT'}
  />;

export default ButtonStory;
