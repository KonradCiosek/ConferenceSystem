import { Component } from '@angular/core';


@Component({
  selector: 'app-time',
  templateUrl: './time.picker.html',
})


export class TimeValue {

  time: string
  updateTime(input: string)
  {
    this.time = input;
    console.log(this.time)
  }
  

}


