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
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter();
  // select = output<string>();
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {
    this.select.emit(this.id);
  }
}
