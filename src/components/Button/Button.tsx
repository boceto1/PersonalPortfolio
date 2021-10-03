/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';

interface IProps {
  color: string;
  width?: string;
  height?: string;

  //rotate: string;
}

const Button: React.FC<IProps> = ({ 
  color,
  width = '10rem',
  height = '10rem',
  //rotate, 
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
        transform: 'rotate(90deg)'
      }}
    />
  
    
  </div>
  
);

export default Button;
