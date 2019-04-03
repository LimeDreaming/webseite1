import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component ({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.css']
})
export class CpuComponent implements OnInit {

  constructor(private client: HttpClient) { }

  cpu00: string;
  cpu01: string;
  cpu02: string;
  cpu03: string;
  cpu04: string;
  cpu05: string;
  cpu06: string;
  cpu07: string;
  cpuSumme: string;

  pack00_CPU: string;
  pack01_CPU: string;
  pack02_CPU: string;
  pack03_CPU: string;
  pack04_CPU: string;
  pack05_CPU: string;
  pack06_CPU: string;
  pack07_CPU: string;
  pack08_CPUSumme: string;

  ngOnInit() {
    setInterval(() => {
      this.client.get('http://[2a02:8108:8dc0:2178:da50:e6ff:fe51:7ce0]:5000/a')
        .subscribe(data => {
          this.cpu00 = data['CPU00'];
          this.cpu01 = data['CPU01'];
          this.cpu02 = data['CPU02'];
          this.cpu03 = data['CPU03'];
          this.cpu04 = data['CPU04'];
          this.cpu05 = data['CPU05'];
          this.cpu06 = data['CPU06'];
          this.cpu07 = data['CPU07'];
          this.cpuSumme = data['CPUSumme'];
          console.log(this.cpu01);
        });

      this.client.get('http://[2a02:8108:8dc0:2178:da50:e6ff:fe51:7ce0]:5000/CPULastPack')
        .subscribe(data => {
          this.pack00_CPU = data['CPU00'];
          this.pack01_CPU = data['CPU01'];
          this.pack02_CPU = data['CPU02'];
          this.pack03_CPU = data['CPU03'];
          this.pack04_CPU = data['CPU04'];
          this.pack05_CPU = data['CPU05'];
          this.pack06_CPU = data['CPU06'];
          this.pack07_CPU = data['CPU07'];
          this.pack08_CPUSumme = data['CPU08'];
          console.log(this.cpu01);
        });
    }, 1000);
  }
}






























