import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.scss'],
})
export class ReviewItemComponent implements OnInit {

  @Input() avatar: string;
  @Input() name: string;
  @Input() rate: string;
  @Input() date: string;
  @Input() comment: string;

  constructor() { }

  ngOnInit() {}

}
