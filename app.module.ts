import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CComponent } from './c/c.component';
import{ TableService } from './table.service';
import { AddButtonComponent } from './add-button/add-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CComponent,
    AddButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
