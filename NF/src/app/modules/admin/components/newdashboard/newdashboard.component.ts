import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newdashboard',
  templateUrl: './newdashboard.component.html',
  styleUrls: ['./newdashboard.component.css']
})
export class NewdashboardComponent implements OnInit {
  title = 'admin-panel-layout';
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor(){}
  ngOnInit(): void {
    
  }

}
