import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor(
    private Route: Router
  ) {}

  onSubmit(f: NgForm) {
    if (f.valid) {
      this.Route.navigate(['/dashboard']);
    }
  }

  validatorForm(form: any, ngFrom: NgForm) {
    return ngFrom.form.controls[form].invalid && (ngFrom.submitted || ngFrom.form.controls[form].dirty);
  }
}
