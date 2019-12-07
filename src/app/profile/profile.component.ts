import { Component, OnInit } from '@angular/core'
;import { profileService } from '../../services/profile.services';
import { ProfileService } from '../profile.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private ProfileService: ProfileService) {
    this.ProfileService.getprofileInfo().subscribe(profile =>{
      console.log(profile);
    })  
  }

  ngOnInit() {
  }

}
