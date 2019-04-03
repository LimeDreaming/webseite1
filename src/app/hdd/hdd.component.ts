import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-hdd',
  templateUrl: './hdd.component.html',
  styleUrls: ['./hdd.component.css']
})
export class HddComponent implements OnInit {
  constructor(private client: HttpClient) { }


  HDD1_Grose: string;
  HDD2_Grose: string;

  HDD1_Frei: string;
  HDD2_Frei: string;

  HDD1_UUID: string;
  HDD2_UUUD: string;

  ngOnInit() {
    setInterval(() => {
      this.client.get('http://[2a02:8108:8dc0:2178:da50:e6ff:fe51:7ce0]:5000/hdd')
        .subscribe(data => {
          console.log(data['hdd01' + 'asdasdas']);
          this.HDD1_Grose = data['hdd01_grose'];
          this.HDD2_Grose = data['hdd02_grose'];
          this.HDD1_Frei = data['hdd01_frei'];
          this.HDD2_Frei = data['hdd02_frei'];
          this.HDD1_UUID = data['hdd01_uuid'];
          this.HDD2_UUUD = data['hdd02_uuid'];
        });
    }, 1000);
  }

}
