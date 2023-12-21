import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss'],
})
export class ScheduleItemComponent implements OnInit {

  @Input() title: string;
  @Input() image: string;
  @Input() bodyArea: string;
  @Input() day: string;
  @Input() duration: string;

  constructor() { }

  ngOnInit() {}

}
