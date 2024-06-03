import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-single-cupcake',
  standalone: true,
  imports: [],
  templateUrl: './single-cupcake.component.html',
  styleUrl: './single-cupcake.component.scss',
})
export class SingleCupcakeComponent {
  @Input() cupcake = {
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
  };

  @Output() cupcakeName = new EventEmitter<string>();

  emitCupcakeName() {
    this.cupcakeName.emit(this.cupcake.name);
  }
}
