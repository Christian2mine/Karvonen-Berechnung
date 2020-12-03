import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StorageService , Item} from '../storage.service';

@Component({
  selector: 'app-historie',
  templateUrl: './historie.page.html',
  styleUrls: ['./historie.page.scss'],
})
export class HistoriePage implements OnInit {
  items: Item[] = [];
  newItem: Item =<Item>{};
  constructor(private storageService :StorageService, private plt:Platform) {
    this.plt.ready().then(() =>{
      this.loadItems();
    });
  }

  ngOnInit() { 
  }
  loadItems(){
    this.storageService.getItems().then(items=>{
      this.items=items;
    });
  }
  deleteItem(item: Item){
    this.storageService.deleteItem(item.id).then(item=>{
      this.loadItems();
    });
    this.loadItems();
  }

}
