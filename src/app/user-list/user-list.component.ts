import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names: string[];  //Array<string>

  constructor() {
    this.names = ["Baba", "Mama", "Ward", "Jamil"]
  }
  ngOnInit() { }

}
