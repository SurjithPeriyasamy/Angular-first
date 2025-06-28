import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent {
  @Input({ required: true }) id?: string;
  @Input({ required: true }) name?: string;
  @Input({ required: true }) avatar?: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
}
