import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErgebnisService } from '../ergebnis.service';

@Component({
  selector: 'app-ergebnis',
  templateUrl: './ergebnis.page.html',
  styleUrls: ['./ergebnis.page.scss'],
})
export class ErgebnisPage implements OnInit {
  data : any;
  myVariable : number = 1;
  ruhepuls : number = this.ergebnisService.getRuhepuls();
  maxpuls : number = this.ergebnisService.getMaxpuls();
  constructor(private ergebnisService : ErgebnisService) { 
    
  }

  ngOnInit() {
    
    switch(this.ergebnisService.getTrainingsart()){
      case "intensiv":
        this.myVariable=((this.maxpuls-this.ruhepuls)*0.8)+this.ruhepuls;
        break;
      case "extensiv":
        this.myVariable=((this.maxpuls-this.ruhepuls)*0.6)+this.ruhepuls;
        break;
      case "untrainiert":
        this.myVariable=((this.maxpuls-this.ruhepuls)*0.5)+this.ruhepuls;
        break;
    }
  }

}
