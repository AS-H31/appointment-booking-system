import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor() {}

  getAppointment(appointmentId: string) {}

  getAppointmentsList() {}

  addAppointment(appointment: Appointment) {}

  addAppointmentsList(appointments: Appointment[]) {}

  deleteAppointment(appointmentId: string) {}
}
