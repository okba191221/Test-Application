import { Component, OnInit } from '@angular/core';
import { Profile } from '../model/profile';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  public profile: Profile;
  public action : string;

  constructor( private router: Router, private currentRouter: ActivatedRoute ) { }

  ngOnInit(): void {
    this.profile = {id:1, name: "okba Oueslati",
      profesion: "It trainer", picture: "https://bootdey.com/img/Content/avatar/avatar7.png",
      experience: 6,
      email: "okba.weslati@area.tn",
      website: "https://www.linkedin.com/in/okba-oueslati",
      phone: 21625000000,
      description: "I am a trainer in the field of information technology but I have been working as geologist engineer for 6 years",
      skill_1: "frontend", valueSkill_1: 80,
      skill_2: "backend", valueSkill_2: 70,
      skill_3: "SGBD", valueSkill_3: 50,
      skill_4: "DevOps", valueSkill_4: 60,
      education: "I am geologist engineer from the National School of Engineering of Sfax, PhD in geology from the University of Sfax, Master in IT from the National School of Engineering of Sfax, and fullStack developer from ESPRIT school of engineering"}
  }

}
