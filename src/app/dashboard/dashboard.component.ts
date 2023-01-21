import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  income: number = 70000;
  expense: any = null;
  totalExpenses: number = 0;
  expenses: any = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  public addExpenses(): void {
    this.expenses.push(this.expense);
    console.log(this.expenses, 'this.expense ----');
    this.expense = null;
    this.sumExpenses(this.expense);
  }

  public removeExpenses(exp: number): void {
    this.expenses = this.expenses.filter((e: number) => e != exp);
    this.sumExpenses(this.expense);
  }

  private sumExpenses(exp: string) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Remove Employee',
        message: 'Are you sure, you want to remove an employee: ' + exp,
      },
    });
    confirmDialog.afterClosed().subscribe((result) => {
      if (result === true) {
        console.log(result, '---- this is true');
      }
    });

    this.totalExpenses = this.expenses.reduce(
      (sum: number, val: number) => sum + val,
      0
    );
  }
}
