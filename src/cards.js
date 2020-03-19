import darkMagician from './images/dark-magician.jpg';
import slifer from './images/slifer.jpg';
import swordsOfRevealingLight from './images/swords-of-revealing-light.jpg';

const cards = [
    { category:'Normal Monster', description:'this is a regular monster card used to attack or defend', image: darkMagician },
    { category:'Effect Card', description:'this is a monster card with an effect unique to it', image: slifer },
    { category:'Magic Card', description:'This is a spell card used to assist you as a player', image: swordsOfRevealingLight },
    { category:'Test', description: 'This is a spell card used to assist you as a player', image: swordsOfRevealingLight },
];

export default cards;

// https://db.ygoprodeck.com/api/v5/cardinfo.php