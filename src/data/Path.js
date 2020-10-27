export default {
  HOME: '/',
  ABOUTUS: '/about',
  GALLERY: '/gallery',
  DESK_PATH: '/desk/:person',
  DIRECTORDESK: '/desk/director',
  FOUNDERDESK: '/desk/founder',
  PRINCIPALDESK: '/desk/principal',
  SECRETARYDESK: '/desk/secretary',
  MANAGERDESK: '/desk/manager',
  AFFILIATION: '/affiliation',
  VISION_MISSION: '/vision-mission',
  CALENDAR: '/calender',
  TIMETABLE: '/timetable',
  CURRICULUM: '/curriculum',
  SCHOOL_UNIFORM: '/school-uniform',
  ADMISSION_RULES: '/admission/rules',
  FEE_DETAILS: '/feedetails',
  ONLINE_ADMISSION: '/admission/online',
  ELIGIBILITY_CRITERIA: '/eligibility-criteria',
  FACILITIES: '/facilities',
  MAP: '/map',
  CONTACT: '/contact',
  CAREER: '/career',
  TC: '/TC',
  DOWNLOAD: '/download',
  USEFUL_LINKS: '/useful-links',
  ACHIEVEMENTS: '/achievements',
  TEAM: '/team',
  FAQ: '/FAQ',
  BIRTHDAYS: '/birthdays',
  KHELO_INDIA: '/khelo-india'
};

export const NewLink = (val, path) => {
  val.push(path);
};
