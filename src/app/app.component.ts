import { Component, OnInit } from '@angular/core';

import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: {name: string, status: string,count:number}[] = [];
  activeUsers = [{
    name: 'Max',
    status: 'active',
    count:1
  }, 
  {
    name: 'Anna',
    status: 'inactive',
    count:1
  }];

  inactiveUsers = [{
    name: 'Chris',
    status: 'active',
    count:1
  },
  {
    name: 'Manu',
    status: 'inactive',
    count:1
  }];

  //['Chris', 'Manu'];
  
  constructor(private userService: UserService) {
  }

  onSetToInactive(id: number) {
    this.activeUsers[id].count= this.activeUsers[id].count+1;
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.inactiveUsers[id].count=this.inactiveUsers[id].count+1;
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
  ngOnInit() {
    this.users = this.userService.users; 
  }
}
