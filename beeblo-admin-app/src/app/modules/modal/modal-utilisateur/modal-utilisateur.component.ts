import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { Groupe } from '../../../interface/groupe';
import { User } from '../../../interface/user';
import { MessagesService } from '../../../services/message/message.service';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-modal-utilisateur',
  templateUrl: './modal-utilisateur.component.html',
  styleUrls: ['./modal-utilisateur.component.scss']
})
export class ModalUtilisateurComponent implements OnInit {
  listGroupUser: Array<Groupe>;
  usersForm: FormGroup;
  data: User;
  isResetPassword: boolean = false;
  checked: boolean;

  constructor(
    public config: DynamicDialogConfig,
    public _userSvc: UserService,
    public ref: DynamicDialogRef,
    private message: MessagesService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getAllGroupeUser();
    this.data = this.config.data;
    this.checked = this.data?.id_status == 2 ? true : false;
    this.usersForm = this.fb.group({
      id_status: [this.checked],
      nom_administrateur: [this.data ? this.data['nom_administrateur'] : '' , Validators.required],
      prenom_administrateur: [this.data ? this.data['prenom_administrateur'] : '', Validators.required],
      nom_utilisateur: [this.data ? this.data['nom_utilisateur'] : '', Validators.required],
      reset_password: [this.isResetPassword],
      mot_de_passe: ['' , !this.data ? Validators.required : null],
      id_groupe: [this.data ? this.data['id_groupe'] : '', Validators.required]
    });
  }

  getAllGroupeUser() {
    this._userSvc.getAllGroupUser().subscribe((res: Groupe[]) => {
      this.listGroupUser = res;
    });
  }

  saveData(formData: User): Observable<string> {
    return this.data ? this._userSvc.updateUser(this.data.id_administrateur, formData) :
                       this._userSvc.add(formData);
  }

  saveUser() {

    if (this.usersForm.valid) {

      const data: User = this.usersForm.value;
      this.saveData(data).subscribe((res: string) => {
        this.ref.close(res);
      }, (err: HttpErrorResponse) => {
        this.message.error('Erreur', `Erreur d'enregistrement de l'utilisateur : ${err.message}`);
      });

    } else {
      this.message.error('Erreur', `Champs obligatoire non rempli`);
    }

  }

  updateResetValidator() {

    if (!this.isResetPassword) {
      this.usersForm.controls['mot_de_passe'].clearValidators();
      this.usersForm.controls['mot_de_passe'].updateValueAndValidity();
    } else {
      this.usersForm.controls['mot_de_passe'].setValidators(Validators.required);
    }

  }

  disableAccount() {
    this._userSvc.changeStatutLogin(this.data.id_login).subscribe((res: string) => {
      this.message.success('Succes', `Utilisateur ${this.checked ? 'activé' : 'désactivé'}`)
    }, (err: HttpErrorResponse) => {
      this.message.error('Erreur', `Erreur d'enregistrement de l'utilisateur : ${err.message}`);
    })
  }

}
