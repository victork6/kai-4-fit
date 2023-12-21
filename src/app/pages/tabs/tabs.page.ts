import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  selected: string;

  constructor() {}

  setSelectedTab(evt) {
    this.selected = evt.tab;
  }
}
