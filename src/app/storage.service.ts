import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Item {
  id          : number,
  datum       : string,
  ruhepuls    : number,
  maxpuls     : number,
  trainingsart: string,
  kommentar   : string,
}

const ITEMS_KEY ='my-items';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage:Storage) { }

  addItem(item : Item): Promise<any>{
    return this.storage.get(ITEMS_KEY).then((items: Item[])=>{
      if(items){
        items.push(item);
        return this.storage.set(ITEMS_KEY, items);
      }else{
        return this.storage.set(ITEMS_KEY, [item]);
      }
    });
  }

  getItems(): Promise<Item[]>{
    return this.storage.get(ITEMS_KEY);

  }

  deleteItem(id: number){
    return this.storage.get(ITEMS_KEY).then((items:Item[])=>{
      if(!items||items.length===0){
        return null;
      }
      let toKeep: Item[] = [];
      for(let i of items){
        if ( i.id !==id){
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });

  }
}
