/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

interface IProps {
  company: string,
  position: string,
  date: string,
  description: string
}

export const ExperienceCard: React.FC<IProps> = ({
  company,
  position,
  date,
  description
}) => (
  <div sx={{ 
    flexBasis: ['100%','100%','45%'],
    padding: '1rem',
    border: '2px solid black',
    borderColor: 'tertiary',
    borderRadius: '20px',
    boxShadow: '0 4px 8px 0 #463940',
    margin: '1rem',
    lineHeight: '1',
    '&:hover': {
      backgroundColor: 'tertiary',
      color: 'textSecondary'
    },
    }}>
    <h4 sx={{  fontWeight: 'bold', marginBottom: '0.2rem' }}>{company}</h4>
    <h5 sx={{ marginBottom: '0.2rem'}}>{position}</h5>
    <h6 sx={{ marginBottom: '0.2rem'}}>{date}</h6>
    <p sx={{ fontSize: '0.rem'}}>{description}</p>
  </div>
)