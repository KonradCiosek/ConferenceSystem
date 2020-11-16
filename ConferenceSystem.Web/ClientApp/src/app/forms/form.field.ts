import { Component } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.field.html',
  styleUrls: ['./form.field.css']
})
export class FormField
{

  Id_Room: number;
  Id_Worker: string="";

  functionSelect()
  {
    console.log(this.Id_Room)
  }

  functionWorker()
  {
    console.log(this.Id_Worker)
  }
}
