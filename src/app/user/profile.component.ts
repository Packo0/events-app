import { Component, OnInit, Inject } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
        em {float: right; color:#E05C65; padding-left: 10px;}
        .error input {background-color: #E3C3C5;}
        .error ::-webkit-input-placeholder {color: #999;}
        .error ::-moz-placeholder {color: #999;}
        .error :-moz-placeholder {color: #999;}
        .error :ms-input-placeholder {color: #999;}
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup
  private firstName;
  private lastName;
  constructor(private auth: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) { }

  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstName,
      [Validators.pattern('[a-zA-Z].*'), Validators.required])
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required)
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  saveProfile(formsValues) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(formsValues.firstName, formsValues.lastName)
      this.toastr.success('Profile Saved');
    }
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched
  }

  cancel() {
    this.router.navigate(['events'])
  }
}
