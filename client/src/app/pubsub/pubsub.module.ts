import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PubsubService } from './pubsub.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [PubsubService]
})
export class PubsubModule { }
