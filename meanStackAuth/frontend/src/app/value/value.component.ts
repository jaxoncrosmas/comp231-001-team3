import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  values: any;
  subitem : any;
  
  constructor(private http: HttpClient) {  }

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
     
      for(var i = 0; i < this.values.length; i++) {
        setTimeout((subitem) => {
           this.subitem = subitem;
         },i * 500, this.values[i])
     }

    }, error => {
       console.log(error);
    }  );
  
  }
}
