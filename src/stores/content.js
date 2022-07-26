import {defineStore} from "pinia";
import ContentImage from '@/assets/images/pexels-katarzyna-modrzejewska-1314550.jpg';


export const useContentStore = defineStore({
  id: 'content',
  state: () => ({
    imageIsLeft: true,
    image: ContentImage,
    title: 'Content title',
    text: 'Pee in human\'s bed until he cleans the litter box my water bowl is clean and freshly replenished, so' +
        ' i\'ll drink from the toilet, don\'t nosh on the birds intrigued by the shower hiding behind the couch until ' +
        'lured out by a feathery toy yet hiss at vacuum cleaner pounce on unsuspecting person. Attack like a vicious ' +
        'monster find a way to fit in tiny box so meow meow, i tell my human. Who\'s the baby dismember a mouse and ' +
        'then regurgitate parts of it on the family room floor try to hold own back foot to clean it but foot ' +
        'reflexively kicks you in face, go into a rage and bite own foot, hard plop down in the middle where everybody ' +
        'walks. Peer out window, chatter at birds, lure them to mouth if it fits i sits fooled again thinking the ' +
        'dog likes me, stare at imaginary bug, i am the best attack like a vicious monster ignore the squirrels, ' +
        'you\'ll never catch them anyway. Cuddle no cuddle cuddle love scratch scratch claw at curtains stretch and ' +
        'yawn nibble on tuna ignore human bite human hand catch mouse and gave it as a present and sit and stare ' +
        'yet burrow under covers please let me outside pouty face yay! wait, it\'s cold out please let me inside ' +
        'pouty face oh, thank you rub against mommy\'s leg oh it looks so nice out, please let me outside again the ' +
        'neighbor cat was mean to me please let me back inside. Catching very fast laser pointer wake up wander around ' +
        'the house making large amounts of noise jump on top of your human\'s bed and fall asleep again catching very ' +
        'fast laser pointer and stare at ceiling, yet kitty time. My cat stared at me he was sipping his tea, ' +
        'too pooping rainbow while flying in a toasted bread costume in space destroy couch as revenge. Meow throwup ' +
        'on your pillow, and vommit food and eat it again for sweet beast.',
  }),

  actions: {
    toggleImagePosition(event) {
      console.log(event.target.value);
      this.imageIsLeft = event.target.checked;
    }
  }
})