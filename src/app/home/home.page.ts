import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import{ErgebnisService}from'../ergebnis.service';
import { AlertController, NavController} from '@ionic/angular';
import { StorageService , Item } from '../storage.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   maxfrequenz;
  ruhepuls;
  trainingsart;
  kommentar;
  items: Item[] = [];
  newItem: Item =<Item>{};
  constructor(private toastController: ToastController, private storageService : StorageService, private ergebnisService : ErgebnisService,private alertController : AlertController, private router : Router, private nav : NavController) {
    
  }
  async zeigeDialog(nachricht:string){
    const alert = 
      await this.alertController.create({
        header: "Ergebnis",
        message: this.trainingsart,
        buttons: ["ok"],
        backdropDismiss: false,
      });
      await alert.present();
  }
  navigiereErgebnis(){
    if(this.ruhepuls>=this.maxfrequenz||this.ruhepuls==null||this.maxfrequenz==null||this.kommentar==null||this.trainingsart==null){
      this.presentToast();
    }else{
      switch(this.ergebnisService.getTrainingsart()){
        case "intensiv":
          this.newItem.ergebnis=((this.maxfrequenz-this.ruhepuls)*0.8)+this.ruhepuls;
          break;
        case "extensiv":
          this.newItem.ergebnis=((this.maxfrequenz-this.ruhepuls)*0.6)+this.ruhepuls;
          break;
        case "untrainiert":
          this.newItem.ergebnis=((this.maxfrequenz-this.ruhepuls)*0.5)+this.ruhepuls;
          break;
      }
      this.newItem.datum=new Date(Date.now()).toLocaleString();
      this.newItem.kommentar=this.kommentar;
      this.newItem.ruhepuls=this.ruhepuls;
      this.newItem.maxpuls=this.maxfrequenz;
      this.newItem.trainingsart=this.trainingsart;
      this.addItem();
      this.ergebnisService.setRuhepuls(this.ruhepuls);
      this.ergebnisService.setmaxpuls(this.maxfrequenz);
      this.ergebnisService.setTrainingsart(this.trainingsart);
      this.ergebnisService.setKommentar(this.kommentar);
      this.nav.navigateForward("/ergebnis");
    }
  }
  addItem(){
    this.newItem.id=Date.now();
    
    this.storageService.addItem(this.newItem).then(item=>{
      this.newItem = <Item>{};
    })
    
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Eingaben fehlerhaft! Bitte bearbeiten Sie die Eingabe!',
      duration: 2000
    });
    toast.present();
  }
}
