import { Component } from '@angular/core';
import { Bounds } from '../bounds/bounds';
import { Dimension } from '../dimension';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  size: Dimension = {
    width: 1000,
    height: 600
  };
  stickyBounds = new Bounds(10, 5, 150, 100);
}
