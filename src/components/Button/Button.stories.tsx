import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCaretSquareUp , faCaretSquareDown , faCaretSquareLeft , faCaretSquareRight } from '@fortawesome/free-solid-svg-icons'

import Button from './Button';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import { Spinner } from '@theme-ui/components';

const ButtonStory = {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    /*color: {
      control: { type: 'string' },
      defaultValue: 'red',
    },
    width: {
      control: { type: 'string' },
      defaultValue: '100px',
    },
    height: {
      control: { type: 'string' },
      defaultValue: '100px',
    },
    direction: {
      control: { type: 'string' },
      defaultValue: 'RIGHT',
    },*/
  },
};

// 1. El tamaño de la flecha debe cambiar automaticamente con los valores del width y de height.
// 4. Implementar propiedad size: (1x, 2x, 3x, 4x)
// 2. Implementar libreria de Iconos (FontAwesome) https://fontawesome.com/
// 3. Usar imagenes svc

const Template = args => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  color: '#241011',
};

export const DefaultButton1 = Template.bind({});
DefaultButton1.args = {
  color: '#241011',
  width : '150px',
  height : '150px',
  direction : 'RIGHT',
};
export const element4 = () => ( 
  <FontAwesomeIcon icon={ faCaretSquareRight } color={'#241011'} size="6x"/>
);
export const DefaultButton5 = Template.bind({});
DefaultButton5.args = {
  color: '#241011',
  width : '25%',
  height : '25%',
  direction : 'RIGHT',
};

export default ButtonStory;
