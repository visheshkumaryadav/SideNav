import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-customertable',
  templateUrl: './customertable.component.html',
  styleUrls: ['./customertable.component.css']
})
export class CustomertableComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] =
    [

      'sn',
      'moblieno',
      'text',
      'date',
      'action',
    ];

  constructor(
    private _dialog: MatDialog,
    private authService: AuthServiceService,
    //private _coreService: CoreService
  ) { }


  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.authService.getEmployeeList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      },
      error: console.log
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  deleteEmployee(id: number) {
    this.authService.deleteEmployee(id).subscribe({
      next: (res) => {
       alert("employee delete successfully!");
        this.getEmployeeList();
      },
      error: console.log,
    });
  }

  openEditForm(_t70: any) {
    throw new Error('Method not implemented.');
  }


}
