import { Component } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.field.html',
  styleUrls: ['./form.field.css']
})
export class FormField
{
  booking: any;
  Id_Room: number;
  Id_Worker: string="";

  //functionSelect()
  //{
  //  console.log(this.Id_Room);
  //  console.log(this.Id_Worker);
  //}


  functionSelect()
  {
    console.log(this.booking);
  }


  constructor(private bookingService: BookingService )
  {
    this.bookingService.GetBooking().subscribe(response => this.booking = response);


  }


}
