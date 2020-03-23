import darkMagician from '../images/dark-magician.jpg'; //imported image
import slifer from '../images/slifer.jpg'; //imported image
import swordsOfRevealingLight from '../images/swords-of-revealing-light.jpg'; //imported image
import mirrorForce from '../images/mirror-force.jpg'; //imported image

//below we are exporting the data that is used for Card.js in the form of an array containing three objects each with their own object such as category:MONSTER CARD
export default [
    { category:'MONSTER CARD', description:'The basic monster card with a given attack and defense, but no effect', image: darkMagician , title: 'monsters'},
    // { category:'EFFECT MONSTER CARD', description:'Similar to the monster card except there is an effect in addition to their basic stats', image: slifer },
    { category:'SPELL CARD', description:'Different from monster cards, these cards only have effects which can be used at almost any moment affecting duels in many ways', image: swordsOfRevealingLight, title: 'spells' },
    { category:'TRAP', description: 'Similar to the spell cards, however specific conditions must be meant in order for these cards to be trigered which can very well be the key to winning a duel', image: mirrorForce, title: 'traps'},
];

// https://db.ygoprodeck.com/api/v5/cardinfo.php