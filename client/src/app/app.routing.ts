import { Routes, RouterModule } from '@angular/router';
import { LogsComponent } from './pages/logs/logs.component';
import { IndexComponent } from './pages/index/index.component';

const routes : Routes = [
  { path: '', component: IndexComponent },
  { path: 'logs', component: LogsComponent },
  { path: '**', pathMatch: 'full', component: IndexComponent }
];

export const AppRoutes = RouterModule.forRoot(routes); 
