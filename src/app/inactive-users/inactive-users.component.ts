import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CounterService } from '../counter.service';
import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  @Output() userSetToActive = new EventEmitter<number>();

  constructor(private counterService: CounterService,
    private userService: UserService) {
      this.userService.statusUpdated.subscribe(
        (status: string) => alert('New Status: ' + status)
      );
  }
  onSetToActive(id: number, count: number, active:string) {
    this.userSetToActive.emit(id);   
    this.userService.updateStatus(id, active, count);
    this.userService.statusUpdated.emit(active);
    this.counterService.countStatusChange(count, active);
  }
}
