import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Community } from 'src/app/interfaces/community';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-community-detail',
  templateUrl: './community-detail.page.html',
  styleUrls: ['./community-detail.page.scss'],
})
export class CommunityDetailPage implements OnInit {
  commentForm: FormGroup;
  post: Community;
  postId: number;

  imgConfig = {
    spaceBetween: 6,
    slidesPerView: 1,
    centeredSlides: true,
  };

  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private router: Router,
    private dataService: DataService) {}

  ngOnInit() {
    this.commentForm = this.fb.group({
      comment: [null],
    });

    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.postId = this.router.getCurrentNavigation().extras.state.post;
      }
    });
    this.loadData(this.postId);
  }

  loadData(id: number) {
    this.post = this.dataService.getCommunity().find((item) => item.id === id);
    return this.post;
  }

  submitComment() {}

  navigateToComments(postId) {
    let navigationExtras: NavigationExtras = {
      state: {
        id: postId
      }
    };
    this.router.navigate(['/comments'], navigationExtras);
  }
}
