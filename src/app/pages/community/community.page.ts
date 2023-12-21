import { Component, OnInit } from '@angular/core';
import { Community } from 'src/app/interfaces/community';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {

  data: Community[];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.getCommunity();
  }

}
