import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,
    FormsModule,
    CardModule,
    DividerModule,
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  protected dateAndTimeForm: FormGroup = new FormGroup('');
  protected calendarClass: string = 'hide';
  protected date: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.dateAndTimeForm = this.formBuilder.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
    });

    this.dateAndTimeForm.get('date')?.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
