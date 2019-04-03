import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-neue-ordner',
  templateUrl: './neue-ordner.component.html',
  styleUrls: ['./neue-ordner.component.css']
})
export class NeueOrdnerComponent implements OnInit {

  constructor(private client: HttpClient) { }
  TextOuput: string;
  ngOnInit() {
    setInterval(() => {
      this.client.get('http://[2a02:8108:8dc0:2178:da50:e6ff:fe51:7ce0]:5000/NeueOrdner')
        .subscribe(data => {
          console.log(data['hdd01' + 'asdasdas']);
          this.TextOuput = data['main'];

        });
    }, 1000);
  }

}
