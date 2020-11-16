import { Component, Input } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-datepicker',
  templateUrl: './date.picker.html',
  styleUrls: ['./date.picker.css']
})
export class DatepickerValue {

  SelectedDate: Date

  updateDate(input: MatDatepickerInputEvent<Date>)
  {
    this.SelectedDate = input.value;
    console.log(this.SelectedDate)
  }

}
