import { isDefined } from '@angular/compiler/src/util';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, find, map, switchMap } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { AbstractUserService } from '../../users.service.abstract';

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

  constructor(
    fb: FormBuilder,
    private userService: AbstractUserService) {

    this.userForm = fb.group({
      id: fb.control({ value: 0, disabled: true }, []),



      email: fb.control('',
        {
          validators: [
            Validators.required,
            Validators.email,
            Validators.min(5)
          ],
          asyncValidators: [
            control => this.isEmailNotAvailable(control)
          ],
          updateOn: 'blur'
        }
      ),






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

  isEmailNotAvailable(control: AbstractControl)
    : Observable<ValidationErrors> {
    const email = control.value;
    return this.userService
      .getUsers()
      .pipe(
        switchMap(users => users),
        find(user => user.email === email),
        map(user => user ? { not_available: true } : null)
      )
  }

  submit() {
    console.log(this.userForm.value);
    const u = new User(0, '');
    Object.assign(u, this.userForm.value);
    this.inputsubmit.emit(u);
  }

}
