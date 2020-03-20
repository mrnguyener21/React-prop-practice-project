import darkMagician from './images/dark-magician.jpg';
import slifer from './images/slifer.jpg';
import swordsOfRevealingLight from './images/swords-of-revealing-light.jpg';
import mirrorForce from './images/mirror-force.jpg';
const cards = [
    { category:'MONSTER CARD', description:'The basic monster card with a given attack and defense, but no effect', image: darkMagician },
    { category:'EFFECT MONSTER CARD', description:'Similar to the monster card except there is an effect in addition to their basic stats', image: slifer },
    { category:'SPELL CARD', description:'Different from monster cards, these cards only have effects which can be used at almost any moment affecting duels in many ways', image: swordsOfRevealingLight },
    { category:'TRAP', description: 'Similar to the spell cards, however specific conditions must be meant in order for these cards to be trigered which can very well be the key to winning a duel', image: mirrorForce},
];

export default cards;

// https://db.ygoprodeck.com/api/v5/cardinfo.php