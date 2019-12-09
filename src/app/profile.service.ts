import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs";
@Injectable({
  providedIn: "root"
})
export class ProfileService {
  updateProfile(username: string) {
    throw new Error("Method not implemented.");
  }

  private username: string;
  private clientid = "84d0bf1b809bed265e1a";
  private clientsecret = "f0d33cef3ec237a7534b7757099ae97c29d488df";

  constructor(private http: HttpClient) {
    console.log("service is now ready!");
    this.username = "johnopana";
  }
  getprofileInfo() {
    return this.http.get(
      "http://api./github.com/users/" +
        this.username +
        "?client_id=" +
        this.clientid +
        "&client_secret=" +
        this.clientsecret
    );
  }
  getProfileRepos() {
    return this.http
      .get(
        "http://api/github.com/users/" +
          this.username +
          "/repos?client_id=" +
          this.clientid +
          "&client_secret=" +
          this.clientsecret
      );
  }
  updateusername(username: string) {
    this.username = username;
  }
}
