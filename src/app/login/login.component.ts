import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    SelectButtonModule,
    ToastModule,
    CardModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  protected loginForm: FormGroup = new FormGroup('');

  // protected selectedCity: string | undefined;
  // protected cities: string[] | undefined;

  // protected selectedStreet: string | undefined = '';
  // protected streets: string[] | undefined;

  // protected selectedHausnr: string | undefined = '';
  // protected hausnrs: string[] | undefined;

  // protected isCitySelected: boolean = false;
  // protected isStreetSelected: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router,
    private loginService: AuthService,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      // name: ['', Validators.required],
      // surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // phoneNr: ['', [Validators.required, Validators.minLength(12)]],
      confirmationCode: ['', [Validators.required, Validators.minLength(4)]],
      // city: ['', Validators.required],
      // street: [
      //   { value: '', disabled: !this.isCitySelected },
      //   Validators.required,
      // ],
      // hausnr: [
      //   { value: '', disabled: !this.isStreetSelected },
      //   Validators.required,
      // ],
    });
  }

  login(): void {
    this.loginService
      .loginUser(
        this.loginForm.get('email')?.value,
        this.loginForm.get('confirmationCode')?.value,
      )
      .subscribe({
        next: (val) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Erfolg',
            detail: 'Sie sind erfolgreich eingelogt',
          });
          this.router.navigateByUrl('/calendar');
        },
        error: (err) =>
          this.messageService.add({
            severity: 'warn',
            summary: 'Error Message',
            detail: 'Something went wrong',
          }),
      });
  }
}
