import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { IterateObjectPipe } from './iterate-object.pipe';

const allPipes = [
  IterateObjectPipe
];

const allComponents = [];
const allServices = [];

const allModules = [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MaterialModule
];

@NgModule({
  imports: allModules,
  declarations: allComponents.concat(allPipes),
  providers: allServices,
  exports: allModules.concat(allComponents).concat(allPipes)
})
export class SharedModule { }
