import { Routes } from '@angular/router';
import { LogsComponent } from './pages/logs/logs.component';
import { IndexComponent } from './pages/index/index.component';

export const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'logs', component: LogsComponent },
  { path: '**', pathMatch: 'full', component: IndexComponent }
];
