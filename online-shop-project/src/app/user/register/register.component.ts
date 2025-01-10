import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

import { JWT_KEY } from '../../shared/constants/constants';
import { LoadingService } from '../../services/loading.service';
import { AppState } from '../../states/app.state';
import { setIsAuth } from '../../states/auth/auth.actions';
import { AlertService } from '../../services/alert.service';
import { AlertTypeEnum } from '../../shared/enums/alert.enum';
import { AlertInterface } from '../../shared/models/alert.interface';

import { catchError, delay, finalize, of, Subject, takeUntil, tap } from 'rxjs';
import { Store } from '@ngrx/store';
@Component({
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  imports: [ReactiveFormsModule, MatIconModule, CommonModule],
})
export class RegisterComponent implements OnDestroy {
  private destroyRegSub$ = new Subject<void>();

  private fb: FormBuilder = inject(FormBuilder);
  private loadingService = inject(LoadingService);
  private router: Router = inject(Router);
  private store = inject(Store<AppState>);
  private alertService = inject(AlertService);

  isPasswordVisible = signal<boolean>(false);
  isRePasswordVisible = signal<boolean>(false);

  registerForm!: FormGroup;

  constructor() {
    this.registerForm = this.fb.group({
      email: this.fb.control('', {
        validators: [Validators.required, Validators.email],
      }),
      password: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(6)],
      }),
      rePassword: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(6)],
      }),
    });

    this.registerForm.setValidators(this.passwordsMatchValidator());
  }

  get emailControl() {
    return this.registerForm.get('email');
  }

  get passwordControl() {
    return this.registerForm.get('password');
  }

  get rePasswordControl() {
    return this.registerForm.get('rePassword');
  }

  onBlur(controlName: string): void {
    const control = this.registerForm.get(controlName);
    if (control) {
      control.markAsTouched();
      control.updateValueAndValidity();
    }
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible.update(prev => !prev);
  }

  toggleRePasswordVisibility(): void {
    this.isRePasswordVisible.update(prev => !prev);
  }

  onRegister(): void {
    const userData = this.registerForm.getRawValue();
    this.loadingService.showLoadingSpinner();
    of(userData)
      .pipe(
        delay(1000),
        tap(() => {
          localStorage.setItem(JWT_KEY, userData.email);
          this.store.dispatch(setIsAuth({ isAuth: true }));
          this.router.navigate(['/home']);
          setTimeout(() => {
            this.setAlert({
              type: AlertTypeEnum.success,
              text: 'Successful registration!'
            });
          }, 250);
        }),
        catchError(err => {
          console.error(err);
          setTimeout(() => {
            this.setAlert({
              type: AlertTypeEnum.danger,
              text: 'Something went wrong!'
            });
          }, 250);          
          return of(null)
        }),
        finalize(() => this.loadingService.hideLoadingSpinner()),
        // takeUntil(this.destroyRegSub$) //TO DO: fix
      ).subscribe();
  }

  private passwordsMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = this.registerForm.get('password')?.value.trim().toLowerCase();
      const rePassword = this.registerForm.get('rePassword')?.value.trim().toLowerCase();

      if (password && rePassword && password !== rePassword) {
        this.registerForm.get('rePassword')?.setErrors({ passwordMismatch: true });
      }

      return null;
    };
  }

  private setAlert(alert: AlertInterface): void {
    this.alertService.setAlert({
      type: alert.type,
      text: alert.text
    });
  }

  ngOnDestroy(): void {
    this.destroyRegSub$.next();
    this.destroyRegSub$.complete();
  }
}
