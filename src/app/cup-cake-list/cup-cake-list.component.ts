import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cup-cake-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cup-cake-list.component.html',
  styleUrl: './cup-cake-list.component.scss',
})
export class CupCakeListComponent {
  howItWorks = 'fine';

  cupcakeList = [
    {
      name: 'Apple',
      img: 'apple_cupcake.png',
      description:
        'Apple cupcakes are a low-calorie treat due to their high water content and contain only traces of fat and protein. They are rich in fiber (about two percent) and carbohydrates (about eleven percent). Apples in these cupcakes provide many vitamins and minerals, making them a great source of Vitamin C.',
      genus: 'Pome fruits within the rose family',
      stars: 2.3,
      reviews: [
        { name: 'Kevin W.', text: 'Tasty' },
        { name: 'Arne P.', text: 'Not my favorite' },
      ],
    },
    {
      name: 'Banana',
      img: 'banana_cupcake.png',
      description:
        "Banana cupcakes feature creamy, starchy banana fruit that can be up to 30 cm long. The ripe banana's thick, yellow skin is easy to peel off, making it perfect for a moist and flavorful cupcake base.",
      genus: 'Banana family (Musaceae) within monocotyledonous plants',
      stars: 3.8,
      reviews: [
        { name: 'Waldemar W.', text: 'Great for a fruit salad theme' },
        { name: 'Olaf P.', text: 'Not bad' },
      ],
    },
    {
      name: 'Sour Cherry',
      img: 'cherry_cupcake.png',
      description:
        'Sour cherry cupcakes have a tart flavor with bright to dark red cherries. The 15 to 20 mm diameter cherries are almost spherical, smooth, and frost-free, adding a unique tang to the cupcakes.',
      genus: 'Plant species from the rose family (Rosaceae)',
      stars: 3.7,
      reviews: [{ name: 'Horst', text: 'Definitely not sweet' }],
    },
    {
      name: 'Strawberry',
      img: 'strawberry_cupcake.png',
      description:
        'Strawberry cupcakes are perfect for making jam-filled delights. Growing your strawberries might be a bit tedious, but the effort is worth it as they taste much better than store-bought ones.',
      genus: 'Plant species from the rose family (Rosaceae)',
      stars: 4.3,
      reviews: [
        { name: 'Mandy K.', text: 'Perfect for cakes' },
        { name: 'Olaf P.', text: 'Also a good choice' },
      ],
    },
    {
      name: 'Lemon',
      img: 'lemon_cupcake.png',
      description:
        'Lemon cupcakes are made with lemons from evergreen trees that produce elongated, oval fruits with yellow or yellow-green skin. The juicy, sour flesh contains about 3.5–8% citric acid and significant amounts of Vitamin C.',
      genus: 'Plant species from the rue family',
      stars: 1.3,
      reviews: [
        { name: 'Horst', text: 'Definitely not sweet either' },
        { name: 'Paul K.', text: 'Not perfect for cakes' },
      ],
    },
    {
      name: 'Orange',
      img: 'orange_cupcake.png',
      description:
        "Orange cupcakes are made with oranges whose inner peel is white and inedible, requiring peeling before use. Oranges can be turned into various products, with their juices sold as orange juice. The orange peel's scent is used in perfumes, and dried orange peel is used in teas.",
      genus: 'Plant species from the rue family',
      stars: 4.7,
      reviews: [
        { name: 'Kevin W.', text: 'Usually pretty good!' },
        { name: 'Oliver J.', text: 'Absolute favorite for breakfast' },
      ],
    },
  ];
}
