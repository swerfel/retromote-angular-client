import { Component, OnInit } from '@angular/core';

import { Dimension } from '../dimension';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  size: Dimension = {
    width: 1000,
    height: 600
  };

  constructor() { }

  ngOnInit() {
  }

}
