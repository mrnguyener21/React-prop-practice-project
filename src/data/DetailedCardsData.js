import blackLusterRitual from '../images/blackLusterRitual.png';
import blackLusterSoldier from '../images/blackLusterSoldier.jpg';
import callOfTheHaunted from '../images/callOfTheHaunted.jpg';
import darkMagician from '../images/dark-magician.jpg';
import deckLockDown from '../images/deckLockDown.jpg';
import flameWingMan from '../images/flameWingMan.jpg';
import mirrorForce from '../images/mirror-force.jpg';
import mysticalSpaceTyphoon from '../images/mysticalSpaceTyphoon.jpg';
import sevenTools from '../images/sevenTools.jpg';
import skyscraper from '../images/skyscraper.jpg';
import slifer from '../images/slifer.jpg';
import stardustDragon from '../images/stardustDragon.jpg';
import swordOfRevealingLight from '../images/swords-of-revealing-light.jpg';
import unitedWeStand from '../images/unitedWeStand.jpg';
import xyz from '../images/xyz.jpg';

export default {
    monsters: [
        { title: 'Normal', description: 'The standard monster card with an atk and def',image:darkMagician},
        { title: 'Effect', description: 'A monster card that has an effect that comes with it',image:slifer},
        { title: 'Fusion', description: 'A monster summoned(usually with polymerization) by meeting the requirements stated on the card',image:flameWingMan},
        { title: 'Ritual', description: 'A monster card summoned by their appropriate ritual spell card',image:blackLusterSoldier},
        { title: 'Synchro', description: 'A monster card summoned by using a tuner monster and any amount of monsters to match the amount of stars for the synchro monster',image:stardustDragon},    
        {title: 'XYZ', description: 'A monster card summoned by tributing two monsters with the same star amount as the XYZ monster', image:xyz},
    ],
    spells: [
        { title: 'Normal', description: 'A card with an effect that you can use during your turn',image:swordOfRevealingLight},
        { title: 'Quick-Play', description: 'Similar to nomral spell card, but can also be used during your opponent\'s turn if it is set on the field',image:mysticalSpaceTyphoon},
        { title: 'Field', description: 'A spell card that can change the entire state of play for its controller or both player\'s side of the field',image:skyscraper},
        { title: 'Equip', description: 'A spell card that equips to a monster card to give it an extra boost whether it be atk, def or an effect boost',image:unitedWeStand},
        { title: 'Continuous', description: 'A spell card that stays active the entire time unless destroyed from the field',image:deckLockDown},
        { title: 'Ritual', description: 'A spell that is used to summon a ritual monster',image:blackLusterRitual},
    ],
    traps: [
        { title: 'Normal', description: 'A card that cannot be used unless set first, can be used during your opponent\'s turn',image:mirrorForce},
        { title: 'Counter', description: 'A trap card that can be used against your opponent when they attack or activate an effect',image:sevenTools},
        { title: 'Continuous', description: 'A trap card that stays active the entire time unless destroyed from the field',image:callOfTheHaunted},
    ],
}

