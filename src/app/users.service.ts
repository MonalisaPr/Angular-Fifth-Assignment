import { EventEmitter, Injectable } from '@angular/core';

import { CounterService } from './counter.service';

@Injectable()
export class UserService {
  users = [
    {
      name: 'Max',
      status: 'active',
      count: 0
    },
    {
      name: 'Anna',
      status: 'inactive',
      count: 0
    },
    {
      name: 'Chris',
      status: 'active',
      count: 0
    },
    {
      name: 'Manu',
      status: 'inactive',
      count:0
    }
  ];
  statusUpdated = new EventEmitter<string>();

  constructor(private counterService: CounterService) {

  }

  updateStatus(id: number, status: string, count: number) {
    this.users[id].status = status;  
    this.users[id].count = count+1; 
  }
}
