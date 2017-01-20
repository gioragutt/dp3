import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NavigationTabsComponent } from './navigation-tabs/navigation-tabs.component';

@NgModule({
  imports: [SharedModule],
  declarations: [NavigationTabsComponent],
  exports: [NavigationTabsComponent, SharedModule]
})
export class CoreModule { }
