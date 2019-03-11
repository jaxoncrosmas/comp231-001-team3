import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService{
    constructor(private http: HttpClient){}

    messages: any;
        getMessage(){
            this.http.get('http://localhost:3000/posts').subscribe(res => {


                this.messages = res;
            });
        }
    }
