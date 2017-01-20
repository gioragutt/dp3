import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module'
import { MaterialModule } from '@angular/material';

import { PubsubModule } from './pubsub/pubsub.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { AppRoutes } from './app.routing';
import { LogsModule } from './pages/logs/logs.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MaterialModule.forRoot(),
    LogsModule,
    AppRoutes,
    PubsubModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
