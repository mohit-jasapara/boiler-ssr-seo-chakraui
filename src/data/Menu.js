import _ from 'lodash';
import paths from './Path';

const groups = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'About' },
  { id: 3, name: 'Gallery' },
  { id: 4, name: 'Academics' },
  { id: 5, name: 'Admission' },
  { id: 6, name: 'Facilities' },
  { id: 7, name: 'TC' },
  { id: 9, name: 'Download' },
  { id: 8, name: 'Contact' },
  { id: 10, name: 'Khelo India' },
  { id: 15, name: 'Useful Links' }
];

const menu = [
  { id: 1, group_id: 1, name: 'Home', path: paths.HOME },
  { id: 2, group_id: 2, name: 'About School', path: paths.ABOUTUS },
  { id: 4, group_id: 2, name: "Director's Desk", path: paths.DIRECTORDESK },
  { id: 5, group_id: 2, name: "Founder's Desk", path: paths.FOUNDERDESK },
  { id: 6, group_id: 2, name: "Principal's Desk", path: paths.PRINCIPALDESK },
  { id: 7, group_id: 2, name: 'Affiliation', path: paths.AFFILIATION },
  { id: 8, group_id: 2, name: 'Vision-Mission', path: paths.VISION_MISSION },
  { id: 3, group_id: 3, name: 'Gallery', path: paths.GALLERY },
  { id: 9, group_id: 4, name: 'Calendar', path: paths.CALENDAR },
  { id: 10, group_id: 4, name: 'Time Table', path: paths.TIMETABLE },
  { id: 11, group_id: 4, name: 'Curriculum', path: paths.CURRICULUM },
  { id: 12, group_id: 4, name: 'School Uniform', path: paths.SCHOOL_UNIFORM },
  { id: 13, group_id: 5, name: 'Admission Rules', path: paths.ADMISSION_RULES },
  { id: 14, group_id: 5, name: 'Fees Details', path: paths.FEE_DETAILS },
  {
    id: 15,
    group_id: 5,
    name: 'Online Admission',
    path: paths.ONLINE_ADMISSION
  },
  {
    id: 16,
    group_id: 5,
    name: 'Eligibility Criteria',
    path: paths.ELIGIBILITY_CRITERIA
  },
  { id: 17, group_id: 6, name: 'Facilities', path: paths.FACILITIES },
  { id: 21, group_id: 7, name: 'TC', path: paths.TC },
  { id: 18, group_id: 8, name: 'Map', path: paths.MAP },
  { id: 19, group_id: 8, name: 'Contact', path: paths.CONTACT },
  { id: 20, group_id: 8, name: 'Career', path: paths.CAREER },
  { id: 22, group_id: 2, name: "Secretary's Desk", path: paths.SECRETARYDESK },
  { id: 23, group_id: 9, name: 'Download', path: paths.DOWNLOAD },
  { id: 24, group_id: 2, name: 'Team', path: paths.TEAM },
  { id: 32, group_id: 2, name: 'Achievements', path: paths.ACHIEVEMENTS },
  { id: 33, group_id: 15, name: 'Useful Links', path: paths.USEFUL_LINKS },
  { id: 34, group_id: '', name: 'Ask Doubt', path: '' },
  { id: 39, group_id: 8, name: 'FAQ', path: paths.FAQ },
  { id: 40, group_id: 15, name: 'Login Erp', path: '' },
  { id: 41, group_id: 2, name: "Manager's Desk", path: paths.MANAGERDESK },
  { id: 43, group_id: 2, name: 'Birthdays', path: paths.BIRTHDAYS },
  { id: 44, group_id: 10, name: 'Khelo India', path: paths.KHELO_INDIA }
];

export const getMenu = arr =>
  _.chain(menu)
    .intersectionWith(arr, (o1, o2) => o1.id === o2)
    .groupBy('group_id')
    .toPairs()
    .map(it =>
      _.zipObject(
        ['menu', 'children'],
        [_.find(groups, g => g.id === it[0]), it[1]]
      )
    )
    .value();

export const isPersonVisible = (person, feature) =>
  (person.designation === 'director' && feature === 4) ||
  (person.designation === 'founder' && feature === 5) ||
  (person.designation === 'principal' && feature === 6) ||
  (person.designation === 'secretary' && feature === 22) ||
  (person.designation === 'manager' && feature === 41);
