import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
@Component({
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  imports: [ReactiveFormsModule],
})
export class RegisterComponent {
  private fb: FormBuilder = inject(FormBuilder);
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

  onRegister(): void {}
}
