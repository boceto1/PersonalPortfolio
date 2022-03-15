/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
//import Image from 'next/image';
import flecha from '../../../img/flecha.svg';

//creacion de tipo
type IDirection = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Isize = '2x' | '4x' | '6x' | '8x' | '10x';
interface IProps {
  color: string;
  size_b?: Isize;
  direction?: IDirection;
}
const getIsize = (size_b: Isize) => {
  switch (size_b) {
    case '2x':
      return '200';
    case '4x':
      return '400';
    case '6x':
      return '600';
    case '8x':
      return '800';
    case '10x':
      return '1000';
    default:
      throw new Error('No valid size');
  }
};

const getDirection = (direction: IDirection) => {
  switch (direction) {
    case 'UP':
      return '180';
    case 'DOWN':
      return '0';
    case 'LEFT':
      return '90';
    case 'RIGHT':
      return '270';
    default:
      throw new Error('No valid direction');
  }
};

const Button: React.FC<IProps> = ({
  size_b = '2x',
  direction = 'RIGHT',
}) => (
  
  <div>
    <img
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        transform: `rotate(${getDirection(direction)}deg)`,
        size: `${getIsize(size_b)}px`,
        cursor: 'pointer',
        "&:hover": {
          "backgroundColor": "#8A7E7B"},
        }}
      src={flecha}
    />
  </div>
);

export default Button;