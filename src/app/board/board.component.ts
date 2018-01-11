import { Component, OnInit } from '@angular/core';

import { Dimension } from '../dimension';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  size: Dimension = {
    width: 1000,
    height: 600
  };

  constructor() { }

  ngOnInit() {
  }

}
