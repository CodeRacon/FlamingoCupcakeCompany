import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SingleCupcakeComponent } from './single-cupcake/single-cupcake.component';
import { CupcakeListDataService } from '../cupcake-list-data.service';

@Component({
  selector: 'app-cup-cake-list',
  standalone: true,
  imports: [CommonModule, SingleCupcakeComponent],
  templateUrl: './cup-cake-list.component.html',
  styleUrl: './cup-cake-list.component.scss',
})
export class CupCakeListComponent {
  cupcakeListData = inject(CupcakeListDataService);

  addComment(comment: string, index: number) {
    this.cupcakeListData.constructComment(comment, index);
  }
}
