import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  
  userForm: FormGroup;
  userData: unknown;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.userData = this.router.getCurrentNavigation().extras.state.user;
      }
    });

  }

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      weight: [null, [Validators.required]],
      height: [null, [Validators.required]],
      birth: [null, [Validators.required]]
    })

    if(this.userData) {
      this.patchForm(this.userData);
    }
  }

  patchForm(data) {
    const patchValues = {
      firstName: data.firstName,
      lastName: data.lastName
    } 
    this.userForm.patchValue(patchValues);
  }

  saveChanges() {
    this.router.navigate(['/profile']);
  }

}
