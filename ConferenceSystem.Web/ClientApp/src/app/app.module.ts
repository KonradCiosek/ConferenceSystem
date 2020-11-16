import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MaterialModule } from './material/material.module';
import { DatepickerValue } from './datepicker/date.picker';
import { FormField } from './forms/form.field';
import { WindowValue, Window } from './windows/window.booking';
import { TimeValue } from './timepicker/time.picker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerValue,
    FormField,
    WindowValue, Window,
    TimeValue,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,

    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxMaterialTimepickerModule,

    RouterModule.forRoot([

      { path: 'date.picker', component: DatepickerValue },
      { path: 'form.field', component: FormField },
      { path: 'window.booking', component: WindowValue },
      { path: 'window.booking', component: Window },
      { path: 'time.picker', component: TimeValue },



    ]),

  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
