import { Injectable } from '@angular/core';
import { Http,Headers } from  '@angular/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid ='';
  private clientsecret ='';

  constructor(private http:Http) { 
    console.log("service is ready"!);
    this.username =" Johnopana";
  }
  getprofileInfo(){
    return this.http.get("http://github.com + this.username + "?client_id=" +  this.client + &client_secrete =" + this .clientsecret),
    .map(res =>res.json());

  }
  getProfileRepos(){return this.http.get("http://github.com + this.username + "/repos?client_id =" +  this.client + &client_secrete =" + this .clientsecret),
  .map(res =>res.json());


  }
  
}
