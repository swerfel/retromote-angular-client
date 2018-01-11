import { Component, OnInit, Input } from '@angular/core';

export abstract class BoardElement {
  @Input() elemX: number;
  @Input() elemY: number;
  @Input() elemWidth: number;
  @Input() elemHeight: number;
}
