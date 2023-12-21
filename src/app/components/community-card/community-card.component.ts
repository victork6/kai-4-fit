import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-community-card',
  templateUrl: './community-card.component.html',
  styleUrls: ['./community-card.component.scss'],
})
export class CommunityCardComponent implements OnInit {

  @Input() id: number;
  @Input() avatar: string;
  @Input() name: string;
  @Input() date: string;
  @Input() images: string[];
  @Input() likes: number;
  @Input() comments: number;

  imgConfig = {
    spaceBetween: 6,
    slidesPerView: 1,
    centeredSlides: true,
  };

  constructor(private router: Router, public actionSheetController: ActionSheetController) { }

  ngOnInit() {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'opts-container',
      buttons: [{
        text: 'Read post',
        icon: 'image-outline',
        handler: () => {
          this.readPost(this.id);
        }
      }, {
        text: 'Comment on post',
        icon: 'chatbubble-ellipses-outline',
        handler: () => {
          this.goToComments(this.id);
        }
      }, {
        text: 'See profile',
        icon: 'person-outline',
        handler: () => {
          
        }
      }, {
        text: 'Copy link',
        icon: 'copy-outline',
        handler: () => {
          
        }
      },{
        text: 'Share',
        icon: 'share-social-outline',
        handler: () => {
          
        }
      },
    ]
    });
    await actionSheet.present();
  }

  readPost(id) {
    let navigationExtras: NavigationExtras = {
      state: {
        post: id
      }
    };
    this.router.navigate(['community-detail'], navigationExtras);
  }

  goToComments(id) {
    let navigationExtras: NavigationExtras = {
      state: {
        id: id
      }
    };
    this.router.navigate(['comments'], navigationExtras);
  }

}
