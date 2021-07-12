import { Component, OnInit } from '@angular/core';
// import { DataService } from './data.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'image-gallery';
  public data:any = []
  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    const url ='https://jsonplaceholder.typicode.com/albums/1/photos'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }

}
