import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavigationTabsComponent } from './navigation-tabs/navigation-tabs.component';
import { LogsComponent } from './pages/logs/logs.component';
import { IndexComponent } from './pages/index/index.component';
import { appRoutes } from './app.routing';

import 'hammerjs';
import { SearchSidebarComponent } from './pages/logs/search-sidebar/search-sidebar.component';
import { ListFilterPipe } from './pages/logs/search-sidebar/list-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationTabsComponent,
    LogsComponent,
    IndexComponent,
    SearchSidebarComponent,
    ListFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
