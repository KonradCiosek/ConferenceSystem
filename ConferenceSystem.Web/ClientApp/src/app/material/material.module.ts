import { NgModule } from '@angular/core';
import { MatDatepickerModule, MatNativeDateModule, MatInputModule } from '@angular/material'

const MaterialComponents = [
  MatInputModule, 
  MatDatepickerModule,
  MatNativeDateModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
