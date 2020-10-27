import { get } from 'lodash';

export const DEFAULT_SCHOOL = {
  object: 'School',
  id: 'ND',
  name: 'Demo School',
  email: 'info@schoollog.in',
  address: 'Kandivali',
  city: 'Maharashtra',
  sms_credits: null,
  state: { data: { name: 'Maharashtra' } },
  pin: '400067',
  contact1: '9896617066',
  contact2: '7206942590',
  setting: null,
  latitude: '26.8536913',
  longitude: '75.7198969',
  theme: 'primary',
  features: null,
  url: ['sgr.schoollog.in'],
  departments: { data: [] },

  logo: {
    image: '/images/download.png',
    id: 1
  },
  logo_small: {
    image: '/favicons/favicon-16x16.png',
    id: null
  },
  created_at: {
    date: '2018-01-05 21:05:09.000000',
    timezone_type: 3,
    timezone: 'ASIA/KOLKATA'
  },
  updated_at: {
    date: '2018-01-05 21:05:09.000000',
    timezone_type: 3,
    timezone: 'ASIA/KOLKATA'
  },
  website: {
    data: {
      object: 'Website',
      id: 'ND',
      announcements: [
        { id: '1', text: '<p>School wishes you HAPPY NEW YEAR</p>' }
      ],
      facilities: ['1', '2', '3', '4', '5', '6', '12', '15'],
      useful_links: '',
      useful_link_posts: [
        { id: 'post-1', image: '', link: 'www.fb.com', title: 'fb Page' }
      ],
      achievements: [],
      facilitiesImages: [{ image: null, id: '1' }],
      fee_details: '',
      faqs: [],
      documents: [
        /* {
          id: 'document-2',
          name: 'doc1',
          description: 'dd1',
          files: [
            {
              id: 1520,
              file:
                'http://schoollog.test/storage/1520/E3TpxJt8r6q1hoCnSV3F5hEUiRN4amnIFnjS9537.png',
            },
            {
              id: 1521,
              file:
                'http://schoollog.test/storage/1520/E3TpxJt8r6q1hoCnSV3F5hEUiRN4amnIFnjS9537.png',
            },
          ],
        }, */
      ],
      mission:
        'Creating environment where the desire to seek excellence becomes the driving force in the lives of students and teachers and is supported by an ethos where learning is regarded as a joyous process by one and all. Fostering a climate which will produce citizens for whom correct moral values such as honesty, integrity, respect and concern for others become the very foundation of their lives.',
      school_intro:
        'Our school aims at discovering new dimensions of teaching and reaching new horizon of excellence in the field of education. It is teaching discipline, cultural activities like music, drama, and computer, sports as well as the morals of human life. We want that our children Should be perfect in all spheres of life: physical, mental and social. Thus the students would be able to face the world with more practical knowledge besides bookish knowledge. ',
      values: null,
      about_school:
        'Our school aims at discovering new dimensions of teaching and reaching new horizon of excellence in the field of education. It is teaching discipline, cultural activities like music, drama, and computer, sports as well as the morals of human life. We want that our children Should be perfect in all spheres of life: physical, mental and social. Thus the students would be able to face the world with more practical knowledge besides bookish knowledge.',
      vision: null,

      gallery: [
        {
          id: 'gallery-1',
          name: 'g1',
          description: 'd1',
          images: []
        },
        {
          id: 'gallery-2',
          name: 'g2',
          description: 'd2',
          images: [
            {
              id: 19,
              image: '/images/pexels3.jpeg'
            },
            {
              id: 20,
              image: '/images/5_14_s.jpg'
            },
            {
              id: 21,
              image: '/images/pexels2.jpeg'
            }
          ]
        },
        {
          id: 'gallery-3',
          name: 'g3',
          description: 'd2',
          images: [
            {
              id: 19,
              image: '/images/pexels2.jpeg'
            },
            {
              id: 21,
              image: '/images/pexels5.jpeg'
            }
          ]
        }
      ],

      calender: [
        {
          id: 'calender-1',
          title: 'evetn2',
          startDate: '2018-01-23',
          endDate: '2018-01-23'
        }
      ],

      affiliation: {
        text: 'Affilitaion text comes here.',
        images: [
          { id: '1', image: '/images/iayp3.jpg' },
          { id: '2', image: '/images/cbse.jpg' }
        ]
      },

      curriculum:
        "Our School is a formative learning center offering a curriculum modeled on the 'ELECTRIC approach' for the holistic development of every child and the first of its kind, an all inclusive infrastructure that is responsible for individual child's needs as well as parent's concerns. The curriculum with 'ELECTRIC approach' has evolved from pro-active method, multiple intelligence, playway, montessori method and theme based model. ",

      addmission_rules:
        'Registration for admission to classes commencing in the next academic session is announced through an advertisement released in the month of January. Registration of the students desirous of seeking admission for the academic session starting from 1st April of a calendar year will be made afterwards. Admission will be granted strictly on the basis of Merit and Interview. ',

      eligibility_criteria:
        'Registration for admission to classes commencing in the next academic session is announced through an advertisement released in the month of January. Registration of the students desirous of seeking admission for the academic session starting from 1st April of a calendar year will be made afterwards. Admission will be granted strictly on the basis of Merit and Interview. ',

      timetable: 'Time Table comes here',

      youtube_channel_link: '',
      facebook_link: '',
      twitter_link: '',
      linkedin_link: '',

      youtube:
        'https://www.youtube.com/embed/videoseries?list=PLle6TjNsXYtQcxUtAzFWPQvukLlVsHvmh',
      persons: [
        {
          name: 'founder',
          message: 'Founder here',
          designation: 'founder',
          image: '/images/img_avatar2.png',
          id: null
        },
        {
          name: 'director',
          message: 'Director here',
          designation: 'director',
          image: '/images/img_avatar2.png',
          id: null
        }
      ],
      carousel: [
        {
          image: '/images/3_14_s.jpg',
          id: 7
        },
        {
          image: '/images/pexels5.jpeg',
          id: 8
        },
        {
          image: '/images/3_20_s.jpg',
          id: 8
        }
      ],
      created_at: {
        date: '2018-01-06 10:41:03.000000',
        timezone_type: 3,
        timezone: 'ASIA/KOLKATA'
      },
      updated_at: {
        date: '2018-01-06 13:40:22.000000',
        timezone_type: 3,
        timezone: 'ASIA/KOLKATA'
      }
    }
  }
};

