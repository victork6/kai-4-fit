import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'h-calendar',
  templateUrl: './h-calendar.component.html',
  styleUrls: ['./h-calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HCalendarComponent implements OnInit, AfterViewInit {
  date: Date = new Date();
  @ViewChild('days') monthDays: ElementRef;

  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  month: string = '';
  days: string;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.renderCalendar();
  }

  prev() {
    this.date.setMonth(this.date.getMonth() - 1);
    this.renderCalendar();
  }

  next() {
    this.date.setMonth(this.date.getMonth() + 1);
    this.renderCalendar();
  }

  renderCalendar() {
    this.date.setDate(1);

    const lastDay = new Date(
      this.date.getFullYear(),
      this.date.getMonth() + 1,
      0
    ).getDate();

    const prevLastDay = new Date(
      this.date.getFullYear(),
      this.date.getMonth(),
      0
    ).getDate();

    const firstDayIndex = this.date.getDay();

    const lastDayIndex = new Date(
      this.date.getFullYear(),
      this.date.getMonth() + 1,
      0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    this.month = this.months[this.date.getMonth()];

    let days = '';

    for (let x = firstDayIndex; x > 0; x--) {
      days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
      if (
        i === new Date().getDate() &&
        this.date.getMonth() === new Date().getMonth()
      ) {
        days += `<div class="today">${i}</div>`;
      } else {
        days += `<div>${i}</div>`;
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="next-date">${j}</div>`;
    }

    this.monthDays.nativeElement.innerHTML = days;
  }
}
