/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
interface IProps {
  img: string,
  description: string,
}

export const BeyondCard:React.FC<IProps> = ({ img, description}) => (
  <div sx={{ 
    color: 'textSecondary', 
    margin: '1rem', 
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'stretch',
    width: ['100%', '45%', '33%'],
    }}>
    <img 
      src={img} 
      alt={description}
      sx={{ borderRadius: '10px 10px 0px 0px', width: '100%' }}
      />
    <p
      sx={{
        position: 'relative',
        margin: '0',
        padding: '0.5rem',
        fontSize: '0.5rem',
        textAlign: 'center',
        background:'rgba(70, 57, 64, 1)',
        borderRadius: '0px 0px 10px 10px',
        width: '100%'
      }}
    >{description}</p>
  </div>
);