import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task2Directive } from './task2/task2.directive';
import { Task1Pipe } from './task1/task1.pipe';
import { Task1Directive } from './task1/task1.directive';
import { UserCardComponent } from './task1/user-card/user-card.component';

@NgModule({
  declarations: [AppComponent, Task1Component, Task2Component, Task2Directive, Task1Pipe, Task1Directive, UserCardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
