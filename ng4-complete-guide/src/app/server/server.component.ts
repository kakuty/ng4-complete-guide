import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent implements OnInit {
  constructor() { }
  serverId = 10;
  serverStatus = 'offline';

  getServerStatus(): string {
    return this.serverStatus;
  }
  ngOnInit() { }
}
