import { Component, OnInit } from '@angular/core'
import { profileService } from  '../../services/srofile/services';
import { ProfileService } from '../profile.service';
import { Profile } from 'selenium-webdriver/firefox';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile:any[];
repos:any[];
username:string;

  constructor(private ProfileService: ProfileService) {  

}
findProfile(){
  this.ProfileService.updateProfile(this.username);
  this.ProfileService.getprofileInfo().subscribe(Profile =>{
    console.log(Profile);
    this.profile = Profile;  
 });
this.ProfileService.getProfileRepos().subscribe(repos => {
 console.log(repos);
 this.repos = repos;
})    


}

  ngOnInit() {
  }

}
