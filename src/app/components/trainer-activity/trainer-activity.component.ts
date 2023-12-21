import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer-activity',
  templateUrl: './trainer-activity.component.html',
  styleUrls: ['./trainer-activity.component.scss'],
})
export class TrainerActivityComponent implements OnInit {

  @Input() title: string;
  @Input() bodyArea: string;
  @Input() duration: string;

  constructor() { }

  ngOnInit() {}

}
