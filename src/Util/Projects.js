import resumePDF from '../assets/Michael_King-Stockton_Resume.pdf';
import resumeWord from '../assets/MichaelKS_Resume_2019.docx';

export const portfolioInfo = 
{ 
  projects: [
    {
      link: 'https://github.com/KStockton/Vue.js-Synonyms-v1',
      name: 'Synonyms',
      description: 'A Thesaurus in Vue'
    }, 
    {
      link: 'https://github.com/KStockton/Trapper-Keeper',
      name: 'Trapper Keeper',
      description: 'Create notes and list with Trapper Keeper'
    }, 
    {
      link: 'https://github.com/KStockton/Newswired',
      name: 'News Wired',
      description: 'Keep up with the latest news'
    }, 
    {
      link: 'https://github.com/KStockton/pocket_ramiro_react',
      name: 'Pocket Ramiro',
      description: 'Track issues and tickets for Facility Equipment'
    }, 
    {
      link: 'https://github.com/KStockton/Movie-Tracker',
      name: 'Movie Tracker',
      description: 'View and save the latest movies'
    }, 
    {
      link: 'https://github.com/KStockton/climb-on',
      name: 'Climb On',
      description: 'View the closest climibing trails'
    }, 
    {
      link: 'https://github.com/KStockton/Build-Your-Own-Backend',
      name: 'Backend NBA Draft 2019',
      description: 'NBA Draft Players and Teams in Express'
    }, 
    {
      link: 'https://github.com/KStockton/swapi-box',
      name: 'Swapi Box',
      description: 'Star Wars Characters, Vehicles and Planets'
    }],
  activities: [
    {
      classname: 'fas fa-basketball-ball'
    },
    {
      classname: 'fas fa-hands-helping'
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
    }],
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
      link: `${resumeWord}`,
      classname: 'far fa-file-word'
    }
  ]
};



