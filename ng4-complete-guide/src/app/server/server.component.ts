import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles:  [`
    .online {
      color: white;
    }
  `]
})

export class ServerComponent implements OnInit {
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  serverId = 10;
  serverStatus = 'offline';

  getServerStatus(): string {
    return this.serverStatus;
  }
  ngOnInit() { }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
