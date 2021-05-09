interface IActivities {
  path: string,
  description: string
}

const ACTIVITIES_ROOT_PATH = 'img/activities';

export const activities = [
  {
    path: `${ACTIVITIES_ROOT_PATH}/unesco-original.png`,
    description: 'First Place "Conecta Culturas" Hackatón sponsored by Unesco',
  },
  {
    path: `${ACTIVITIES_ROOT_PATH}/innovasoft3-original.png`,
    description: 'First Place “Innovasoft 3” Challenge - UNACH University',
  },
  {
    path: `${ACTIVITIES_ROOT_PATH}/stackbuilders-original.png`,
    description: 'Winner of Code Challenge sponsored by Stackbuilders',
  },
  {
    path: `${ACTIVITIES_ROOT_PATH}/lead-original.png`,
    description: 'Software Club Leader - University of Army Forces (ESPE)',
  },
  {
    path: `${ACTIVITIES_ROOT_PATH}/techdays-original.png`,
    description: 'Organizer of "Tech Mañanas" MeetUp for 2 years',
  },
  {
    path: `${ACTIVITIES_ROOT_PATH}/coro-original.png`,
    description: 'Member of ESPE Chorus for 3 years as Tenor',
  },
  {
    path: `${ACTIVITIES_ROOT_PATH}/singer-original.png`,
    description: 'Amateur Singer',
  }
] as IActivities[];