import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CounterService } from '../counter.service';
import { UserService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private counterService: CounterService,
    private userService: UserService) {
      
    }
  onSetToInactive(id: number, count: number,inActive:string) {
    this.userSetToInactive.emit(id);
    this.userService.updateStatus(id, inActive, count);
    this.userService.statusUpdated.emit(inActive);
    this.counterService.countStatusChange(count, inActive);
  }
}
