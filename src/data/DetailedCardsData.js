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
        { 
            title: 'NORMAL', 
            description: 'Normal Monsters (Japanese: 通つう常じょうモンスター Tsūjō Monsutā), colored yellow, are Main Deck monsters with no monster effects. In the card description box (which contains the effect on Effect Monsters), Normal Monsters include a brief description of its lore. Starting from Starter Deck: Link Strike onwards, all Normal Monsters also include the designation "/Normal" on their Type/Ability lines.',
            image:darkMagician
        },
        {
            title: 'EFFECT', 
            description: 'Effect Monsters (Japanese: 効こう果かモンスター Kōka Monsutā) are Monster Cards with an orange color border, and were first introduced in the Vol.3 booster pack. Effect Monsters necessarily have at least one card effect or condition.',
            image:slifer},
        { 
            title: 'FUSION', 
            description: 'Fusion Monsters (Japanese: 融ゆう合ごうモンスター Yūgō Monsutā) are a type of Monster Card. The color of their card frame is violet. These cards are placed in the Extra Deck.To be properly Special Summoned, Fusion Monsters must first be Fusion Summoned (unless otherwise specified). If they leave the Extra Deck without being properly Special Summoned, they cannot be Special Summoned while they are banished or in the Graveyard.',
            image:flameWingMan},
        {
            title: 'RITUAL', 
            description: 'Ritual Monsters (Japanese: 儀ぎ式しきモンスター Gishiki Monsutā), colored blue, are monsters that must be Special Summoned with a Ritual Spell Card.Ritual Monsters are Special Summon-only monsters. This means that they cannot be Normal Summoned or Tribute Summoned from the hand and cannot be Special Summoned from the Graveyard or while banished unless they were first Ritual Summoned. ',
            image:blackLusterSoldier},
        { 
            title: 'SYNCHRO', 
            description: 'Synchro Monsters (Japanese: シンクロモンスター Shinkuromonsutā; usually abbreviated Ｓシンクロモンスター since Duelist Alliance) are a type of Monster Card, first released in Starter Deck 2008. The color of their card frame is white. These cards are placed in the Extra Deck.To be properly Special Summoned, Synchro Monsters must first be Synchro Summoned. If they leave the Extra Deck without being Synchro Summoned, they cannot be Special Summoned while they are banished or in the Graveyard.',
            image:stardustDragon},    
        {
            title: 'XYZ', 
            description: 'Xyz Monsters (pronounced ik-seez[1]) (Japanese: エクシーズモンスター Ekushīzu Monsutā; usually abbreviated Ｘエクシーズモンスター since Duelist Alliance) is a type of Monster Card that is colored black. They are stored in the Extra Deck.Like other Extra Deck monsters, Xyz Monsters cannot exist in the hand or Main Deck (even with card effects). If an Xyz Monster would be moved to the hand or Main Deck, it is returned to the Extra Deck instead. If a card like "Transmigration Break" or "Degenerate Circuit" is applying, this will override the Xyz Monster\'s ability to return to the Extra Deck.', 
            image:xyz},
    ],
    spells: [
        { 
            title: 'NORMAL', 
            description: 'Spell Cards (Japanese: 魔ま法ほうカード Mahō Kādo, or 魔法マジックカード Majikku Kādo "Magic Card"),are cards with green-colored borders that have various effects to alter the play of the game. Often, a Spell Card has a single effect to provide a bonus to the user or a weakness to the opponent. Unlike Trap Cards, Spell Cards have the advantage of being able to be played without having to be Set first.',
            image:swordOfRevealingLight},
        { 
            title: 'QUICK-PLAY', 
            description: 'Quick-Play Spell Cards, known as Instant Magic Cards in the OCG (Japanese: 速そっ攻こう魔ま法ほうカード Sokkō Mahō Kādo), are a type of Spell Card that are Spell Speed 2. The turn player can activate Quick-Play Spell Cards from their hand during any Phase of their turn; either player can activate Set Quick-Play Spell cards during any Phase in either player\'s turn, except during the turn they are Set.',
            image:mysticalSpaceTyphoon},
        { 
            title: 'FIELD', 
            description: 'Field Spell Cards, formerly Field Magic Cards (Japanese: フィールド魔ま法ほうカード Fīrudo Mahō Kādo), have the advantage of being able to change the entire state of play for its controller\'s or for both players\' side of the field. They are Spell Speed 1 and are placed on the Field Zone, apart from the Spell & Trap Zones.',
            image:skyscraper},
        { 

            title: 'EQUIP', 
            description: 'An Equip Spell Card, known as an Equip Magic Card (Japanese: 装そう備び魔ま法ほうカード Sōbi Mahō Kādo) in the OCG, is a Spell Card that is a card that is equipped to a face-up monster on the field. Equip Spell Cards are a type of Equip Card; Equip Cards can also be Trap Cards or monsters that are treated as Equip Cards.',
            image:unitedWeStand},
        {
             title: 'CONTINUOUS', description: 'A Continuous Spell Card, known as a Permanent Magic Card (Japanese: 永えい続ぞく魔ま法ほうカード Eizoku Mahō Kādo) in the OCG, is a Spell Speed 1 Spell Card that stays on the field once it is activated. Spell Ruler, previously known as Magic Ruler, was the first TCG Booster Pack that contained Continuous Spell Cards.',
             image:deckLockDown},
        { 
            title: 'RITUAL', description: 'Ritual Spell Cards (Japanese: 儀ぎ式しき魔ま法ほうカード Gishiki Mahō Kādo), known as Ritual Magic Cards in the TCG prior to Magician\'s Force and the OCG, are a type of Spell Card used to Ritual Summon Ritual Monsters.',
            image:blackLusterRitual},
    ],
    traps: [
        { 
            title: 'NORMAL', description: 'Trap Cards (Japanese: 罠トラップカード Torappu Kādo) are cards with purple-colored borders that have various effects. A Trap Card must first be Set and can only be activated after the current turn has finished. After that, it may be activated during either player\'s turn. Trap Cards are Spell Speed 2, with the exception of Counter Trap Cards, which are Spell Speed 3.',
            image:mirrorForce},
        { 
            title: 'COUNTER', description: 'Counter Trap Cards (Japanese: カウンター罠トラップカード Kauntā Torappu Kādo) are a unique Trap card type that are of Spell Speed 3. Being the only cards/effects that are Spell Speed 3, only other Counter Trap Cards can be activated in response to them. Most of them can only be activated to negate or punish the activations of other cards, or Summons of monsters.',
            image:sevenTools},
        { 
            title: 'CONTINUOUS', description: 'Continuous Trap Cards (Japanese: 永えい続ぞく罠トラップカード Eizoku Torappu Kādo) are Trap Cards that stay on the field after activation. The effect(s) of these cards will remain active until the owner cannot maintain the cost or condition(s) indicated on the card (if any) OR it is destroyed.',
            image:callOfTheHaunted},
    ],
}

