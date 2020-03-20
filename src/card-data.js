import darkMagician from './images/dark-magician.jpg';
import slifer from './images/slifer.jpg';
import swordsOfRevealingLight from './images/swords-of-revealing-light.jpg';
import mirrorForce from './images/mirror-force.jpg';
import yugioh from './images/yugioh.png';
const cards = [
    { category:'Normal Card', description:'this is a regular monster card used to attack or defend', image: darkMagician },
    { category:'Effect Card', description:'this is a monster card with an effect unique to it', image: slifer },
    { category:'Magic Card', description:'This is a spell card used to assist you as a player', image: swordsOfRevealingLight },
    { category:'Trap  Card', description: 'This is a trap card used to target your opponent', image: mirrorForce},
];

export default cards;

// https://db.ygoprodeck.com/api/v5/cardinfo.php