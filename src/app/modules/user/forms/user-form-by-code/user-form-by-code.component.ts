import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-form-by-code',
  templateUrl: './user-form-by-code.component.html',
  styleUrls: ['./user-form-by-code.component.scss']
})
export class UserFormByCodeComponent implements OnInit {
  userForm: FormGroup;

  emailCtrl: AbstractControl;
  orgaCtrl: AbstractControl;

  @Output('inputsubmit')
  inputsubmit = new EventEmitter<User>();

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
  }

  ngOnInit(): void {
  }

  static orgaIsNotToto(control: FormControl) {
    const orgnisation = control.value;
    return orgnisation === 'toto' ? { isToto: true } : null;
  }

  submit() {
    console.log(this.userForm.value);
    const u = new User(0, '');
    Object.assign(u, this.userForm.value);
    this.inputsubmit.emit(u);
  }

}
