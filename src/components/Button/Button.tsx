/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

//creacion de tipo
type IDirection = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Isize = '2x' | '4x' | '6x' | '8x' | '10x';
interface IProps {
  color: string;
  width?: string;
  height?: string;
  direction?: IDirection;
  magn?: Isize;
}
//se debe trabajar con la interface llamarla a una funcion
  var x=0;
  var y=0;
const getSizeop2 = (magn:Isize) => {
  switch (magn) {
    case '2x':
      x= (2*37.5)+"em";
      y= (2*37.5)+"em";
      break;
    case '4x':
        x= (4*37.5)+"em";
        y= (4*37.5)+"em";
        break;
    case '6x':
        x= (6*37.5)+"em";
        y= (6*37.5)+"em";
        break;
    case '8x':
        x= (8*37.5)+"em";
        y= (8*37.5)+"em";
        break;
    case '10x':
        x= (10*37.5)+"em";
        y= (10*37.5)+"em";
        break;
    default:
      throw new Error('No valid size');
    }
}

const getDirection = (direction: IDirection) => {
  switch (direction) {
    case 'UP':
      return '270';
    case 'DOWN':
      return '90';
    case 'LEFT':
      return '180';
    case 'RIGHT':
      return '0';
    default:
      throw new Error('No valid direction');
  }
};

const Button: React.FC<IProps> = ({
  color,
  magn = '4x',
  width = x, //'10rem'
  height = y,
  direction = 'RIGHT',
}) => (
  <div
    sx={{
      backgroundColor: color,
      hover: '#585858',
      width: 'auto',
      height: 'auto',
      borderRadius: 25,
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transform: `rotate(${getDirection(direction)}deg)`,
      cursor: 'pointer',
      "&:hover": {
        "backgroundColor": "#585858"},
    }}
  >
    <Icon icon={faPlay} size = {getSizeop2(magn)} />
  </div>
);

export default Button;