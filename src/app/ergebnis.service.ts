import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErgebnisService {

  private ruhepuls : number = 0.0;
  private maxpuls : number = 0.0;
  private trainingsart : string = "intensiv";
  private kommentar : string = "";


  constructor() { }

  setRuhepuls(ruhepuls:number){
    this.ruhepuls = ruhepuls;
  }
  setmaxpuls(maxpuls:number){
    this.maxpuls = maxpuls;
  }
  setTrainingsart(trainingsart:string){
    this.trainingsart = trainingsart;
  }
  setKommentar(kommentar:string){
    this.kommentar = kommentar;
  }
  getRuhepuls(){
    return this.ruhepuls;
  }
  getMaxpuls(){
    return this.maxpuls;
  }
  getTrainingsart(){
    return this.trainingsart;
  }
  getKommentar(){
    return this.kommentar;
  }
}
