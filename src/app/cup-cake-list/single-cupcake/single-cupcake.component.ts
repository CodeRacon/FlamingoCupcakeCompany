import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-cupcake',
  standalone: true,
  imports: [],
  templateUrl: './single-cupcake.component.html',
  styleUrl: './single-cupcake.component.scss',
})
export class SingleCupcakeComponent {
  @Input() cupcakeDish = 0;
}
