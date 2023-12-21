import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from 'src/app/interfaces/training';
import { DataService } from 'src/app/services/data.service';
import { Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit, AfterViewInit {
  tabType = 'SUN';
  days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  training: Training = null;

  chartType: ChartType = 'bar';
  chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  chartLabels: Label[] = [];
  chartData: ChartDataSets[] = [{ data: [], backgroundColor: '#00ff79' }];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.loadData(this.tabType);
  }

  ngAfterViewInit(): void {
    this.getTime();
    this.getCalories();
  }

  tabChanged(evt) {
    const currentTab = evt.detail.value;
    this.loadData(currentTab);
    this.getTime();
    this.getCalories();
  }

  loadData(type) {
    const data = this.dataService.getTrainingByDay(type);
    this.training = data;
    return this.training;
  }

  getTime() {
    const times = this.training.activities;
    this.chartLabels = times.map((item) => {
      return item.startAt;
    });
  }

  getCalories() {
    const calories = this.training.activities;
    this.chartData[0].data = calories.map((item) => {
      return item.calories;
    });
  }

  gotoCalendar() {
    this.router.navigateByUrl('/calendar');
  }
}
