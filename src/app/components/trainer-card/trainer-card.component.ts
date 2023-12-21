import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer-card',
  templateUrl: './trainer-card.component.html',
  styleUrls: ['./trainer-card.component.scss'],
})
export class TrainerCardComponent implements OnInit {

  
  @Input() name: string;
  @Input() image: string;
  @Input() videos: number;
  @Input() followers: string;
  @Input() courses: number;
  @Input() verified: boolean;
  
  
  constructor() { }

  ngOnInit() {}

}
