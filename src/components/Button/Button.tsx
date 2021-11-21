/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

//creacion de tipo
type IDirection = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
interface IProps {
  color: string;
  width?: string;
  height?: string;
  direction?: IDirection;
}
//se debe trabajar con la interface llamarla a una funcion

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
  width = '10rem',
  height = '10rem',
  direction = 'RIGHT',
}) => (
  <div
    sx={{
      backgroundColor: color,
      hover: '#585858',
      width: width,
      height: height,
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
    <Icon icon={faPlay} size="4x" />
  </div>
);

export default Button;