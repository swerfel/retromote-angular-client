import { Component, OnInit } from '@angular/core';
import { Dimension } from '../dimension';
import { Position } from '../position';

@Component({
  selector: '[app-postit]',
  templateUrl: './postit.component.html',
  styleUrls: ['./postit.component.css']
})
export class PostitComponent implements OnInit {
  text: string = "PostIt text";
  size: Dimension = {
    width: 150,
    height: 100
  };
  location: Position = {
    x: 10,
    y: 5
  }

  constructor() { }

  ngOnInit() {
  }

}
