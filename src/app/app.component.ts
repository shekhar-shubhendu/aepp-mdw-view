import { AeppMdwService } from './services/aepp-mdw.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'contracts';
  data = []
  headers = []
  constructor(private mdwService: AeppMdwService) {
  }

  ngOnInit(): void {
    this.displayContracts()
  }

  displayContracts(): void {
    this.mdwService.getAllContracts().subscribe(resp => {
      this.title = 'contracts';
      this.data = resp;
      this.headers = Object.keys(resp[0]);
    })
  }

  displayChannels(): void {
    this.mdwService.getActiveChannels().subscribe(resp => {
      this.title = 'channels';
      this.data = resp;
      this.headers = ["channel_id"];
    })
  }

  displayOracles(): void {
    this.mdwService.getAllOracles().subscribe(resp => {
      this.title = 'oracles';
      this.data = resp;
      this.headers = Object.keys(resp[0]);
    })
  }
}
