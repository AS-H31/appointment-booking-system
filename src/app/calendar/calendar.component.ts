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

  protected timePeriods: string[] = [
    '09:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '12:00 - 13:00',
    '13:00 - 14:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
  ];

  protected slots: string[] = ['Slot', 'Slot', 'Slot', 'Slot'];

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

  bookAppointment(): void {}
}
