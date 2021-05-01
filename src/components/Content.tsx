/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { SkillCard } from "./SkillCard";
import { ExperienceCard } from "./ExperienceCard";
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
        />)}</div>
    </div>
  </div>
);
