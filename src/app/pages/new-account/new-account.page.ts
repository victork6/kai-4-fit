import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.page.html',
  styleUrls: ['./new-account.page.scss'],
})
export class NewAccountPage implements OnInit {

  infoForm: FormGroup;
  
  image = 'https://images.unsplash.com/photo-1616279969856-759f316a5ac1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80';
  
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.infoForm = this.fb.group({
      gender: [null, [Validators.required]],
      weight: [null, [Validators.required]],
      height: [null, [Validators.required]],
      birth: [null, [Validators.required]]
    })
  }

  onSubmit() {
    this.router.navigate(['/verification']);
  }
}
