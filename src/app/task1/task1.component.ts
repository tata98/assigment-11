import { Component, OnInit } from '@angular/core';
import { Task1Service, Users } from './task1.service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css'],
})
export class Task1Component implements OnInit {
  users: Users[] = [];
  loading: boolean = false;
  constructor(private usersService: Task1Service) {}

  ngOnInit(): void {}

  getUsers() {
    this.users = [];
    this.loading = true;
    this.usersService.getUsers().then((resultUsers) => {
      this.users = resultUsers;
      this.loading = false;
    });
  }
}
