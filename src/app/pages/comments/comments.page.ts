import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import mockData from '../../data/db.json';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
  commentForm: FormGroup;
  postId: number;
  comments: unknown;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.commentForm = this.fb.group({
      comment: [null],
    });

    if (this.router.getCurrentNavigation().extras.state) {
      this.postId = this.router.getCurrentNavigation().extras.state.id;
    }

    this.loadData(this.postId);
  }

  loadData(id: number) {
    const post = mockData.community.find((item) => item.id === id);
    this.comments = post.comments.data;

    return this.comments;
  }

  goBack() {
    this.navCtrl.back();
  }
}