export const keys = {
  ID: 'id',
  NAME: 'name',
  EMAIL: 'email',
  ADDRESS: 'address',
  CITY: 'city',
  STATE: 'state.data.name',
  PINCODE: 'pin',
  PRIMARY_CONTACT: 'contact1',
  SECONDARY_CONTACT: 'contact2',
  THEME: 'theme',
  FEATURES: 'features',
  DEPARTMENTS: 'departments.data',

  MAP_LATITUDE: 'latitude',
  MAP_LONGITUDE: 'longitude',

  LOGO: 'logo.image',
  LOGO_SMALL: 'logo_small.image',

  ANNOUNCEMENTS: 'website.data.announcements',

  FACILITIES: 'website.data.facilities',
  FACILITIES_IMAGES: 'website.data.facilitiesImages',

  INTRO: 'website.data.school_intro',

  ABOUT_SCHOOL: 'website.data.about_school',

  TIMETABLE: 'website.data.timetable',

  AFFILIATION: 'website.data.affiliation.text',
  AFFILIATION_IMAGES: 'website.data.affiliation.images',

  YOUTUBE_LINK: 'website.data.youtube_channel_link',
  FACEBOOK_LINK: 'website.data.facebook_link',
  TWITTER_LINK: 'website.data.twitter_link',
  LINKEDIN_LINK: 'website.data.linkedin_link',

  MISSION: 'website.data.mission',
  VALUES: 'website.data.values',
  VISION: 'website.data.vision',

  CURRICULUM: 'website.data.curriculum',
  ADMISSION_RULES: 'website.data.addmission_rules',
  ELIGIBILITY_CRITERIA: 'website.data.eligibility_criteria',

  YOUTUBE: 'website.data.youtube',

  PERSONS: 'website.data.persons',

  CAROUSEL: 'website.data.carousel',

  GALLERY: 'website.data.gallery',

  CALENDAR: 'website.data.calender',

  DOCUMENTS: 'website.data.documents',

  FAQS: 'website.data.faqs',

  USEFUL_LINKS: 'website.data.useful_links',
  USEFUL_LINK_POSTS: 'website.data.useful_link_posts',
  ACHIEVEMENTS: 'website.data.achievements',
  FEES_DETAILS: 'website.data.fee_details'
};

export default function getData(school, key) {
  return getProperData(get(school, key, ''), key);
}

function getProperData(value, key) {
  return value || get(DEFAULT_SCHOOL, key);
}

export function convertHTMLString(value) {
  return { __html: value };
}
