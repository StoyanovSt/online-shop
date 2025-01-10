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

import { catchError, delay, finalize, of, Subject, takeUntil, tap } from 'rxjs';
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
  registerForm!: FormGroup;
  isPasswordVisible = signal<boolean>(false);
  isRePasswordVisible = signal<boolean>(false);

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
        delay(2000),
        tap(() => {
          //add notification
          localStorage.setItem(JWT_KEY, userData.email);
          this.router.navigate(['/home']);
        }),
        catchError(err => {
          //add notification
          console.error(err);
          return of(null)
        }),
        finalize(() => this.loadingService.hideLoadingSpinner()),
        // takeUntil(this.destroyRegSub$)
      ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroyRegSub$.next();
    this.destroyRegSub$.complete();
  }
}
