/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';

interface IProps {
  color: string;
}

const Button: React.FC<IProps> = ({ color }) => (
  <div
    sx={{
      backgroundColor: '#211111',
      width: 100,
      height: 100,
      borderRadius: 10,
      color: 'white',
    }}
  >
    Hello World
  </div>
);

export default Button;
