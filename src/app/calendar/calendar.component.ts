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
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

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
    MenubarModule,
    MenuModule,
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

  items: MenuItem[] | undefined;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.dateAndTimeForm = this.formBuilder.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
    });

    this.dateAndTimeForm.get('date')?.valueChanges.subscribe((value) => {
      console.log(value);
    });
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash',
          },
          {
            separator: true,
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link',
          },
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus',
          },
        ],
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
      },
      {
        label: 'Kontakt',
        icon: 'pi pi-fw pi-send',
      },
    ];
  }

  bookAppointment(): void {}
}
