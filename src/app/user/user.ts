import { Component, computed, input, Input, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomUser = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => 'assets/users/' + this.avatar());
  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }
  onSelectUser() {
    const randomUser = Math.floor(Math.random() * DUMMY_USERS.length);
  }
}
