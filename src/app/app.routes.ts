import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

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
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];
