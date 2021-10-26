import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Taylor Rae Talks', // e.g: 'Name'
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
  img: 'DSC_0125.jpg',
  paragraphOne:
    '2017 was a huge year for me. I graduated with my master’s degree in Early Childhood Education and my teaching license. I had a dream home, birthed my daughter, and then her father tried to kill us. I lost the family I was building, my home, my dogs, and essentially the place that I grew up. I had to leave my home in Colorado to move in with my mother - in Texas.',
  paragraphTwo:
    ' I lost proximity to my family and my friends, my job, my arranged childcare plans, I was starting at ground zero, but with a newborn. I felt like I was robbed of the chance to grieve properly, because a mother isn’t allowed to not show up for her child. I felt isolated. I also grappled with the shame of ever becoming attached to a narcissist. Then more shame for missing him. After years of rebuilding I decided to move to Arizona. I wanted to take control back and officially start my daughter and my life over. I had a new start and I found themostsupportive and uplifting partner. This sense of security allowed me to truly reflect on my values. ',
  paragraphThree:
    'The woman that I once aspired to be died in 2017. The past few years I have been able to look at who I am. On my own. Just me. I have found that the woman I am, is a woman who lovesc onnecting with others who have had similar experiences. The woman that I am is a cheerleader for people who need help remembering their worth. My biggest joy in life is assisting others to recover their highest self. Now I have a business doing just that. I get to work with motivated and inspired individuals that are on the path of self discovery. I know what it takes to help you transform your life, because I had to do it too. I want to help you get back in touch with your intuition, rewire your old programming, and lay a foundation for you to build your new life on. Together, we will conquer limiting beliefs, discover your true calling, and how you can be closer to your highest self.',
  // resume: 'https://medium.com/', // if no link, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'DSC_0028.jpg',
    title: '-Dawn D',
    info: "Taylor's exuberance rallies me forward towards goals that improve my life in ways I could not have earlier imagined. I feel seen and heard by her when we communicate directly. I also gain from her online presence where I see her demonstrating the spiritual tools that she shares so freely with others.",
    info2: '',
    url: '',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'DSC_0199.jpg',
    title: '-Leena P.',
    info: "Girl! Your tarot readings are always so on point and always lead me exactly where I need to be! Your vibes are always the best and I'll be coming to you for all my future readings. I love you so much!",
    info2: '',
    url: '',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'DSC_0237.jpg',
    title: '-Maggie M.',
    info: "I haven't been on social media in over a year, however this deserves to be posted and I wish I could tell the world about Taylor Rae Talks! My day is made and I feel a vibe that I haven't felt in my life. I have never gotten my cards read and honestly didn't think of ever getting them read. I'm so happy, grateful, blessed, words can't even describe my mind is blown. Honestly ugh I can't even explain. Anyways all I know is that this woman is amazing love her not only for reading my cards, but as a person and a friend.",
    info2: '',
    url: '',
    repo: '',
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
    repo: '',
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
      name: 'spotify',
      url: 'https://open.spotify.com/show/40PqdWSXfU38BLmxXnV6rX',
    },
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
