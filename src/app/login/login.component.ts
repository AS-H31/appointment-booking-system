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

  protected selectedCity: string | undefined;
  protected cities: string[] | undefined;

  protected selectedStreet: string | undefined = '';
  protected streets: string[] | undefined;

  protected selectedHausnr: string | undefined = '';
  protected hausnrs: string[] | undefined;

  protected isCitySelected: boolean = false;
  protected isStreetSelected: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router,
  ) {
    this.cities = ['Oberhaun', 'Unterhaun', 'Nebenhaun'];
    this.streets = ['Bahnhofstr', 'Unterstr', 'Hochstr'];
    this.hausnrs = ['15', '16', '18'];
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      phoneNr: ['', [Validators.required, Validators.minLength(12)]],
      city: ['', Validators.required],
      street: [
        { value: '', disabled: !this.isCitySelected },
        Validators.required,
      ],
      hausnr: [
        { value: '', disabled: !this.isStreetSelected },
        Validators.required,
      ],
    });
  }

  login(): void {
    this.router.navigateByUrl('/calendar');
  }
}
