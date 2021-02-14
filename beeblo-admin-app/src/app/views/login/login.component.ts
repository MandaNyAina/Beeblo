import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../interface/user';
import { MessagesService } from '../../services/message/message.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor(
    private Route: Router,
    private _user : UserService,
    private message: MessagesService
  ) {
    if (this._user.isAuthenticated()) this.Route.navigate(['/dashboard']);
  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      f.form.value.mot_de_passe = f.form.value.mot_de_passe + "(%%)from_beeblo_app";
      this._user.login(f.form.value).subscribe((res) => {
        let userConnected: User = res.data;
        localStorage.setItem("user_data", JSON.stringify(userConnected));
        localStorage.setItem("beeblo_admin_token", res.token);
        this.Route.navigate(['/dashboard']);
      }, (err) => {
        let message: string = err.error instanceof ProgressEvent ? err.message : err.error;
        this.message.error("Erreur", message);
      })
    }
  }

  validatorForm(form: any, ngFrom: NgForm): boolean {
    return ngFrom.form.controls[form]?.invalid && (ngFrom.submitted || ngFrom.form.controls[form].dirty);
  }
}
