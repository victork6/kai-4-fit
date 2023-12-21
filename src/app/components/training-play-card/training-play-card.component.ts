import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-play-card',
  templateUrl: './training-play-card.component.html',
  styleUrls: ['./training-play-card.component.scss'],
})
export class TrainingPlayCardComponent implements OnInit {

  @Input() image: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {}

}
