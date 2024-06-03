import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SingleCupcakeComponent } from './single-cupcake/single-cupcake.component';

@Component({
  selector: 'app-cup-cake-list',
  standalone: true,
  imports: [CommonModule, SingleCupcakeComponent],
  templateUrl: './cup-cake-list.component.html',
  styleUrl: './cup-cake-list.component.scss',
})
export class CupCakeListComponent {
  ratingColor = '#5727b1';

  cupcakeList = [
    {
      name: 'Flamin-gooo',
      img: 'flamingo_cupcake.png',
      description:
        "Our bestseller and signature dish. Comes with our little pink friend on top. Yes, we like to put strange things on our cakes ...and that's how it all started.",

      taste:
        "The batter contains a delicious raspberry goo surprise. The bird itself tastes very pink-ish. Just try it. It's our best dish for a reason!",
      stars: 4.9,
      reviews: [
        {
          name: 'Pauline P.',
          text: "Oh. My. Gosh. I love this cupcake. I'm gonna decrease the Flamin-gooo population drastically. Sorry birdy.",
        },
        {
          name: 'Ferris B.',
          text: "Don't know why, but this birds look combines psycho and charming in one pink something! Tasted really good, by the way. ",
        },
      ],
    },
    {
      name: 'Fudgey Finchy',
      img: 'finch_cupcake.png',
      description:
        "Why put a bird on top of a Cupcake? Because we can! Zebra Finchs are known to be a bit chatty. But you won't... with a mouthfull.",
      taste:
        'Really good, indeed! Stracchiatella, caramell, apricot-jam inside.',
      stars: 3.9,
      reviews: [
        { name: 'Paul B.', text: 'Made me chatty...about how good it is!' },
        { name: 'Ric J.', text: 'Cant tell...it flew off the cake!' },
      ],
    },
    {
      name: 'Forrest Gulp',
      img: 'forrest_cupcake.png',
      description:
        'Ever wondered what the average taste of a forrest might be? Awfull. Not to recommend. Instead, try this one.',
      taste:
        'Down to earth brownie-cake with an earthy texture, nutty taste and pine-needle cream topping.',
      stars: 4.8,
      reviews: [
        {
          name: 'Steffi P.',
          text: "It's like your tounge goes for a hike in the woods.",
        },
        {
          name: 'Holger M.',
          text: 'A bit scary...should try it again in daylight.',
        },
      ],
    },
    {
      name: 'Irrelephant',
      img: 'irrelephant_cupcake.png',
      description: 'Try not to think of a blue elephant! Got it?  ',
      taste:
        "We couldn't care less of the elephant, so we focused on the cupcake. Blue Curacao, blueberries, buttery cream, and a hint of vanilla.",
      stars: 4.3,
      reviews: [{ name: 'Helge s.', text: "It's a blue elephant!" }],
    },
    {
      name: 'Melon-cholia',
      img: 'melon_cupcake.png',
      description:
        'This one certainly lives up to its promise. Tastes of melon, melon and also melon. Melon lovers in particular will love it!',
      taste: 'Quite melon-ish...with a hint of melon.',
      stars: 2.2,
      reviews: [
        {
          name: 'Mandy K.',
          text: 'Came for the melon, left with a cake and a smile',
        },
        {
          name: 'Olaf P.',
          text: 'Such a variety of melon-ish flavours...damn!',
        },
      ],
    },
    {
      name: 'Mount Fudgey',
      img: 'mountain_cupcake.png',
      description:
        'As if Bob Ross had painted this little masterpiece with colored sugar icing. Maybe he did. Who knows for sure. At least he was always in a good mood.',

      taste:
        'Fresh and icey on top, piney in the middle, soft and fudgey at the bottom.',
      stars: 3.1,
      reviews: [
        { name: 'Reinhold M.', text: 'I had a Yeti on my one. Reclaimed!' },
        {
          name: 'Ruben O.',
          text: 'Carefull with the first bite, very frosty!',
        },
      ],
    },
    {
      name: 'Cake Noir',
      img: 'noir_cupcake.png',
      description:
        'A classic. Simple, honest, tasty. No frills, just the essentials that make a good...no, VERY good cupcake. ',
      taste:
        "Black and white, very dark, almost bitter chocolate, sweet, frothy cream with a hint of mint. That's it.",
      stars: 4.2,
      reviews: [
        { name: 'Kevin W.', text: 'Pretty good! I mean: pretty and good!' },
        {
          name: 'Nadine. L.',
          text: "When the In-laws are coming, it's the absolute favorite to keep them calm! ",
        },
      ],
    },
    {
      name: 'Colourful Coincident',
      img: 'color_cupcake.png',
      description:
        'To be honest, that\'s what you get when you tell your apprentice: "Trevor, let your imagination guide you! Use whatever ingredients you find here". And boy, he did!',

      taste: 'Literally everything! All at at once! No refunds, by the way.',
      stars: 2.3,
      reviews: [
        {
          name: 'Robert D.',
          text: "Freakin'awesome! My mouth feels still numb.",
        },
        {
          name: 'Klaus N.',
          text: 'Each cupcake is a unique experience...depending on which apprentice is currently on shift...I guess.',
        },
      ],
    },
    {
      name: 'Little Princess',
      img: 'princess_cupcake.png',
      description:
        "Today I am the princess! Of course you are, no question. Here's the right, regal cupcake for the occasion. Just as befits the high-born highness that you are... as our customer.",

      taste:
        'Sublime flavour of strawberry, dragon fruit, adorned with sheer royalty, bedded on a pouch of soft cake.',
      stars: 3.6,
      reviews: [
        {
          name: 'Esmeralda M.',
          text: 'Spoonable nobility, indeed.',
        },
        {
          name: 'Nina H.',
          text: 'Make way for the comment! Here it comes: Well done, fellow creator of baked goods. ',
        },
      ],
    },
  ];

  numLog(index: number) {
    console.log(index);
  }
}
