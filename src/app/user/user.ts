import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomUser = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomUser];

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectUser() {
    const randomUser = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomUser];
  }
}
