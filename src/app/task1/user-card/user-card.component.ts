import { Component, Input, OnInit } from '@angular/core';
import { Users, Status } from '../task1.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  @Input() user!: Users;
  constructor() {}

  ngOnInit(): void {}

  getColor(user: Users) {
    if (user.status === Status.Active) {
      return 'green';
    } else if (user.status === Status.Inactive) {
      return 'blue';
    } else {
      return 'red';
    }
  }
}
