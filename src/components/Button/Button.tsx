/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
//creacion de tipo
type IDirection = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
interface IProps {
  color: string;
  width?: string;
  height?: string;
  direction?: IDirection;
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
  width = '10rem',
  height = '10rem',
  direction = 'RIGHT',
}) => (
  <div
    sx={{
      backgroundColor: color,
      width: width,
      height: height,
      borderRadius: 25,
      color: 'white',
    }}
  >
    <div
      sx={{
        position: 'absolute',
        backgroundColor: color,
        width: 0,
        height: 0,
        borderLeft: '40px solid white',
        borderTop: '20px solid transparent',
        borderBottom: '20px solid transparent',
        borderRadius: '5px',
        /**zIndex: 2,
         **/
        left: '45px',
        top: '45px',
        transform: `rotate(${getDirection(direction)}deg)`,
      }}
    />
  </div>
);

export default Button;
