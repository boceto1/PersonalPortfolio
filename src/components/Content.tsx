/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { SkillCard } from "./SkillCard";
import { ExperienceCard } from "./ExperienceCard";
import { BeyondCarousel } from "./BeyondCarousel";
import { skills, experience } from "../data/";

export const Content: React.FC = () => (
  <div>
    <div
      sx={{
        height: "fit-content",
        padding: "1rem",
        display: "grid",
        gridTemplateColumns: ["1fr", "1fr", "25% 75%"],
        justifyContent: ["center", "space-around"],
        borderColor: "primary",
      }}
    >
      <div>
        <h2>About Me</h2>
        <p
          sx={{
            textAlign: ["center", "center", "justify"],
            fontSize: "0.875rem",
          }}
        >
          I’m a passionate person about tech world. I’m sure technology is
          changing the world and I love to be part of this process. I like to
          share my knowledge and create opportunities for others. I believe we
          were born to left our mark in the world.
        </p>
      </div>
      <div sx={{ padding: ["0", "0", "0rem 3rem"] }}>
        <h2>Skills</h2>
        <div
          sx={{
            display: "grid",
            gridTemplateColumns: [
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(3, 1fr)",
            ],
          }}
        >
          {skills.map((skill, index) => (
            <SkillCard
              title={skill.title}
              icon={skill.icon}
              skills={skill.skills}
              type={index % 2 === 0 ? "main" : "secondary"}
              isLast={index + 1 === skills.length}
            />
          ))}
        </div>
        <div></div>
      </div>
    </div>
    <div>
      <h2 sx={{ textAlign: "center", marginBottom: '0rem' }}>Experience</h2>
      <div sx={{ 
        display: 'flex', 
        flexFlow: 'row wrap', 
        justifyContent: 'center',
        marginX: ['1rem', '3rem', '4rem'],
      }}>
      {experience.map((experience) => 
        <ExperienceCard 
          company={experience.company}
          position={experience.position}
          date={experience.date}
          description={experience.description}
        />)}
        </div>
        <a  href="https://drive.google.com/file/d/1QkMvL6IREXQgGtCE4K6dP649pZkwuB0o/view?usp=sharing"
                target="_blank"
                sx={{
                  margin: '1rem',
                  padding: '0.6rem',
                  backgroundColor: 'secondary',
                  border: '1px solid #BC4123',
                  boxShadow: '0 4px 8px 0 #111111',
                  borderRadius: '10px',
                  color: '#fff',
                  fontWeight: 'bold',
                  outline: 'none',
                  display: 'inline-block',
                  textDecoration: 'none',
                  '&:hover': {
                    backgroundColor: 'tertiary',
                    border: '1px solid',
                    borderColor: 'tertiary'
                  }
                }}
            >
                Check my CV
            </a>
    </div>
    <div sx={{ marginBottom: '0', backgroundColor: 'primary', }}>
    <h2 sx={{ 
      textAlign: "center", 
      color: 'textSecondary', 
      marginBottom: '0' 
    }}>
      Beyond the code
    </h2>
    <div>
      <BeyondCarousel />
    </div>
    </div>
  </div>
);
