import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from  '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid ='';
  private clientsecret ='';

  constructor(private http:HttpClient) { 
    console.log("service is ready"!);
    this.username =" Johnopana";
  }
  getprofileInfo(){
    return this.http.get("http://github.com" + this.username + "?client_id=" +  this.client + & client_secrete = " + this .clientsecret),
    .map(res =>res.json());

  }
  getProfileRepos(){return this.http.get("http://github.com + this.username + "/repos?client_id =" +  this.client + &client_secrete =" + this .clientsecret),
  .map(res =>res.json());


  }
  updateProfile(username:string){
    this.username =username;
  }
}
