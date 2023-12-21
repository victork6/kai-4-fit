import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout-tip-card',
  templateUrl: './workout-tip-card.component.html',
  styleUrls: ['./workout-tip-card.component.scss'],
})
export class WorkoutTipCardComponent implements OnInit {

  @Input() image: string;
  @Input() title: string;
  @Input() author: string;
  @Input() date: string;

  constructor() { }

  ngOnInit() {}

}
