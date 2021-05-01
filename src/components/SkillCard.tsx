/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/free-regular-svg-icons";

interface IProps {
  type: 'main' | 'secondary',
  title: string,
  icon: IconName,
  skills: string[],
  isLast?: boolean
}
export const SkillCard: React.FC<IProps> = ({ 
  type,
  title,
  icon,
  skills,
  isLast=false,
}) => (
  <div sx={{
    backgroundColor: type === 'main' ? "secondary" : "background",
    color: type === 'main' ? 'textSecondary' : 'primary',
    borderTop: "3px solid #0B172A",
    borderBottom: [isLast && "3px solid #0B172A", isLast && "3px solid #0B172A", "3px solid #0B172A"],
    padding: "1rem"
  }}>
    <h4>{title}</h4>
    {/* <img src="img/front-icon.png" alt={title} /> */}
    <FontAwesomeIcon icon={['fab', icon ]} size="2x"/>
    <p sx={{ fontSize: "0.625rem", textAlign: "center", fontStyle: "italic" }}>
      {skills.reduce((statement, skill) => `${statement}, ${skill}`)}
    </p>
  </div>
);