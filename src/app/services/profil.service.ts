import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../model/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  public url= 'http://localhost:3000/profils/'
  public profile: Profile;
  constructor(private http: HttpClient) {
  }
 
  getProfile(){
    return this.http.get<Profile[]>(this.url)
  }

  addProfil(p:Profile){
    return  this.http.post(this.url,p)
  }
  deleteProfil(id:number){
    return this.http.delete(this.url+id)
  }
  updateProfile(id:number,p:Profile){
    return this.http.put(this.url+id,p)
  }
  getProfileById(id:number){
    return this.http.get<Profile>(this.url+id)
  }

}
