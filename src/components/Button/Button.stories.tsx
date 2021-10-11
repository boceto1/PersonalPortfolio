import React from 'react';

import Button from './Button';

const ButtonStory = {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    color: {
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
    },
  },
};

// 1. El tamaño de la flecha debe cambiar automaticamente con los valores del width y de height.
// 4. Implementar propiedad size: (1x, 2x, 3x, 4x)
// 2. Implementar libreria de Iconos (FontAwesome) https://fontawesome.com/
// 3. Usar imagenes svc

const Template = args => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  color: 'blue',
};

// export const Button1 = () => (
//   <Button color={'#241011'} width="500px" height="500px" direction={'UP'} />
// );

// export const Button2 = () => (
//   <Button
//     color="rgba(36, 16, 17, 1.5)"
//     width="10px"
//     height="10px"
//     direction={'DOWN'}
//   />
// );

// export const Button3 = () => (
//   <Button color={'#241011'} width="7rem" height="7rem" direction={'LEFT'} />
// );

export default ButtonStory;
