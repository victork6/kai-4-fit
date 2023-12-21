import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer-item',
  templateUrl: './trainer-item.component.html',
  styleUrls: ['./trainer-item.component.scss'],
})
export class TrainerItemComponent implements OnInit {

  @Input() avatar: string;
  @Input() name: string;
  @Input() videos: string;
  @Input() followers: string;

  constructor() { }

  ngOnInit() {}

}
