import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Taylor Rae Talks', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Spiritual Hero', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Taylor Rae',
  subtitle: 'Spiritual Awareness Coach',
  cta: 'Learn More',
  cta2: 'Blog',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '/blog', // if no link, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '-Dawn D',
    info: "Taylor's exuberance rallies me forward towards goals that improve my life in ways I could not have earlier imagined. I feel seen and heard by her when we communicate directly. I also gain from her online presence where I see her demonstrating the spiritual tools that she shares so freely with others.",
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '-Leena P.',
    info: "Girl! Your tarot readings are always so on point and always lead me exactly where I need to be! Your vibes are always the best and I'll be coming to you for all my future readings. I love you so much!",
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '-Maggie M.',
    info: "I haven't been on social media in over a year, however this deserves to be posted and I wish I could tell the world about Taylor Rae Talks! My day is made and I feel a vibe that I haven't felt in my life. I have never gotten my cards read and honestly didn't think of ever getting them read. I'm so happy, grateful, blessed, words can't even describe my mind is blown. Honestly ugh I can't even explain. Anyways all I know is that this woman is amazing love her not only for reading my cards, but as a person and a friend.",
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];
// BLOGS DATA
export const blogsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'How Could You Ever',
    info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Mondays am I right?',
    info: 'dolor voluptatum consequatur blanditiis',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Think for yourself',
    info: 'numquam voluptate architecto itaque molestiae.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/taylorraetalks_/',
    },
    {
      id: nanoid(),
      name: 'tiktok',
      url: 'https://www.tiktok.com/@taylorrae444',
    },
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:taylorraetalks@gmail.com',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
