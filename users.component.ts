import { Component, OnInit } from '@angular/core';
import { DataService } from './../core/data.service';
import { user } from '../shared/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: user[]

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(
      (users:user[])=>this.users= users
    );
  }

}
