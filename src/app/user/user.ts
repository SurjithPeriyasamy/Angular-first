import {
  Component,
  computed,
  EventEmitter,
  Input,
  output,
  Output,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomUser = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  @Input({ required: true }) user!: {
    id: string;
    name: string;
    avatar: string;
  };
  @Output() select = new EventEmitter();
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
