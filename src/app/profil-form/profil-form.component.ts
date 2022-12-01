import { Component, OnInit } from '@angular/core';
import { Profile } from '../model/profile';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilService } from '../services/profil.service';

@Component({
  selector: 'app-profil-form',
  templateUrl: './profil-form.component.html',
  styleUrls: ['./profil-form.component.css']
})
export class ProfilFormComponent implements OnInit {

  public profile: Profile;
  public action : string;

  constructor(private profilService: ProfilService,
    private router: Router, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.currentRoute.snapshot.params['id'])
    //condition id
    let id= this.currentRoute.snapshot.params['id'];
    if(id!=null){
      this.action = "update";
      //update  +1 examen
      this.profilService.getProfileById(id).subscribe(
        (data: Profile)=> this.profile= data
      )
    }else
      {
        this.action = "save";
        this.profile= new Profile();
      }
  }
  saveProfile(){
    if(this.action == "save"){
        //this.productService.list.push(this.product);
        this.profilService.addProfil(this.profile).subscribe(
          ()=>this.router.navigate(['/me/1'])
        );
      }
      else{
        this.profilService.updateProfile(this.profile.id, this.profile).subscribe(
          ()=>this.router.navigate(['/me/1'])
        );
      }
    }
}
