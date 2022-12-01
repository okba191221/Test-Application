import { Component, OnInit } from '@angular/core';
import { Profile } from '../model/profile';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilService } from '../services/profil.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  public profile: Profile;
  public action : string;

  constructor(private profilService : ProfilService ,private router: Router, private currentRouter: ActivatedRoute ) { }

  ngOnInit(): void {

    console.log(this.currentRouter.snapshot.params['id'])
    let id= this.currentRouter.snapshot.params['id'];
      this.profilService.getProfileById(id).subscribe(
        (data: Profile)=> this.profile= data
      )

      
  }
}
