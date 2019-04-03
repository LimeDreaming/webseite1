import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ordner',
  templateUrl: './ordner.component.html',
  styleUrls: ['./ordner.component.css']
})
export class OrdnerComponent implements OnInit {
  constructor(private client: HttpClient) { }
  OrdnerAnime: string;
  OrdnerAnimeSerie: string;
  OrdnerMovie: string;
  OrnderMovieSerie: string;
  TextOuput: string;


  ngOnInit() {
    setInterval(() => {
      this.client.get('http://[2a02:8108:8dc0:2178:da50:e6ff:fe51:7ce0]:5000/ordner')
        .subscribe(data => {
          console.log(data['hdd01' + 'asdasdas']);
          this.TextOuput = data['main'];

        });
    }, 2000);
  }

}
