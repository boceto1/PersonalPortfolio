
interface IExperience {
  company: string,
  position: string,
  date: string,
  description: string
}

export const experience = [
  {
    company: 'Paxico Technologies',
    position: 'Software Developer',
    date: 'February 2021 - Present',
    description: 'Support of the interactive video-streaming platform Maestro with ReactJS, Typescript, Redux Sagas, NodeJs, and KOA'
  },
  {
    company: 'Jobsity',
    position: 'Sofware Developer',
    date: 'February 2020 - February 2021',
    description: 'Development of applications to support recruitment and hiring processes with ReactJS and NestJS ',
  },
  {
    company: 'Stackbuilders',
    position: 'Sofware Developer Intern',
    date: 'February 2019 - August 2019',
    description: "Development of a activity app to manage children's behavior using functional programming with Haskell and React Native",
  },
  {
    company: 'ESPE University',
    position: 'Lead of Software Club',
    date: 'March 2016 - July 2020',
    description: 'Coordination of events, challenges, and university congresses. Monitor of Oracle Academy Program and Promoter of “Tech Mañanas” Meet Up'
  }
] as IExperience[];