// Load some values pulled from the JSONResume
// Only certain data exposed for privacy reasons
const basics = process.env.RESUME_BASICS;
const github = process.env.RESUME_GITHUB;
const twitter = process.env.RESUME_TWITTER;
const linkedin = process.env.RESUME_LINKEDIN;
const work = process.env.RESUME_WORK;

// General site configurations
module.exports = {
  siteTitle: `Hi! I'm ${basics?.name?.split(/\s+/)?.[0]}!`,
  siteDescription: 'Software engineer specializing in web-based systems.',
  siteUrl: 'https://jrobitaille.dev',
  keywords: ['recume', 'cv', 'portfolio', 'software engineer', 'react', 'webapp', 'html', 'css', 'js', 'typescript'],
  authorName: basics?.name,
  twitterUsername: twitter?.username?.toLowerCase(),
  githubUsername: github?.username?.toLowerCase(),
  authorAvatar: '/images/avatar.jpg',
  authorDescription: basics?.summary,
  skills: [
    {
      name: 'Multi-platform Webapps',
      level: 90
    },
    {
      name: 'React',
      level: 80
    },
    {
      name: 'Typescript',
      level: 70
    },
    {
      name: 'NodeJs',
      level: 80
    },
    {
      name: 'NestJs',
      level: 60
    },
    {
      name: 'Git',
      level: 80
    }
  ],
  jobs: work,
  contributions: [
    {
      image: '/images/enyojs.jpg',
      description: 'EnyoJS webapp framework',
      url: 'https://github.com/enyojs'
    },
    {
      image: '/images/enactjs.jpg',
      description: 'EnactJS React framework',
      url: 'https://enactjs.com'
    },
    {
      image: '/images/svlsimulator.jpg',
      description: 'SVLSimulator AI platform',
      url: 'https://www.svlsimulator.com'
    }
  ],
  social: {
    twitter: twitter?.url,
    linkedin: linkedin?.url,
    github: github?.url,
    email: basics?.email
  },
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover',
  googleAnalyticsId: undefined, // was 'UA-000000000-1'
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: '#000000cc',
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/'
    },
    {
      label: "Projects I've Worked On",
      url: '/contributions'
    },
    {
      label: 'Resume',
      url: '/resume.pdf'
    }
  ]
};
