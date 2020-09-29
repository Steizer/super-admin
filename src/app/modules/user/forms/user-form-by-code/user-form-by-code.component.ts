import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-user-form-by-code',
  templateUrl: './user-form-by-code.component.html',
  styleUrls: ['./user-form-by-code.component.scss']
})
export class UserFormByCodeComponent implements OnInit {
  userForm: FormGroup;

  emailCtrl: AbstractControl;
  orgaCtrl: AbstractControl;

  constructor(fb: FormBuilder) {

    this.userForm = fb.group({
      id: fb.control({ value: 0, disabled: true }, []),
      email: fb.control('', [
        Validators.required,
        Validators.email,
        Validators.min(5)]),
      password: fb.control(''),
      organisation: fb.control('', [
        Validators.required,
        UserFormByCodeComponent.orgaIsNotToto
      ]),
      isAdmin: fb.control(false),
    });

    this.emailCtrl = this.userForm.get('email');
    this.orgaCtrl = this.userForm.get('organisation');


    this
      .emailCtrl
      .valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged()
      ).subscribe(val => console.log(val));


  }

  ngOnInit(): void {
  }

  static orgaIsNotToto(control: FormControl) {
    const orgnisation = control.value;
    return orgnisation === 'toto' ? { isToto: true } : null;
  }

  submit() {
    console.log(this.userForm.value);
  }

}
