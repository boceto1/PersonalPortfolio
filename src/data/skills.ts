import { IconName } from '@fortawesome/free-regular-svg-icons';

interface ISkill {
  title: string;
  icon: IconName;
  skills: string[];
}

export const skills = [
  {
    title: 'Frontend',
    icon: 'react',
    skills: [
      'HTML',
      'CSS',
      'Javascript',
      'React (Classic and Hooks)',
      'Redux/Sagas',
      'Boostrap 4',
      'Tailwind',
      'NextJS',
      'Styled Components',
      'Theme UI',
      'Figma',
      'Responsive Desing',
    ],
  },
  {
    title: 'Backend',
    icon: 'node-js',
    skills: [
      'Typescript',
      'C#',
      'Java',
      'PHP',
      'PostgreSQL',
      'MariaDB/MySQL',
      'MongoDB',
      'Node JS',
      'Express',
      'KoaJS',
      'NestJS',
      'Laravel',
      'Jest/TDD-BDD',
    ],
  },
  {
    title: 'Mobile',
    icon: 'android',
    skills: ['React Native', 'Android', 'Java for Android'],
  },
] as ISkill[];
