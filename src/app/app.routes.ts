import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CalendarComponent } from './calendar/calendar.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  },
  // { path: '**', component: PageNotFoundComponent },
];
