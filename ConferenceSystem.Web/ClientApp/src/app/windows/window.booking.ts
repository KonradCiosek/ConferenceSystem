import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData
{
  Id_Worker: string;
}

@Component({
  selector: 'app-window',
  templateUrl: 'window.booking.html',
  styleUrls: ['window.booking.css'],
})
export class Window
{

  Id_Worker: string;

  constructor(public dialog: MatDialog)
  {  }

  openDialog(): void
  {
    const dialogRef = this.dialog.open(WindowValue,
    {
      height: '300px',
      width: '500px',
      data: { Id_Worker: this.Id_Worker }
    });

    //dialogRef.afterClosed().subscribe(result =>
    //{
    //    console.log('The dialog was closed');
    //});
  }

}

@Component({
  selector: 'app-window-dialog',
  templateUrl: 'window.booking-dialog.html',
})
export class WindowValue
{

  constructor(
    public dialogRef: MatDialogRef<WindowValue>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
