import { Component, OnInit } from '@angular/core';

import { Dimension } from '../dimension';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  size: Dimension = {
    width: 600,
    height: 400
  };

  constructor() { }

  ngOnInit() {
  }

}
