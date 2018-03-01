import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  city:string;
  state:string;
  constructor(public navCtrl: NavController, private storage:Storage) {
    this.storage.get('location').then((val) =>{
        if(val != null){
          let location = JSON.parse(val);
          this.city = location.city;
          this.state = location.state;
        } else {
          this.city = 'San Francisco';
          this.state = 'CA';
        }
    });
  }

} 
