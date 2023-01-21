import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'home-budget';
  name = 'Angular';

  constructor(private dialog: MatDialog) {}
  ngOnInit() {}
  removeEmployee(text: string) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Remove Employee',
        message: 'Are you sure, you want to remove an employee: ' + text,
      },
    });
    confirmDialog.afterClosed().subscribe((result) => {
      if (result === true) {
        console.log(result, '---- this is true');
      }
    });
  }
}
