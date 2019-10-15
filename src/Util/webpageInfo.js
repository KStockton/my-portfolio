import resumePDF from '../assets/MichaelKS_Resume_2019.pdf';

export const webpageInfo = 
{ 
  projects: [
    {
      gitHubLink: 'https://github.com/KStockton/BE-Palette-Picker',
      liveLink: 'https://backendpalettelit.herokuapp.com/',
      name: 'Palette Picker',
      description: 'Backend Knex Express Travis CI'
    }, 
    {
      gitHubLink: 'https://github.com/KStockton/Vue.js-Synonyms-v1',
      liveLink: 'http://synonyms-thesaurus.s3-website-us-east-1.amazonaws.com',
      name: 'Synonyms',
      description: 'A Thesaurus in Vue'
    }, 
    {
      gitHubLink: 'https://github.com/KStockton/Trapper-Keeper',
      liveLink: 'https://trapper-keeper-front.herokuapp.com/',
      name: 'Trapper Keeper',
      description: 'Create notes and list with Trapper Keeper'
    }, 
    {
      gitHubLink: 'https://github.com/KStockton/Newswired',
      liveLink: 'https://news-wired.herokuapp.com/',
      name: 'News Wired',
      description: 'Keep up with the latest news'
    }, 
    {
      gitHubLink: 'https://github.com/KStockton/pocket_ramiro_react',
      liveLink: null,
      name: 'Pocket Ramiro',
      description: 'Track issues and tickets for Facility Equipment'
    }, 
    {
      gitHubLink: 'https://github.com/KStockton/Movie-Tracker',
      liveLink: 'https://movie-tracker-fe.herokuapp.com',
      name: 'Movie Tracker',
      description: 'View and save the latest movies'
    }, 
    {
      gitHubLink: 'https://github.com/KStockton/climb-on',
      liveLink: 'https://kstockton.github.io/climb-on/',
      name: 'Climb On',
      description: 'View the closest climibing trails'
    }, 
    {
      gitHubLink: 'https://github.com/KStockton/Build-Your-Own-Backend',
      liveLink: 'https://nbadraft2019.herokuapp.com/',
      name: 'Backend NBA Draft 2019',
      description: 'NBA Draft Players and Teams in Express'
    }, 
    {
      gitHubLink: 'https://github.com/KStockton/swapi-box',
      liveLink: 'https://kstockton.github.io/swapi-box/',
      name: 'Swapi Box',
      description: 'Star Wars Characters, Vehicles and Planets'
    }
  ],
  activities: [
    {
      classname: 'fas fa-basketball-ball'
    },
    {
      classname: 'far fa-handshake'
    },
    {
      classname: 'fas fa-book'
    },
    {
      classname: 'fas fa-hiking'
    },
    {
      classname: 'fas fa-plane'
    },
    {
      classname: 'fas fa-football-ball'
    },
    {
      classname: 'fas fa-puzzle-piece'
    },
    {
      classname: 'fas fa-dog'
    },
  ],
  resourceLinks: [
    {
      link: 'https://github.com/KStockton',
      classname: 'fab fa-github'
    }, 
    {
      link: 'https://www.linkedin.com/in/michaelkingstockton/',
      classname: 'fab fa-linkedin-in'
    },
    {
      link: `${resumePDF}`,
      classname: 'far fa-file-pdf'
    },
    {
      link: 'https://github.com/KStockton/my-portfolio/',
      classname: 'fas fa-code'
    },
  ]
};



