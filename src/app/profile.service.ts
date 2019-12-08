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
    console.log("service is now ready!");
    this.username ='johnopana';
  }
  getprofileInfo(){
    return this.http.get("http://api./github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret).map (res => res.json());
  }
  getProfileRepos(){return this.http.get("http://api/github.com/users/" +  this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret).map (res => res.json());

  }
updateusername(username:string){
 this.username = username; 
}
}
